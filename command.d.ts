import { ChatInputCommandInteraction } from "discord";

interface Command {
  data: unknown;
  execute: ChatInputCommandInteraction & CallableFunction;
}
