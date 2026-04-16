# Nouns Builder Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Official documentation for [Nouns Builder](https://nouns.build/), a protocol for creating and managing Nouns-style DAOs.

## Links

- 🌐 [Live Site](https://docs.nouns.build/)
- 🏗️ [Nouns Builder App](https://nouns.build/)
- 🐙 [GitHub](https://github.com/BuilderOSS)
- 💬 [Discord](https://discord.gg/bTygNksyRb)
- 🟣 [Farcaster](https://farcaster.xyz/~/channel/builder)

## 🚀 Project Structure

```
.
├── public/                     # Static assets and guide screenshots
│   ├── guides/                # Screenshots organized by feature
│   └── onboarding/            # Onboarding guide images
├── src/
│   ├── assets/images/         # Documentation images
│   ├── content/
│   │   ├── docs/
│   │   │   ├── onboarding/    # Getting started guides
│   │   │   ├── guides/        # User guides
│   │   │   └── contributors/  # Contributor documentation
│   │   └── config.ts          # Content schema configuration
│   └── env.d.ts
├── astro.config.mjs           # Astro and Starlight configuration
├── package.json
└── tsconfig.json
```

Documentation is written in `.mdx` files in the `src/content/docs/` directory. The site navigation is automatically generated from the directory structure as configured in `astro.config.mjs`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Content Organization

The documentation is organized into three main sections:

- **Getting Started** (`src/content/docs/onboarding/`) - Onboarding guides for new users
- **User Guide** (`src/content/docs/guides/`) - Feature guides for creating DAOs, auctions, governance, etc.
- **Contributor Guide** (`src/content/docs/contributors/`) - Documentation for contributors and developers

## 🛠️ Development

This site is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). To contribute:

1. Fork the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Make your changes to the content in `src/content/docs/`
5. Test your changes locally
6. Submit a pull request

## 📝 Writing Documentation

- Use `.mdx` files for all documentation
- Place images in `src/assets/images/` and reference with relative paths
- Guide screenshots should be placed in `public/guides/[feature-name]/`
- Follow the existing content structure and style