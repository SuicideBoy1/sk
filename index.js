const Discord = require('discord.js');
const fs = require("fs");
const forEachTimeout = require ('foreach-timeout');
const bot = new Discord.Client();
const colors = ["FF0D00","FF2800","FF3D00","FF4F00","FF5F00","FF6C00","FF7800","FF8300","FF8C00","FF9500","FF9E00","FFA500","FFAD00","FFB400","FFBB00","FFC200","FFC900","FFCF00","FFD600","FFDD00","FFE400","FFEB00","FFF200","FFFA00","F7FE00","E5FB00","D5F800","C6F500","B7F200","A8F000","98ED00","87EA00","74E600","5DE100","41DB00","1DD300","00C618","00BB3F","00B358","00AC6B","00A67C","009E8E","028E9B","06799F","0969A2","0C5DA5","0E51A7","1047A9","133CAC","1531AE","1924B1","1F1AB2","2A17B1","3415B0","3C13AF","4512AE","4E10AE","560EAD","600CAC","6A0AAB","7608AA","8506A9","9702A7","AD009F","BC008D","C7007D","D0006E","D8005F","DF004F","E7003E","EF002A","F80012"];
const stop = [];
const emojis = {
    yes:'483325848749998080', 
    no:'483325856748666890',
};

const prefix = "s!";

//------------------------------------------------------------------------
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `за чатом`, type: 3 } }).catch();
});
//------------------------------------------------------------------------
async function color () {
    forEachTimeout(colors, (color) => {
        bot.guilds.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.find('name', '✬Радужный✬');
                if (role && role.editable) 
                    role.setColor(color);
            }  
        })
    }, 500).then(color);
}
bot.on('ready', () => {
    color();


bot.on('message', (message) => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "say" && ['248521740945195008', '301020093247127552', '471617346751168512', '471617594864959498'].includes(message.author.id)){
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

if (message.channel.id == '480879077600002049') {
    message.react('483325848749998080') 
    message.react('483325856748666890');
}

  if (message.content.startsWith(`${prefix}h`)){
   message.delete();
    let replies = ["45 <:Hromosoma:471283165944610836>", "46 <:Hromosoma:471283165944610836>", "47 <:Hromosoma:471283165944610836>", "48 <:Hromosoma:471283165944610836>", "49 <:Hromosoma:471283165944610836>", "50 <:Hromosoma:471283165944610836>", "51 <:Hromosoma:471283165944610836>", "52 <:Hromosoma:471283165944610836>", "53 <:Hromosoma:471283165944610836>", "54 <:Hromosoma:471283165944610836>", "55 <:Hromosoma:471283165944610836>", "56 <:Hromosoma:471283165944610836>", "57 <:Hromosoma:471283165944610836>", "58 <:Hromosoma:471283165944610836>", "59 <:Hromosoma:471283165944610836>", "60 <:Hromosoma:471283165944610836>", "61 <:Hromosoma:471283165944610836>", "62 <:Hromosoma:471283165944610836>", "63 <:Hromosoma:471283165944610836>", "64 <:Hromosoma:471283165944610836>", " 65 <:Hromosoma:471283165944610836>", "66 <:Hromosoma:471283165944610836>", "67 <:Hromosoma:471283165944610836>", "68 <:Hromosoma:471283165944610836>", "69 <:Hromosoma:471283165944610836>", "70 <:Hromosoma:471283165944610836>", "71 <:Hromosoma:471283165944610836>", "72 <:Hromosoma:471283165944610836>", "73 <:Hromosoma:471283165944610836>", "74 <:Hromosoma:471283165944610836>", "75 <:Hromosoma:471283165944610836>", "76 <:Hromosoma:471283165944610836>", "77 <:Hromosoma:471283165944610836>", "78 <:Hromosoma:471283165944610836>", "79 <:Hromosoma:471283165944610836>", "80 <:Hromosoma:471283165944610836>", "81 <:Hromosoma:471283165944610836>", "82 <:Hromosoma:471283165944610836>", "83 <:Hromosoma:471283165944610836>", "84 <:Hromosoma:471283165944610836>", "85 <:Hromosoma:471283165944610836>", "86 <:Hromosoma:471283165944610836>", "87 <:Hromosoma:471283165944610836>", "88 <:Hromosoma:471283165944610836>", "89 <:Hromosoma:471283165944610836>", "90 <:Hromosoma:471283165944610836>", "91 <:Hromosoma:471283165944610836>", "92 <:Hromosoma:471283165944610836>", "93 <:Hromosoma:471283165944610836>", "94 <:Hromosoma:471283165944610836>", "95 <:Hromosoma:471283165944610836>", "96 <:Hromosoma:471283165944610836>", "97 <:Hromosoma:471283165944610836>", "98 <:Hromosoma:471283165944610836>", "99 <:Hromosoma:471283165944610836>", "100 <:Hromosoma:471283165944610836>"];

    let result = Math.floor((Math.random() * replies.length));
    
   let user = message.mentions.users.first();
    if (!user) user = message.author;
    let embed = new Discord.RichEmbed()

    .setColor('RANDOM')
    .addField("Пользователь:", user)
    .addField("Хромосомы:", replies[result]);

    return message.channel.send(embed)
  }

    if (message.content.startsWith("+sex")) {
    if(!args[0]) return message.channel.send('```+sex @user\n\nВыебать пользователя.```');
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
            message.channel.send("Загрузка.").then(msg => {
                const urls = ['https://static.hentai-gifs.com/upload/20160506/14/27150/1.gif', 'https://cdn.discordapp.com/attachments/428290347534123008/477554893205536778/85b54d01ce6898f555e0a66eb54a01ab.gif','https://cdn.discordapp.com/attachments/428290347534123008/477555514994196481/6981fee72bcd6f3898ddef378bc84.gif', 'https://static.hentai-gifs.com/upload/20160426/3/5738/detail.gif', 'https://static.hentai-gifs.com/upload/20160425/1/1891/detail.gif', 'https://static.hentai-gifs.com/upload/20160426/3/5820/detail.gif', 'http://tbib.org/images/3077/00dd247aa2ab8d2a5e1682f53e3c9dc328f050b5.gif?3590962', 'https://static.hentai-gifs.com/upload/20160425/2/4030/detail.gif', 'https://hentaiporns.net/wp-content/uploads/2018/03/6023902-cfab3f8759c233b08842149edcf835b9.gif ', 'http://tbib.org/images/1053/ae959f49535790a81368572d25292bde0aca8fc4.gif?1052103'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} занялся сексом с ${user1}.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM')
                        .setTimestamp(); 
                        msg.edit({embed});
            });
        }
if (message.content.startsWith(`${prefix}avatar`)) {
    let user = message.mentions.users.first();
    if (!user) user = message.author;
    let embed = new Discord.RichEmbed()
    .setColor("0C6BCD")
    .setImage(user.avatarURL)
    message.channel.send({embed});
}


    if (message.member.hasPermission('MANAGE_GUILD') || message.member.hasPermission('ADMINISTRATOR') || message.member.id === message.guild.owner.id) {
        if (message.content === '!stay') {stop.push(message.guild.id); return message.channel.send('Готово');}
        if (message.content === '!go') {stop.splice(stop.indexOf(message.guild.id),1); return message.channel.send('Готово');}
    }
})
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

});

bot.login(process.env.BOT_TOKEN);
