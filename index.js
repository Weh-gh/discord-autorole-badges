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
