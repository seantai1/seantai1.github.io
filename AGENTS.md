# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` (entry: `src/main.tsx`, app shell: `src/App.tsx`).
- UI: `src/components/` (shared) and `src/components/ui/` (shadcn).
- Pages: `src/pages/` routed via React Router.
- Hooks: `src/hooks/` (prefix with `use*`).
- Utilities: `src/lib/` (e.g., `utils.ts`).
- Static assets: `public/` (served at root). Aliases: `@` → `./src`.

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server (port 8080 per `vite.config.ts`).
- `npm run build`: Production build to `dist/`.
- `npm run build:dev`: Dev-mode build (useful for faster previews).
- `npm run preview`: Serve build locally for verification.
- `npm run lint`: Lint all files via ESLint.

Example: `npm i && npm run dev` then open http://localhost:8080.

## Coding Style & Naming Conventions
- Language: TypeScript + React function components (`.tsx`).
- Components: PascalCase files (e.g., `UserCard.tsx`); one component per file.
- Hooks: camelCase, start with `use` (e.g., `useAuth.ts`).
- Modules/paths: Prefer alias `@/...` (e.g., `@/components/Button`).
- Styling: Tailwind CSS utilities; extend tokens in `tailwind.config.ts`.
- Linting: ESLint (TS + React Hooks rules). Fix warnings before PR.

## Testing Guidelines
- No test runner is configured yet. For new features, prefer adding unit tests with Vitest + React Testing Library in `src/**/__tests__` or `*.test.ts(x)`.
- Keep tests colocated with code when small; use descriptive test names.

## Commit & Pull Request Guidelines
- Commits: Imperative, concise subject (≤72 chars). Example: `Add hero section layout`.
- Scope changes logically; avoid mixed refactors + features in one commit.
- PRs: Include clear description, screenshots for UI changes, and steps to verify.
- Link related issues (e.g., `Closes #123`). Ensure `npm run lint` passes and app builds.

## Security & Configuration Tips
- Do not commit secrets. Vite exposes env vars prefixed with `VITE_`.
- Key configs: `vite.config.ts` (aliases, dev port), `tailwind.config.ts` (theme), `components.json` (shadcn aliases).
- Static files in `public/` are served as-is; review before publishing.

