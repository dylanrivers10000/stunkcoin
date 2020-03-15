module.exports = {
  name:"suckcock",
  module:"stuff",
  cooldown:600,
  execute: (client, message, args) => {
    const amount = Math.floor((Math.random() * 101) + 100)
    client.economy.add(message.guild.id + "." + message.author.id + ".cash", amount)
    message.channel.send("You sucked some stranger’s massive cock earned " + amount)
  }
}