module.exports = {
  name:"sellpanties",
  module:"stuff",
  cooldown: 86400,
  execute: (client, message, args) => {
    const amount = Math.floor((Math.random() * 101) + 50)
    client.economy.add(message.guild.id + '.' + message.author.id + ".cash", amount)
    message.channel.send("You sold your worn panties earned " + amount)
  }
}