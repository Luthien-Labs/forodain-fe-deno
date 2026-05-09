# Chronicles of the Broken Spear

A campaign site for an ongoing Dungeons & Dragons game set in the mists of Forodain. Displays session summaries, world lore, characters, denizens, and deities — all pulled from a live API.

Built with **React 19 + TypeScript + Vite**, styled with **SCSS** using a Field Journal theme. This is a ground-up rewrite of the [original repo](https://github.com/flash/forodain), replacing Tailwind CSS with hand-crafted SCSS and upgrading the toolchain to Deno-managed dependencies.

## Stack

- React 19 / TypeScript 6
- Vite 8
- SCSS (Sass)
- Deno (dependency management via `deno.lock`)
- Nix flake for the dev shell

## Sections

| Section | Status |
|---|---|
| The Story | Live — chapters fetched from API |
| The World | Placeholder |
| Denizens | Placeholder |
| Deities | Placeholder |
| Characters | Placeholder |

## API

Data is served by the Forodain API at `https://forodain-api.luthien-labs.net`. Requests are authenticated with a daily-rotating SHA-256 hash of the API key.

Copy `.env.example` to `.env` and fill in your key:

```
VITE_API_BASE_URL=https://forodain-api.luthien-labs.net
VITE_API_KEY=your_api_key_here
```

The Vite dev server proxies `/api` to the base URL automatically, so no CORS issues locally.

## Installation

Dependencies are managed by Deno. To install:

```sh
deno install
```

Or with npm if you prefer:

```sh
npm install
```

## Dev

```sh
npm run dev
```

## Build

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Nix

A Nix flake is included. Enter the dev shell with:

```sh
nix develop
```

This provides Deno, Zsh, and the Deno VS Code extension.

## To-do

- [ ] The World section
- [ ] Denizens section
- [ ] Deities section
- [ ] Characters section
- [ ] Mobile layout polish
