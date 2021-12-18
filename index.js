const {Manager} = require('discord-autorole-badges');
const {Client} = require('discord.js');
const client = new Client({ intents: 32767})


let manager = new Manager(client, {
    DISCORD_EMPLOYEE: "Role_ID",
    PARTNERED_SERVER_OWNER: "Role_ID",
    HYPESQUAD_EVENTS: "Role_ID",
    BUGHUNTER_LEVEL_1: "Role_ID",
    HOUSE_BRAVERY: "Role_ID",
    HOUSE_BRILLIANCE: "Role_ID",
    HOUSE_BALANCE: "Role_ID",
    EARLY_SUPPORTER: "Role_ID",
    TEAM_USER: "Role_ID",
    BUGHUNTER_LEVEL_2: "Role_ID",
    VERIFIED_BOT: "Role_ID",
    EARLY_VERIFIED_BOT_DEVELOPER: "Role_ID",
    DISCORD_CERTIFIED_MODERATOR: "Role_ID",

})
client.on("guildMemberAdd", async (member) => {
    await manager.setRole(member);
})

client.on("ready", () => {
    console.log("Discord login successfully")
})

client.login(token)