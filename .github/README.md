# Discord Autorole Badges

The purpose of this GitHub, Discord Autorole Badges code resource is if a person with a badge gives an automatic badge role when you join your server

## Installation
#### It will not work if you do not have NodeJS installed on your computer. We do not recommend downloading Node.js Current because it is a new version, so you may encounter errors, so download it as Node.js (LTS). Download here: [Node.js](https://nodejs.org)
#### Requires Node v16 or higher.
```md
npm install
```

## Run
```md
node index.js
```

## Example
```js
const {Manager} = require('discord-autorole-badges');
const {Client} = require('discord.js');
const client = new Client({ intents: 32767 })


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
    console.log("Discord login successful!")
})

client.login(token);

```
