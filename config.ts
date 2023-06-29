import { load } from "https://deno.land/std/dotenv/mod.ts";

const env = await load();

const token = env["DISCORD_TOKEN"];
const clientId = env["DISCORD_CLIENT_ID"];

export { clientId, token };
