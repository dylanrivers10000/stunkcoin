const Discord = require("discord.js");
const fs = require('fs')

module.exports = {
    name: "eval",
	aliases: [], module: "owner",
  description: "the pro shit that can help make codes :p",
	usage: "<code>",
	ownerOnly: true,
    execute: (client, message, args) => { // looks more like python eval
    const guild = message.guild
    const channel = message.channel
    const author = message.author
    const user = message.member.user
		const clean = text => {
            if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else return text;
        }
        try {
            const code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string") {
				evaled = require("util").inspect(evaled);
            return message.channel.send(clean(evaled), {code:"js"});}
        } catch (err) {      
            return message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``, {code: "js"});
        }
	}
}