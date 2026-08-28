# {{projectName}}

This is a [Val Build](https://val.build) project bootstrapped with `npm create @valbuild` (or `pnpm create @valbuild`).

## Getting Started

Install the dependencies and run the development server with the package manager you want to use:

```bash
npm install && npm run dev
# or
pnpm install && pnpm dev
# or
yarn && yarn dev
# or
bun install && bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(main)/page.val.ts`. The page auto-updates as you edit the file.

## Architecture

This project follows the **TABS** architecture: **Typography, Atoms, Base, and Sections**. TABS is a content-driven, layered architecture where Pages are built by composing Sections, which in turn use Atoms, Base components, and Typography primitives. Each layer has clear responsibilities and strict dependency rules.

For detailed information about the TABS architecture, see [src/components/README.md](src/components/README.md).

## File structure

It is recommended that all pages and layouts should be put under the (main) group (or another group you create yourself).
The reason for this is to make sure the `(main)/layout.tsx` does not interfere with Val Studio.

## Val Studio

You can update and edit content directly in the Val Studio by going to [http://localhost:3000/val](http://localhost:3000/val).

## Package manager

npm and pnpm are both supported (as are yarn and bun) — nothing here is tied to
one of them.

`npm create @valbuild` / `pnpm create @valbuild` installs with the package
manager you ran it with, and leaves exactly one lock file behind: the one that
package manager wrote. That lock file is the project's. If you clone this
template directly instead, the committed `package-lock.json` is npm's; to use a
different package manager, delete it before installing so you do not end up with
two lock files and only one of them real.

## Learn More

To learn more about Val Build, take a look at the [docs here](https://val.build/docs).

You can also check out [the Val Build GitHub repository](https://github.com/valbuild/val) - your feedback and contributions are welcome!

You can also setup you application in [Val Build App](https://app.val.build).

## Deploy

The easiest way to deploy your Val enabled application is is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

After deploying, you can make sure that everyone can edit content in production by setting up your application on [Val Build App](https://app.val.build).
