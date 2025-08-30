# Personal Website

This is a Vite + React + TypeScript project that powers Sean Tai’s personal website. It uses Tailwind CSS and shadcn/ui for styling and components.

Getting Started

```sh
pnpm install # or: npm install / bun install / yarn
pnpm dev     # or: npm run dev
```

Key Scripts
- `dev`: Run the local development server on http://localhost:8080
- `build`: Create a production build in `dist/`
- `preview`: Preview the production build locally
- `lint`: Lint the codebase with ESLint

Tech Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui

Project Structure
- `src/`: App code (`components/`, `pages/`, `hooks/`, `lib/`)
- `public/`: Static assets; served at site root (e.g., `/Sean_Tai_Resume.pdf`)

Notes
- Environment variables exposed to the client must be prefixed with `VITE_`.
- Aliases are configured: `@` → `./src`.
