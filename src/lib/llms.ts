import { getCollection } from 'astro:content';

const SITE_URL = 'https://docs.nouns.build';
const SITE_NAME = 'Nouns Builder Docs';
const SITE_DESCRIPTION = 'Documentation for users, contributors, and builders working with Nouns Builder.';

type DocEntry = Awaited<ReturnType<typeof getCollection<'docs'>>>[number];

function stripFrontmatter(source: string) {
  return source.replace(/^---\s*[\r\n]+[\s\S]*?[\r\n]+---\s*[\r\n]*/, '').trim();
}

function normalizeMarkdown(source: string) {
  const parts = source.replace(/\r\n/g, '\n').split(/(```[\s\S]*?```)/g);

  return parts
    .map((part, index) => {
      if (index % 2 === 1) return part;

      return part
        .replace(/^\s*import\s+.+$/gm, '')
        .replace(/^\s*export\s+.+$/gm, '')
        .replace(/^\s*<\/?[A-Z][^>]*>\s*$/gm, '');
    })
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function titleFor(entry: DocEntry) {
  if (entry.data.title) return entry.data.title;

  const segments = entry.id.split('/');
  const basename = (segments.at(-1) || '').replace(/\.[^.]+$/, '');

  if (basename && basename !== 'index') return basename;

  return segments.at(-2) || entry.id;
}

function descriptionFor(entry: DocEntry) {
  return (entry.data.description || '').toString().replace(/\s+/g, ' ').trim();
}

function pathFor(entry: DocEntry) {
  const slug = entry.id.replace(/\.(md|mdx)$/i, '');
  if (slug === 'index') return '/';
  if (slug.endsWith('/index')) return `/${slug.replace(/\/index$/, '')}/`;
  return `/${slug}/`;
}

function urlFor(entry: DocEntry) {
  return `${SITE_URL}${pathFor(entry)}`;
}

function sortDocs(entries: DocEntry[]) {
  return [...entries].sort((a, b) => {
    const orderA = typeof a.data.sidebar?.order === 'number' ? a.data.sidebar.order : Number.MAX_SAFE_INTEGER;
    const orderB = typeof b.data.sidebar?.order === 'number' ? b.data.sidebar.order : Number.MAX_SAFE_INTEGER;
    if (orderA !== orderB) return orderA - orderB;
    return pathFor(a).localeCompare(pathFor(b));
  });
}

export async function getDocsForLlms() {
  const entries = await getCollection('docs');
  return sortDocs(entries).map((entry) => ({
    entry,
    title: titleFor(entry),
    description: descriptionFor(entry),
    path: pathFor(entry),
    url: urlFor(entry),
    content: normalizeMarkdown(stripFrontmatter(entry.body)),
  }));
}

export async function buildLlmsIndex() {
  const docs = await getDocsForLlms();
  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    '## Documentation Sets',
    '',
    `- [Complete documentation](${SITE_URL}/llms-full.txt): full documentation generated from the same docs source`,
    '',
    '## Pages',
    '',
    ...docs.map((doc) => {
      const escapedTitle = doc.title.replace(/\]/g, '\\]');
      return `- [${escapedTitle}](${doc.url})${doc.description ? `: ${doc.description}` : ''}`;
    }),
    '',
    '## Notes',
    '',
    '- These files are generated from `src/content/docs/**` during build time.',
    '- Prefer the canonical docs URLs above when citing Builder documentation.',
    '',
  ];

  return lines.join('\n');
}

export async function buildLlmsFull() {
  const docs = await getDocsForLlms();
  const sections = docs.flatMap((doc) => [
    `## ${doc.title}`,
    '',
    `Source: ${doc.url}`,
    ...(doc.description ? ['', `Description: ${doc.description}`] : []),
    '',
    doc.content,
    '',
  ]);

  return [
    `# ${SITE_NAME}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    '## Notes',
    '',
    '- This file is generated from the same source content as the public docs site.',
    '- Content comes from `src/content/docs/**` and is intended for LLM ingestion and retrieval.',
    '',
    ...sections,
  ].join('\n');
}
