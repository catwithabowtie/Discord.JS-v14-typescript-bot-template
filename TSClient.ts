import { Client, Collection } from "discord.js";

export default class TSClient extends Client {
    commands: Collection<string, unknown>;

    constructor(options?: any) {
        super(options);
        this.commands = new Collection();
    }
}
