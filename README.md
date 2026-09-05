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

<!-- val:mcp:start -->

## Coding agents (MCP)

This project serves Val's content tools over the
[Model Context Protocol](https://modelcontextprotocol.io) at
`/api/mcp`, so a coding agent can read your schemas, look content up, validate
it and edit it — without a browser and without being shown the Studio.

Point a client at it. In local development that is all it needs:

```bash
claude mcp add --transport http val http://localhost:3000/api/mcp
```

### What it can do

`get_all_schema`, `get_source`, `get_record_keys`, `count_entries`,
`validate_content`, `get_patches` and `get_source_path_from_route` read.
`create_patch`, `duplicate_source`, `empty_at_path` and
`remove_image_gallery_entry` write. Every write is validated against your real
schemas first and is rejected outright if it would leave the content invalid, so
an agent cannot break the site by editing it.

`upload_image` adds an image to an `s.images()` gallery or an `s.image()` field.
It is the one tool with a dependency of its own — `sharp`, for reading an
image's dimensions and re-encoding it — and it lives in
[`src/val/mcp.images.ts`](src/val/mcp.images.ts), which says how to turn it off.
If you created this project with `npm create @valbuild` and declined image
uploads, that file is already the off version and `sharp` is not installed.

### Deploying it

The endpoint refuses to serve on a deployed host in local filesystem mode. That
is not a setting: in that mode there is no credential and no backend, so the
tools read and write the running process's own working tree, and serving that
publicly is an unauthenticated write endpoint for anyone who can reach the port.

To use MCP against a deployed app, connect the project to
[Val Build](https://app.val.build) (proxy mode) and set `VAL_OAUTH_ISSUER` and
`VAL_MCP_RESOURCE`:

```
VAL_OAUTH_ISSUER=https://admin.val.build
VAL_MCP_RESOURCE=https://your-app.com/api/mcp
```

Every call then has to present an access token that Val's authorization server
issued, which this app verifies itself — signature, issuer, audience and expiry
— so the caller's identity is checked rather than claimed, and their edits show
up in the review screen as theirs. Clients discover where to authorize from
`/.well-known/oauth-protected-resource`.

Without that config a deployed app in proxy mode falls back to accepting a
personal access token as a bearer token. **Treat a PAT like a password**: it
grants everything its owner can touch, across every project of every
organization they belong to. Prefer the OAuth setup above, and revoke a token on
any suspicion.

<!-- val:mcp:end -->

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
