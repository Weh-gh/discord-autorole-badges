# Discord Autorole Badges

The purpose of this GitHub, Discord Autorole Badges code resource is if a person with a badge gives an automatic badge role when you join your server

## Installation
```md
npm install
```

## Run
```md
node index.js
```

## Quick Example
```md
const {Manager} = require('discord-autorole-badges');
const {Client} = require('discord.js');
const client = new Client({ intents: 32767})


let manager = new Manager(client, {
    DISCORD_EMPLOYEE: "role_id",
    PARTNERED_SERVER_OWNER: "role_id",
    HYPESQUAD_EVENTS: "role_id",
    BUGHUNTER_LEVEL_1: "role_id",
    HOUSE_BRAVERY: "role_id",
    HOUSE_BRILLIANCE: "role_id",
    HOUSE_BALANCE: "role_id",
    EARLY_SUPPORTER: "role_id",
    TEAM_USER: "role_id",
    BUGHUNTER_LEVEL_2: "role_id",
    VERIFIED_BOT: "role_id",
    EARLY_VERIFIED_BOT_DEVELOPER: "role_id",
    DISCORD_CERTIFIED_MODERATOR: "role_id",

})
client.on("guildMemberAdd", async (member) => {
    await manager.setRole(member);
})

client.on("ready", () => {
    console.log("Discord login successfully")
})

client.login(Discord_Bot_Token)

```

## Need some help?
Here are some Discord servers that can help you out with everything Discord VS Code:
The [Official Discord VS Code server](https://discord.gg/EjcZJedsMe) This server is the official community dedicated to helping you with Discord Visual Studio Code common issues. Discord Visual Studio Code members working on developer tools and feature extensions is a community for developers to support each other with direct access. An official place to go for your questions about the app and the littlest things you're stuck with. you can join the server



