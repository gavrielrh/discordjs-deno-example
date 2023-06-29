# discordjs-deno-example

This is an example repository for showing how to use
[discord.js](https://discord.js.org/) with [Deno](https://deno.land/).

## Requirements

A version of Deno new enough for `Node.js` compatibility. This example is
confirmed to work with `Deno@1.34.3`.

## Getting Started

Create a new `.env` file using [.env.template](.env.template) as an example.
Fill in the corresponding configuration values for your Discord application.

Run `deno task deploy:comands` to register the bot's slash commands.

Run `deno task dev` to start the bot in `watch` mode. Any file changes will be
picked up and cause the bot to reload.

## Differences from the discord.js Guide

- `Deno` has native support for [TypeScript](https://www.typescriptlang.org/),
  so we might as well leverage it!
- To keep things simple, we're using a flat [commands](./commands/) hierarchy
- We're only registering global slash commands to avoid needing extra config
- [config.ts](./config.ts) exports the necessary config values, read from
  [.env](./.env)
- We're using `ES Modules` instead of `CommonJS` (`import` vs `require`)
  - Further reading:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- We've configured [deno.jsonc](./deno.jsonc) to resolve the `discord.js`
  [npm](https://www.npmjs.com/) dependency as `discord`
  - Example: `import { Client } from 'discord';`
  - Further reading: https://deno.land/manual@v1.34.3/basics/import_maps
- The code for dynamically loading commands was rewritten to be `Deno`
  compatible
