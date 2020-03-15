module.exports = {
  name: "creampie",
  cooldown: 86400,
  module: "stuff",
  execute: (client, message, args) => {
    const chance = Math.floor(Math.random() * 101)
    if (chance < 50) {
     return message.channel.send("You failed no baby no money")
    } else {
      message.channel.send("You got pregnant and gave birth to a new species and sold it for 900 stunk coins")
      client.economy.add(message.guild.id + "." + message.author.id + ".cash", 900)
    }
  }
}