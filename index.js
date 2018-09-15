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

if (message.content.startsWith(`${prefix}ship`)) {

    message.delete();
  
     var bondLevel = Math.floor(Math.random() * 102);
     let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     let user2 = message.guild.member(message.guild.members.get(args[1]));
     let user3 = message.guild.member(message.guild.members.get(args[2]));
  
     if (bondLevel > 100 ) {
        var ship = 'Идеальная пара ♥ :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Ммм. yже не так плоxо <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'Немного рискованно, но может работать! '
        var bondLevelResults = '♥♥♥♥♥♥♥🖤🖤🖤'
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'не все потеряно.'
        var bondLevelResults = '♥♥♥♥♥♥🖤🖤🖤🖤'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = '=/. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = '... '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Все плохо.'
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'я не бyдy комментировать'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `​♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Невозможно...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }
  
      if(!args[1]){
          var bondEmbed = new Discord.RichEmbed()
  
          .setColor("007fff")
          .setDescription(`${message.author} & ${args[0]}`)
          .addField("Процент соместимости", `${bondLevel}%`)
          .addField("Любовь..", bondLevelResults)
          .addField("Ответ", ship)
          .setFooter('►СВЕРХКОНФА | s!ship @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
          .setTimestamp(); 
  
  
          return message.channel.send(bondEmbed)
      }
  
      if(!args[2]){
          var bondEmbed2 = new Discord.RichEmbed()
  
          .setColor("007fff")
          .setDescription(`${args[0]} & ${args[1]}`)
          .addField("Процент соместимости", `${bondLevel}%`)
          .addField("Любовь..", bondLevelResults)
          .addField("Ответ", ship)
          .setFooter('►СВЕРХКОНФА | s!ship @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
          .setTimestamp(); 
  
  
          return message.channel.send(bondEmbed2)
      }
  
  
      if(!args[3]) {
  
          var bondEmbed3 = new Discord.RichEmbed()
  
          .setColor("007fff")
          .setDescription(`${args[0]} и ${args[1]} & ${args[2]}`)
          .addField("Процент соместимости", `${bondLevel}%`)
          .addField("Любовь..", bondLevelResults)
          .addField("Ответ", ship)
          .setFooter('►СВЕРХКОНФА | s!ship @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
          .setTimestamp(); 
  
  
          return message.channel.send(bondEmbed)
      }
  }

if (message.content.startsWith(`${prefix}slap`)) {
    if(!args[0]) return message.channel.send('```s!slap @user\n\nУдарить пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send("Загрузка.").then(msg => {
        request('https://nekos.life/api/v2/img/slap', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Дал(а) пощёчину ${user1}.`)
                    .setImage(arr['url'])
                    .setFooter('►СВЕРХКОНФА | s!slap @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});   
                    msg.react('🤜');
            } catch (e) {
                console.log(e)
            }
        });
    });
}

if (message.content.startsWith(`${prefix}kiss`)) {
    if(!args[0]) return message.channel.send('```s!kiss @user\n\nПоцеловать пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send("Загрузка.").then(msg => {
        request('https://nekos.life/api/v2/img/kiss', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Поцеловал(а) ${user1}.`)
                    .setImage(arr['url'])
                    .setFooter('►СВЕРХКОНФА | s!kiss @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});  
                    msg.react('😘'); 
            } catch (e) {
                console.log(e)
            }
        });
   });
}

if (message.content.startsWith(`${prefix}pat`)) {
    if(!args[0]) return message.channel.send('```s!pat @user\n\nПогладить пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send("Загрузка.").then(msg => {        
        request('https://nekos.life/api/v2/img/pat', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Погладил(а) по голове ${user1}.`)
                    .setImage(arr['url'])
                    .setFooter('►СВЕРХКОНФА | s!pat @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});  
                    msg.react('✋');
            } catch (e) {
                console.log(e)
            }
        });
   });
}

if (message.content.startsWith(`${prefix}hug`)) {
    if(!args[0]) return message.channel.send('```s!hug @user\n\nОбнять пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send("Загрузка.").then(msg => {
        request('https://nekos.life/api/v2/img/hug', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Обнял(а) ${user1}.`)
                    .setImage(arr['url'])
                    .setFooter('►СВЕРХКОНФА | s!hug @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});
                    msg.react('🤝');
            } catch (e) {
                console.log(e)
            }
        });
    });
}

if (message.content.startsWith(`${prefix}nom`)) {
    if(!args[0]) return message.channel.send('```s!nom @user\n\nДать покушать пользователю```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send("Загрузка.").then(msg => {
        request('https://nekos.life/api/v2/img/feed', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Дал(а) покушать ${user1}.`)
                    .setImage(arr['url'])
                    .setFooter('►СВЕРХКОНФА | s!nom @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});
                    msg.react('🍔');
            } catch (e) {
                console.log(e)
            }
        });
    });
}

if (message.content.startsWith(`${prefix}poke`)) {
    if(!args[0]) return message.channel.send('```s!poke @user\n\nТыкнуть пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send("Загрузка.").then(msg => {
        request('https://nekos.life/api/v2/img/poke', function (error, response, body) {
            try {
                let arr = JSON.parse(body);
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Тыкнул(а) в ${user1}.`)
                    .setImage(arr['url'])
                    .setFooter('►СВЕРХКОНФА | s!poke @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});
            } catch (e) {
                console.log(e)
            }
        });
   });
}

if (message.content.startsWith(`${prefix}suicide`)) {
        message.channel.send("Загрузка.").then(msg => {
        const urls = ['https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://images-ext-2.discordapp.net/external/PVHDexd-zGtZwfUY_ivDzIR7bDaHDygKZ8XmR9jUOd8/https/i.imgur.com/cp9ZF1A.gif?width=360&height=203', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166', 'https://data.whicdn.com/images/290510883/original.gif', 'https://78.media.tumblr.com/6824d7afa9302623f7d9956ccb68778d/tumblr_mp7y69GFbW1s9t463o1_500.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.pinimg.com/originals/03/43/e6/0343e651eded6629041d165f9c0d7cf7.gif', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'https://i.imgur.com/ysphsEK.gif', 'https://i.imgur.com/WSioKga.gif', 'https://i.imgur.com/4Bw9XTs.gif', 'https://i.imgur.com/Q0H6LO2.gif'];
                        let user1 = message.author;
                        let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} Сделал суицид.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!suicide', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                        .setColor("#007fff")
                        .setTimestamp(); 
                        msg.edit({embed});
                        msg.react('💀');
                });
            }
    if (message.content.startsWith(`${prefix}kill`)) {
        if(!args[0]) return message.channel.send('```s!kill @user\n\nУбить пользователя.```');
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
            message.channel.send("Загрузка.").then(msg => {
                const urls = ['http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471199251230228510/3.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471207587254108161/1.gif', 'https://cdn.weeb.sh/images/B1qosktwb.gif', 'https://cdn.weeb.sh/images/B1VnoJFDZ.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471279823537569794/2.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471280185996476426/1.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471280517560664066/3.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471280729175883796/1.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} Убил(а) ${user1}.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!kill @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                        .setColor("#007fff")
                        .setTimestamp(); 
                        msg.edit({embed});
                        msg.react('🔪');
            });
        }
        if (message.content.startsWith(`${prefix}sad`)) {
                message.channel.send("Загрузка.").then(msg => {
                const urls = ['https://media2.giphy.com/media/ROF8OQvDmxytW/giphy.gif', 'https://cdn.weeb.sh/images/HyO7mIXvW.gif','https://i.pinimg.com/originals/ce/cd/c0/cecdc0584e01e1fc3cd9dd9f36adfaa9.gif', 'https://i.skyrock.net/3403/91613403/pics/3227155489_1_2_1EU0NjzW.gif', 'http://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif', 'https://i.pinimg.com/originals/19/42/07/194207dd9df329dcc66bf0bc07eefe8c.gif', 'https://i.gifer.com/HNHc.gif', 'http://mrwgifs.com/wp-content/uploads/2013/05/Dramatic-Crying-In-Anime-Gif.gif', 'https://i.imgur.com/5qw84ue.gif', 'https://data.whicdn.com/images/307228077/original.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-9.gif', 'https://media1.tenor.com/images/d5668af606ca4d0332a6507418cabbce/tenor.gif?itemid=4952249', 'https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif', 'https://media1.tenor.com/images/75edc9882e5175f86c2af777ffbb14a6/tenor.gif?itemid=5755232', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-28.gif'];
                                let user1 = message.author;
                                let embed = new Discord.RichEmbed()
                                .setDescription(`${user1} Заплакал(а).`)
                                .setImage(urls[Math.floor(Math.random() * urls.length)])
                                .setFooter('►СВЕРХКОНФА | s!sad', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                                .setColor("#007fff")
                                .setTimestamp(); 
                                msg.edit({embed});
                                msg.react('😭');
                        });
                    }
            if (message.content.startsWith(`${prefix}happy`)) {
                    message.channel.send("Загрузка.").then(msg => {
                    const urls = ['https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif', 'https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-max-14mb.gif','https://cdn72.picsart.com/186168594000202.gif?r1024x1024', 'https://gifimage.net/wp-content/uploads/2017/10/happy-anime-girl-gif-4.gif', 'https://i.gifer.com/FPU2.gif', 'https://data.whicdn.com/images/174338297/original.gif', 'https://data.whicdn.com/images/220182469/original.gif', 'https://media.giphy.com/media/MgJAxaf1mjn56/giphy.gif', 'https://i.kym-cdn.com/photos/images/original/001/154/308/a68.gif', 'https://media2.giphy.com/media/CNUb51EbTxuRG/giphy.gif'];
                                    let user1 = message.author;
                                    let embed = new Discord.RichEmbed()
                                    .setDescription(`${user1} Счастлив(а).`)
                                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                                    .setFooter('►СВЕРХКОНФА | s!happy', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                                    .setColor("#007fff")
                                    .setTimestamp(); 
                                    msg.edit({embed});
                                    msg.react('😌');
                            });
                        }
                        if (message.content.startsWith(`${prefix}smoke`)) {
                            message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
                            const urls = ['https://images-ext-1.discordapp.net/external/5Dbtt-vsYLV77FP8JLtNOqvqKhig-YeoNg0qoOKyGFA/https/i.imgur.com/E226eZe.gif?width=360&height=202', 'https://images-ext-1.discordapp.net/external/4mOpE1A81GKR2DzOuhGRqUjMHxdFwyx73oEgp5DakgA/https/i.imgur.com/CqtXR7t.gif?width=360&height=209', 'https://images-ext-2.discordapp.net/external/SxJoVdWz3JZq72Q5LF4TSVqJ7fnFOURClbTIkXejbeI/https/i.imgur.com/DN5x2xc.gif?width=360&height=167', 'https://images-ext-1.discordapp.net/external/4mOpE1A81GKR2DzOuhGRqUjMHxdFwyx73oEgp5DakgA/https/i.imgur.com/CqtXR7t.gif?width=360&height=209', 'https://images-ext-2.discordapp.net/external/zZYdUPOClzzfBpGi-wdrQ1KJhsStj5PQ38Lzp8vuexI/https/i.imgur.com/Usdezi6.gif?width=360&height=270', 'https://images-ext-1.discordapp.net/external/cCK99DF9xONYOaIyd5cFuW0NGTTAG-ObU1mj8ZA2R20/https/i.imgur.com/LNgiHQ4.gif?width=287&height=180', 'https://images-ext-1.discordapp.net/external/Kw27Kt-OjGBQmN8sKHdjBjjHXmmNlvAlBObAoyKrW88/https/i.imgur.com/Rqti8NQ.gif?width=360&height=180', 'https://images-ext-2.discordapp.net/external/U9i4-OHYriJpd47ws3mD_md6ClWW7U8gwdwVI2o35Us/https/i.imgur.com/k7GmHoo.gif?width=450&height=227', 'https://images-ext-1.discordapp.net/external/RsWH_wOM4SARAuIEBi1lOb87iqr9Hw_zS1T_1DOLO6w/https/i.imgur.com/sGNxtzy.gif?width=360&height=201', 'https://images-ext-2.discordapp.net/external/V_2kAiOCTpi5AiEIIrwVXHMz5jzDBZFTizwDv06jKuI/https/i.imgur.com/fHZOREH.gif?width=360&height=203', 'https://images-ext-1.discordapp.net/external/5Dbtt-vsYLV77FP8JLtNOqvqKhig-YeoNg0qoOKyGFA/https/i.imgur.com/E226eZe.gif?width=360&height=202', 'https://images-ext-2.discordapp.net/external/xeEScqEDD5t4rxzmz3mohq7eSkDmS7dQN1OSJ1UkCUc/https/i.imgur.com/T0FniMl.gif?width=360&height=203', 'https://images-ext-1.discordapp.net/external/v9cd0WkOy0z8xhuu8IYUJp3_BoBQxb-FeBhEzb5JLdk/https/i.imgur.com/oa7XcmV.gif?width=360&height=240', 'https://images-ext-1.discordapp.net/external/r7Yf-qYzt7iqbcYiWe3iGkERXiUSqRKa9sW9w6C4DYg/https/i.imgur.com/Jni8pMY.gif?width=360&height=155', 'https://images-ext-1.discordapp.net/external/J0dWgxWPKk8u5mfUg9BBaXrbMlC8fMB3ijdZ7E60gwI/https/i.imgur.com/rRHs3BI.gif?width=360&height=188', 'https://images-ext-2.discordapp.net/external/GyY3mRNbynfOEysu0l_zEo13O9mgHNb4ZtyOFZuW9rw/https/i.imgur.com/p46xrNp.gif?width=360&height=197', 'https://images-ext-1.discordapp.net/external/QfRrLqBHw-mkbgl5FedwEnyN09YMM96PJW-wLw8tVHc/https/i.imgur.com/Un9WCuF.gif?width=360&height=216', 'https://images-ext-2.discordapp.net/external/wU3iDZA-8UwnOYosfEOluhfi7FEooryhafIcdMpW6E8/https/i.imgur.com/cOIy37n.gif?width=360&height=203', 'https://images-ext-1.discordapp.net/external/4mOpE1A81GKR2DzOuhGRqUjMHxdFwyx73oEgp5DakgA/https/i.imgur.com/CqtXR7t.gif?width=360&height=209'];
                                            let user1 = message.author;
                                            let embed = new Discord.RichEmbed()
                                            .setDescription(`${user1} выкурил сижку.`)
                                            .setImage(urls[Math.floor(Math.random() * urls.length)])
                                            .setFooter('►СВЕРХКОНФА | s!smoke', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                                            .setColor("007fff")
                                            .setTimestamp(); 
                                            msg.edit({embed});
                                            msg.react('🚬');
                                    });
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
