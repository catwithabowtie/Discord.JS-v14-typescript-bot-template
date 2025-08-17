import { Client, Collection } from "discord.js";

export default class TSClient extends Client {
    commands: Collection<unknown, unknown>;

}
