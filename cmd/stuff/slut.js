module.exports = {
  name:"slut",
  module: "stuff", 
  cooldown: 4140,
  execute: (client, message, args) => {
    const chance = Math.floor(Math.random() * 101)
    if (chance+20 <= 55) {
      const amount = Math.floor(Math.random() * 401) + 100
      message.channel.send("sluttery successful you earned " + amount + " stunkcoins")
      return client.economy.add(message.guild.id + "." + message.author.id + ".cash", amount)
    } else if (chance <= 20) {
      const amount = Math.floor(Math.floor() * 501) + 500
      message.channel.send("You got gangbanged by multiply clients now you can’t walk for a week earned " + amount)
      return client.economy.add(message.guild.id + "." + message.author.id + ".cash", amount)
    } else {
      return message.channel.send("Your potion duration ran out in middle of sex you were exposed and beaten, earned nothing")
    }
  }
}