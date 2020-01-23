// Module Imports
const Discord = require('discord.js');
const {prefix, token } = require("./config.json");

// Create a new Discord client
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!");
});

client.on('message', message => {
    if(message.content.startsWith(`${prefix}setPC`)) {
        // 
    }
});

client.login(token);