const Discord = require('discord.js');
const fs = require('fs');
const config = require(`./../../config.json`);

module.exports.run = function(bot, command, args, message, updateJSON){
    return message.channel.send(`I am in ${bot.guilds.size} servers :D`);
}

module.exports.help = {
    names: ['servers']
}