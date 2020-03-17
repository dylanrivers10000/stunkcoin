module.exports = {
  name:"tax",
  module:"stuff",
  cooldown: 86400,
  execute: (client, message, args) => {
   let chance = Math.floor(Math.random() * 101) 
    if (chance <= 5) {
      const amount = Math.floor((client.economy.get(message.guild.id + "." + message.author.id + ".cash") + client.economy.get(message.guild.id + "." + message.author.id + ".bank")) * 25 / 100)
      client.economy.subtract(message.guild.id + "." + message.author.id + ".cash", amount)
      return message.channel.send("you had to pay 25% of your balance to taxes so you lost " + amount + " stunkcoins")
    } else if (chance + 5 <= 70) {
      const amount = Math.floor((client.economy.get(message.guild.id + "." + message.author.id + ".cash") + client.economy.get(message.guild.id + "." + message.author.id + ".bank")) / 100)
      client.economy.add(message.guild.id + "." + message.author.id + ".cash", amount)
      return message.channel.send("you got a tax refund, you got 1% to your balance")
    } else {
      message.channel.send("the tax broke which happens with a 30% chance, now u have to wait for another 2 hours (this isn't an error)")
    }
  }
}

