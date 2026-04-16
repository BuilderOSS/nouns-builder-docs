## Summary
- point the README live site to the canonical docs.nouns.build domain
- replace stale nounsDAO frontend repo links with BuilderOSS/nouns-builder
- prefer BuilderOSS protocol references where the same resources are available
- fix the MetadataRenderer reference in img-config so `_generateSeed` points to the correct function definition
- unify core Builder Discord references to a single invite code across README, config, and docs
- remove outdated Zora transition wording and make the community Discord invite explicit

## Validation
- npm run build

## Deliberately out of scope
- Smart Invoice support links in escrow docs, which may be intentionally partner-specific
- roadmap and dated 2025 planning references
- llm.txt, llm-full.txt, robots.txt, and sitemap work

## Suggested maintainer review
- confirm BuilderOSS should be treated as the canonical public org for protocol/frontend links
- confirm `f845eBCyyb` is the preferred canonical Discord invite for Builder core/community surfaces
- review remaining dated statements like "As of August 2025" and "As of Q2 2025" for freshness
- review any remaining ownership/history wording that may need editorial cleanup
