# Next.js + Relay + Streaming

Experimenting with Next.js + Relay + Streaming setup using the
[experimental runtime flag](https://github.com/vercel/next.js/discussions/34179).
Currently works with a production build, but not in dev.

## Setup

Requires Node.js / PNPM. Clone this repo then:

```shell
pnpm install
```

Build and start the service:

```shell
cd service
pnpm build
pnpm start
```

Build and start the app:

```shell
cd app
pnpm schema:download
pnpm relay
NODE_ENV=production pnpm build
NODE_ENV=production pnpm start
```

Visit http://localhost:3000 to see the streaming page render 🎉.

## Dev Issues

Now start the server in dev:

```shell
pnpm dev
```

Visit http://localhost:3000 and you should see some errors from the server,
though the page will reconcile in hydration:

```
error - ../node_modules/.pnpm/cosmiconfig@6.0.0/node_modules/cosmiconfig/dist/readFile.js:9:0
Module not found: Can't resolve 'fs'

Import trace for requested module:
../node_modules/.pnpm/cosmiconfig@6.0.0/node_modules/cosmiconfig/dist/Explorer.js
../node_modules/.pnpm/cosmiconfig@6.0.0/node_modules/cosmiconfig/dist/index.js
../node_modules/.pnpm/babel-plugin-macros@2.8.0/node_modules/babel-plugin-macros/dist/index.js
../node_modules/.pnpm/babel-plugin-relay@13.1.1/node_modules/babel-plugin-relay/lib/BabelPluginRelay.macro.js
../node_modules/.pnpm/babel-plugin-relay@13.1.1/node_modules/babel-plugin-relay/macro.js
./src/blocks/ProductList.tsx
./src/pages/index.tsx
```

Strange because the Node.js runtime should allow `fs`, though maybe hitting
[this limitation](https://nextjs.org/docs/messages/module-not-found) when using
`babel-plugin-relay/macro` with incremental dev builds:

> The module you're trying to import uses Node.js specific modules, for example
> `dns`, outside of `getStaticProps` / `getStaticPaths` / `getServerSideProps`

Need to investigate more.
