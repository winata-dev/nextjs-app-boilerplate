## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Component Structure (Atoms, Molecules, Organisms, Templates)

Components follow a simple atomic design structure so the team can build UI with clear reuse boundaries:

- `atoms`: the smallest UI pieces (badges, icons, text labels).
- `molecules`: small combinations of atoms (input + label, card with title + text).
- `organisms`: larger sections made from molecules (feature sections, forms).
- `templates`: page-level scaffolds that arrange organisms and define layout.
- `providers`: app-wide wrappers (theme, auth, data providers).
- `ui`: shadcn/ui primitives.

## Generate Components with Plop

Run the generator and select the component type. Files will be created under `components/{type}/{Name}`.

```bash
pnpm generate
```

If you want to skip prompts:

```bash
pnpm generate -- component --componentType atoms --name BadgeDot
```

Example output:

```
components/atoms/BadgeDot/BadgeDot.tsx
components/atoms/BadgeDot/index.ts
```
