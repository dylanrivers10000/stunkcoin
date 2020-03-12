const {MessageEmbed} = require("discord.js")
module.exports = {
  name:"lend",
  module: "stuff",
  cooldown: 300000,
  execute: (client, message, args) => {
    const name = args[0]
    let member = message.mentions.users.first()
    if (!member) {
      member = message.guild.members.cache.find(e => e.user.username == name || e.id == name || e.user.tag == name)
      if (!member) message.reply("thats not a bitch u whore")
    }
  }
}