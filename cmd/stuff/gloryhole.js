module.exports = {
  name:"gloryhole",
  module:"stuff",
  cooldown: 120,
  execute: (client, message, args) => {
    const amount = Math.floor((Math.random() + 101) + 50)
    client.economy.add(message.guild.id + "." + message.author.id + ".cash", amount)
    message.channel.send("you sucked some strangers cock earned " + amount + " stunkcoins")
  }
}