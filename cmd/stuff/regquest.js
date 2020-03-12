module.exports = {
  name:"regquest",
  cooldown: 600000,
  module: "stuff",
  execute: (client, message, args) => {
    const chance = Math.floor(Math.random() * 101)
    if (!client.economy.has(message.guild.id + "." + message.author.id)) client.economy.set(message.guild.id + "." + message.author.id, {cash: 0, bank: 0})
    if (chance >= 65) {
      client.economy.add(message.guild.id + "." + message.author.id + ".cash")
    }
  }
}