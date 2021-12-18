# discord-autorole-badges
Hello,

This is the purpose of this coding: As someone comes to your discord server, if that person has a badge, the example automatically assigns the "HypeSquad Events" role.

If you didn't do it right or think you didn't, my discord server is here: https://discord.gg/CSBJNTWW3V

1. Instruction: Open empty folder and type "npm init" with terminal from any cmd or code application
2. Instruction: Yes if you are done with "npm init" type "npm i discord.js@13.3.1" and after this process is done type "npm i discord-autorole-badges"
3. Instruction: Create (index.js) file, if you name another name in the main part of the "npm init" process, write what you wrote instead, then start throwing the codes into the file

• If you have any problem or something on your mind, you can reach me on discord

• Do everything carefully and place it I hope it has been (No ping);


Example:
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




Cheers,
Mission creator

