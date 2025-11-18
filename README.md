# Discord.JS v14 Bot Template

## Requirements

1. NodeJS latest LTS version (This will come bundled with NPM)

## How to use
1. Check that nodeJS is installed correctly by doing `node -v` in a terminal, if you get an error try restarting your computer
2. Cd into the project by doing `cd .\Discord.JS-v14-typescript-bot-template\`
3. Install dependencies `npm install`
4. Cd into the source folder `cd src`
5. Put your bot's token on the `config.json` file, if you dont have a bot go to the [discord application page](https://discord.com/developers/applications) and create one
6. Deploy your commands to discord by doing one of these
    * Deploy only to your server using `npx tsx deploy-commands-guild.ts` (requires a guild id)
    * Deploy to all servers `npx tsx deploy-commands-global.ts`
7. Run `npx tsx index.ts` to start your bot.
If everything worked you should see `Ready! Logged in as (your bot's name)#(your bot's tag)!`

   