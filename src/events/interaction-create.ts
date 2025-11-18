import { ChatInputCommandInteraction, Events, MessageFlags } from 'discord.js';

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction: ChatInputCommandInteraction) {
		if (!interaction.isChatInputCommand()) return;
		// UPDATE ME: im not sure if this is the right solution, typecasting client -> any is very weird.
		const command = (interaction.client as any).commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
			}
		}
	},
};
