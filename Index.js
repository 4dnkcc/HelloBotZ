const Discord = require('discord.js');
const { prefix, } = require('./config.json');
const config = require('./config.json');
const client = new Discord.Client();
const { accounts, } = require('./accounts.json');
const { blacklist, } = require('./blacklist.json');
const {MessageEmbed } = require('discord.js');


client.once('ready', () => {
 console.log("Ready!")
})

client.on("message", message => {
    console.log(message.content);

})

client.on('ready', () => {

    client.user.setActivity('Making your Accounts', {
        type: 'PLAYING'
    });
});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("general").send(`"${member.user.username}" has joined this server`);
});

client.on('message', message => {
    if(message.content.startsWith(`${prefix}GetKey`)) {
        if(message.channel.type == "text") {
	    if(message.author.id == "167476436779663360"){ // Check if member Is lmaobot
			let result = Math.floor((Math.random() * accounts.length))
			
             const embed = new MessageEmbed()
			.setTitle("Your account")
			 .setDescription('Here is your account: \"' + accounts[result] + "\"")
			 message.author.send(embed)
             }
			else{
				message.channel.send("You dont have the permission to ")
			}
        }
    }

    if(message.content.startsWith(`${prefix}Buy`)) {
        if(message.channel.type == "text") {

             const embed = new MessageEmbed()
			.setTitle("Process")
			.setDescription("To Buy The Key You will have to Visit https://shoppy.gg/product/9D8LOMT and Purchase the Key Then DM LmaoBot#2822")
			message.channel.send(embed)
            .catch()
        }
    }
	 if(message.content.startsWith(`${prefix}GetFreeKey`)) {
        if(message.channel.type == "text") {
			
             const embed = new MessageEmbed()
			.setTitle("Your account")
			 .setDescription("Lmao no dont try")
			 message.author.send(embed)
        }
    }
	
	    if(message.content.startsWith(`${prefix}blacklistedusers`)) {
        if(message.channel.type == "text") {
		if(message.author.id == "672764552336769030"){ // Check if member Is lmaobot

			let result = Math.floor((Math.random() * blacklist.length))
			
             const embed = new MessageEmbed()
			.setTitle("Your account")
			 .setDescription('Here is your account: \"' + blacklist[result] + "\"")
			 message.author.send(embed)
             }
			else{
				message.channel.send("Nope")
			}
         }
	}
	
			if(message.content.startsWith(`${prefix}GetFreeHulu`)) {
        if(message.channel.type == "text") {
			
             const embed = new MessageEmbed()
			.setTitle("Your account")
			.setColor("GREEN")
			.setThumbnail("https://media.discordapp.net/attachments/451027261286645762/631168941762281492/58480a75cef1014c0b5e491b.png")
			.setDescription("Buy a hulu account at https://hulu.com/")
			 message.author.send(embed)
        }
    }
})

client.login(token);
