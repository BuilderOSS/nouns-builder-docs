import type { APIRoute } from 'astro';
import { buildLlmsIndex } from '../lib/llms';

export const prerender = true;

export const GET: APIRoute = async () => {
  const body = await buildLlmsIndex();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
