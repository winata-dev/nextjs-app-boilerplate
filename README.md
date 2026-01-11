This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
