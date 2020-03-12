const db = require("quick.db")
const Discord = require("discord.js")
const client = new Discord.Client({disableEveryone: true})
client.economy = new db.table("economy")
const cooldowns = new Discord.Collection();
const fs = require("fs")

client.on("ready", () => {
    console.log("bot ready, made by fiverlol")
})

const modules = fs.readdirSync(`./cmd/`).filter(file => !file.startsWith("_"))
for(const module1 of modules) {
	const commandFiles = fs.readdirSync(`./cmd/${module1}/`).filter(file => file.endsWith('.coffee') || file.endsWith(".js"));
	console.log(`Module: ${module1}`)
    for (const file of commandFiles) {
	   const command = require(`./cmd/${module1}/${file}`);
	   client.commands.set(command.name, command);
	   console.log(`${file} loaded!`)
    }
}

client.on('message', message => {
    let prefix = client.config.get(message.guild.id + ".prefix")
    if (!prefix) {
      prefix = "+" 
    } 
    const ch = client.channels.cache.find(e => e.id == 605698279975419904)
    client.squeue = client.queue.get(message.guild.id)
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    
    if (!command) return;
    if (command && client.blacklist.has(message.author.id) && message.author.id != 445234723590242304) return message.reply("lol ur on the blacklist ripperonies pepperonies dont abuse the bot's api")
    if (command.ownerOnly && message.author.id != 445234723590242304) return message.reply("only the owner can use this command")
    if (command.permission && !message.member.hasPermission(command.permission)) return message.channel.send(`you dont have permissions to use this command`)
    if (message.channel.type == 'dm') return;
    if (command.hidden) return
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = command.cooldown * 1000
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        const smth =expirationTime - now
        let totalSeconds = (smth / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        if (now < expirationTime) {
            return message.reply(`Please wait for ${days} day(s), ${hours} hour(s), ${minutes} minute(s), ${seconds} second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    try {
        command.execute(client, message, args);
    } catch (error) {
      console.log(error)
    }
});
client.login("Njg3NzY2MzY1OTY4NjYyNTYx.XmqiXg.HgCVEFfwqNkheQyLb5WnoX1xUcI")