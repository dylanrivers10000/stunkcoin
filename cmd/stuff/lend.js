module.exports = {
  name:"lend",
  module: "stuff",
  cooldown: 300,
  execute: (client, message, args) => {
    const name = args[0]
    let member = message.mentions.members.first()
    if (!member) {
      member = message.guild.members.cache.find(e => e.user.username == name || e.id == name || e.user.tag == name)
      if (!member) return message.channel.send("You dumb bitch thats not a member")
    }
    const amount = args[1]
    if (isNaN(amount)) return message.channel.send("thats not a number lol")
    if (!client.economy.has(message.guild.id + "." + member.id)) {
      client.economy.set(message.guild.id + "." + member.id, {cash: 0, bank: 0})
    }
    client.economy.add(message.guild.id + "." + member.id + ".cash", amount)
    message.channel.send("added " + amount + " to " + member.user.tag + "'s cash'")
  }
}