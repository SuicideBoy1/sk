const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client();
const emojis = {
    yes:'483325848749998080', 
    no:'483325856748666890',
    loading:'503593978558677004',
    gaypride:'503593932224069632',
    eightball:'503618598296616970'
};

const prefix = "s!";

//------------------------------------------------------------------------
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `за чатом`, type: 3 } }).catch();
});
//------------------------------------------------------------------------

bot.on('message', (message) => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "say" && ['248521740945195008', '301020093247127552', '471617346751168512', '471617594864959498'].includes(message.author.id)){
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

if(command === "embed" && ['248521740945195008', '301020093247127552', '471617346751168512', '471617594864959498'].includes(message.author.id)){

const embedsayMessage = args.join(" ");
      
        const embed = new Discord.RichEmbed()
	    .setColor("#007fff")
        if (embedsayMessage)
       embed .setDescription(embedsayMessage)
        message.channel.send({embed});
        message.delete().catch(O_o => {});
  }
//------------------------------------------------------------------

if (message.channel.id == '480879077600002049') {
    message.react('483325848749998080') 
    message.react('483325856748666890');
}
//------------------------------------------------------------------
//------------------------------------------------------------------
if(command === "smile" && ['248521740945195008'].includes(message.author.id)){
    message.channel.send(bot.emojis.find("name", args[0]).id)
    }
//------------------------------------------------------------------
if (message.content.startsWith(`${prefix}gay`)){
   message.delete();
   
   let member = message.mentions.members.first();
   if(!member) member = message.member;

   let replies = [`${member} на 0% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 1% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 2% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 3% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 4% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 5% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 6% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 7% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 8% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 9% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 10% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 11% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 12% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 13% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 14% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 15% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 16% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 17% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 18% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 19% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 20% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 21% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 22% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 23% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 24% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 25% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 26% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 27% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 28% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 29% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 30% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 31% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 32% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 33% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 34% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 35% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 36% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 37% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 38% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 39% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 40% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 41% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 42% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 43% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 44% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 45% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 46% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 47% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 48% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 49% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 50% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 51% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 52% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 53% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 54% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 55% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 56% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 57% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 58% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 59% гей ${bot.emojis.get(emojis.gaypride)}`,`${member} на 60% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 61% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 62% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 63% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 64% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 65% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 65% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 66% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 67% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 68% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 69% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 70% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 71% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 72% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 73% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 74% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 75% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 76% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 77% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 78% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 79% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 80% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 81% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 82% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 83% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 84% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 85% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 86% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 87% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 88% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 89% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 90% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 91% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 92% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 93% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 94% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 95% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 96% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 97% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 98% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 99% гей ${bot.emojis.get(emojis.gaypride)}`, `${member} на 100% гей ${bot.emojis.get(emojis.gaypride)}`];
   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" "); 

   let gayembed = new Discord.RichEmbed()

   .setColor('RANDOM')
   .addField("Gay-Meter228", replies[result])
   .setFooter('►СВЕРХКОНФА | s!gay @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
   .setTimestamp(); 
   return message.channel.send(gayembed)
}
//------------------------------------------------------------------
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
//------------------------------------------------------------------
if (message.content.startsWith(`${prefix}slap`)) {
    if(!args[0]) return message.channel.send('```s!slap @user\n\nУдарить пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
        const urls = ['https://i.pinimg.com/originals/fc/e1/2d/fce12d3716f05d56549cc5e05eed5a50.gif', 'https://31.media.tumblr.com/399235995598189fae61fac0e6fbd9aa/tumblr_n5okegPgd91sfyp69o1_500.gif', 'https://cdn.weeb.sh/images/SkZTQkKPZ.gif', 'https://cdn.weeb.sh/images/r1VF-lcyz.gif', 'https://cdn.weeb.sh/images/BkxEo7ytDb.gif', 'https://cdn.weeb.sh/images/ByTR7kFwW.gif', 'https://cdn.weeb.sh/images/ry2tWxcyf.gif', 'https://cdn.weeb.sh/images/SkKn-xc1f.gif', 'https://i.imgur.com/o2SJYUS.gif', 'https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif', 'https://cdn.weeb.sh/images/BkzyEktv-.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Дал(а) пощёчину ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!slap @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});   
        });
}
//------------------------------------------------------------------
if (message.content.startsWith(`${prefix}kiss`)) {
    if(!args[0]) return message.channel.send('```s!kiss @user\n\nПоцеловать пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
        request('https://nekos.life/api/v2/img/kiss', function (error, response, body) {
           const urls = ['https://i.imgur.com/GoJvaea.gif', 'http://i.imgur.com/7mkRzr1.gif', 'https://cdn.weeb.sh/images/Byh57gqkz.gif', 'http://i.imgur.com/3wv088f.gif', 'https://cdn.weeb.sh/images/ryEvhTOwW.gif', 'https://i.imgur.com/7GhTplD.gif', 'https://i.imgur.com/B6UKulT.gif', 'https://cdn.weeb.sh/images/HJmunTOw-.gif', 'https://cdn.weeb.sh/images/SJINn6OPW.gif', 'https://i.imgur.com/MzAjNdv.gif', 'https://i.imgur.com/gWIm5bK.gif', 'https://cdn.weeb.sh/images/rkM4nTOPb.gif', 'https://cdn.weeb.sh/images/S1VEna_v-.gif', 'https://cdn.weeb.sh/images/rkv_mRKF-.gif', 'https://cdn.weeb.sh/images/BJSdQRtFZ.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Поцеловал(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!kiss @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});   
            });
        })
    }
//------------------------------------------------------------------
if (message.content.startsWith(`${prefix}pat`)) {
    if(!args[0]) return message.channel.send('```s!pat @user\n\nПогладить пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {        
        const urls = ['https://cdn.weeb.sh/images/SktIxo20b.gif', 'https://cdn.weeb.sh/images/Sky1x1YwW.gif', 'https://cdn.weeb.sh/images/r1Y5L6NCZ.gif', 'https://cdn.weeb.sh/images/H1Vc1yYwW.gif', 'https://cdn.weeb.sh/images/BkJBQlckz.gif', 'https://cdn.weeb.sh/images/rkTC896_f.gif', 'https://cdn.weeb.sh/images/H1MIei2AZ.gif', 'https://cdn.weeb.sh/images/rybs1yFDb.gif', 'https://cdn.weeb.sh/images/rkZbJAYKW.gif', 'https://cdn.weeb.sh/images/HyG2kJKD-.gif', 'https://cdn.weeb.sh/images/rJavp1KVM.gif', 'https://cdn.weeb.sh/images/ryXj1JKDb.gif', 'https://cdn.weeb.sh/images/ByOc1ktv-.gif', 'https://cdn.weeb.sh/images/rktsca40-.gif', 'https://cdn.weeb.sh/images/r1goyytPZ.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Погладил(а) по голове ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!pat @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});     
   });
}
//------------------------------------------------------------------
if (message.content.startsWith(`${prefix}hug`)) {
    if(!args[0]) return message.channel.send('```s!hug @user\n\nОбнять пользователя.```');
    let user = message.author;
    let user1 = message.mentions.users.first();
    if (!user1 || user1.id === user.id) {
        user = bot.user;
        user1 = message.author;
    }
        message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
        const urls = ['https://cdn.weeb.sh/images/B11CDkhqM.gif', 'https://cdn.weeb.sh/images/BJCCd_7Pb.gif', 'https://cdn.weeb.sh/images/HkRwnuyuW.gif', 'https://cdn.weeb.sh/images/SJByY_QwW.gif', 'https://cdn.weeb.sh/images/BkBs2uk_b.gif', 'https://cdn.weeb.sh/images/rkYetOXwW.gif', 'https://cdn.weeb.sh/images/Bk5haAocG.gif', 'https://cdn.weeb.sh/images/ry6o__7D-.gif', 'https://cdn.weeb.sh/images/r1bAksn0W.gif', 'https://cdn.weeb.sh/images/ryg2dd7wW.gif', 'https://cdn.weeb.sh/images/rk6PsvOUM.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} Обнял(а) ${user1}.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter('►СВЕРХКОНФА | s!hug @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                    .setColor("#007fff")
                    .setTimestamp(); 
                    msg.edit({embed});
    });
}

//------------------------------------------------------------------
if (message.content.startsWith(`${prefix}suicide`)) {
        message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
        const urls = ['https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://images-ext-2.discordapp.net/external/PVHDexd-zGtZwfUY_ivDzIR7bDaHDygKZ8XmR9jUOd8/https/i.imgur.com/cp9ZF1A.gif?width=360&height=203', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif?itemid=5505166', 'https://data.whicdn.com/images/290510883/original.gif', 'https://78.media.tumblr.com/6824d7afa9302623f7d9956ccb68778d/tumblr_mp7y69GFbW1s9t463o1_500.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.pinimg.com/originals/03/43/e6/0343e651eded6629041d165f9c0d7cf7.gif', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'https://i.imgur.com/ysphsEK.gif', 'https://i.imgur.com/WSioKga.gif', 'https://i.imgur.com/4Bw9XTs.gif', 'https://i.imgur.com/Q0H6LO2.gif'];
                        let user1 = message.author;
                        let embed = new Discord.RichEmbed()
                        .setDescription(`${user1} Сделал суицид.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!suicide', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                        .setColor("#007fff")
                        .setTimestamp(); 
                        msg.edit({embed});
                });
            }
//------------------------------------------------------------------
    if (message.content.startsWith(`${prefix}kill`)) {
        if(!args[0]) return message.channel.send('```s!kill @user\n\nУбить пользователя.```');
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
            message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
                const urls = ['http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471199251230228510/3.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471207587254108161/1.gif', 'https://cdn.weeb.sh/images/B1qosktwb.gif', 'https://cdn.weeb.sh/images/B1VnoJFDZ.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471279823537569794/2.gif', 'https://cdn.discordapp.com/attachments/438280799448727552/471280185996476426/1.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471280517560664066/3.gif', 'https://cdn.discordapp.com/attachments/438289167525347328/471280729175883796/1.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} Убил(а) ${user1}.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setFooter('►СВЕРХКОНФА | s!kill @user', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                        .setColor("#007fff")
                        .setTimestamp(); 
                        msg.edit({embed});
            });
        }
//------------------------------------------------------------------
        if (message.content.startsWith(`${prefix}sad`)) {
                message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
                const urls = ['https://media2.giphy.com/media/ROF8OQvDmxytW/giphy.gif', 'https://cdn.weeb.sh/images/HyO7mIXvW.gif','https://i.pinimg.com/originals/ce/cd/c0/cecdc0584e01e1fc3cd9dd9f36adfaa9.gif', 'https://i.skyrock.net/3403/91613403/pics/3227155489_1_2_1EU0NjzW.gif', 'http://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif', 'https://i.pinimg.com/originals/19/42/07/194207dd9df329dcc66bf0bc07eefe8c.gif', 'https://i.gifer.com/HNHc.gif', 'http://mrwgifs.com/wp-content/uploads/2013/05/Dramatic-Crying-In-Anime-Gif.gif', 'https://i.imgur.com/5qw84ue.gif', 'https://data.whicdn.com/images/307228077/original.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-9.gif', 'https://media1.tenor.com/images/d5668af606ca4d0332a6507418cabbce/tenor.gif?itemid=4952249', 'https://media.giphy.com/media/3fmRTfVIKMRiM/giphy.gif', 'https://media1.tenor.com/images/75edc9882e5175f86c2af777ffbb14a6/tenor.gif?itemid=5755232', 'http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-28.gif'];
                                let user1 = message.author;
                                let embed = new Discord.RichEmbed()
                                .setDescription(`${user1} Заплакал(а).`)
                                .setImage(urls[Math.floor(Math.random() * urls.length)])
                                .setFooter('►СВЕРХКОНФА | s!sad', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                                .setColor("#007fff")
                                .setTimestamp(); 
                                msg.edit({embed});
                        });
                    }
//------------------------------------------------------------------
            if (message.content.startsWith(`${prefix}happy`)) {
                    message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
                    const urls = ['https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif', 'https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-max-14mb.gif','https://cdn72.picsart.com/186168594000202.gif?r1024x1024', 'https://gifimage.net/wp-content/uploads/2017/10/happy-anime-girl-gif-4.gif', 'https://i.gifer.com/FPU2.gif', 'https://data.whicdn.com/images/174338297/original.gif', 'https://data.whicdn.com/images/220182469/original.gif', 'https://media.giphy.com/media/MgJAxaf1mjn56/giphy.gif', 'https://i.kym-cdn.com/photos/images/original/001/154/308/a68.gif', 'https://media2.giphy.com/media/CNUb51EbTxuRG/giphy.gif'];
                                    let user1 = message.author;
                                    let embed = new Discord.RichEmbed()
                                    .setDescription(`${user1} Счастлив(а).`)
                                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                                    .setFooter('►СВЕРХКОНФА | s!happy', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
                                    .setColor("#007fff")
                                    .setTimestamp(); 
                                    msg.edit({embed});
                            });
                        }
//------------------------------------------------------------------
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
                                    });
                                }
//------------------------------------------------------------------
    if (message.content.startsWith("+sex")) {
    if(!args[0]) return message.channel.send('```+sex @user\n\nВыебать пользователя.```');
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
            message.channel.send(`${bot.emojis.get(emojis.loading)}`).then(msg => {
                const urls = ['https://static.hentai-gifs.com/upload/20160506/14/27150/1.gif', 'https://cdn.discordapp.com/attachments/428290347534123008/477554893205536778/85b54d01ce6898f555e0a66eb54a01ab.gif','https://cdn.discordapp.com/attachments/428290347534123008/477555514994196481/6981fee72bcd6f3898ddef378bc84.gif', 'https://static.hentai-gifs.com/upload/20160426/3/5738/detail.gif', 'https://static.hentai-gifs.com/upload/20160425/1/1891/detail.gif', 'https://static.hentai-gifs.com/upload/20160426/3/5820/detail.gif', 'http://tbib.org/images/3077/00dd247aa2ab8d2a5e1682f53e3c9dc328f050b5.gif?3590962', 'https://static.hentai-gifs.com/upload/20160425/2/4030/detail.gif', 'https://hentaiporns.net/wp-content/uploads/2018/03/6023902-cfab3f8759c233b08842149edcf835b9.gif ', 'http://tbib.org/images/1053/ae959f49535790a81368572d25292bde0aca8fc4.gif?1052103'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} занялся сексом с ${user1}.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM')
                        .setTimestamp(); 
                        msg.edit({embed});
            });
        }
//------------------------------------------------------------
if (message.content.startsWith(`${prefix}8ball`)) {

    if(!args[1]) return message.channel.send("Введите вопрос. `k!8ball <вопрос>`");
    let replies = [`${bot.emojis.get(emojis.eightball)} Да`, `${bot.emojis.get(emojis.eightball)} Нет`, `${bot.emojis.get(emojis.eightball)} Я не знаю`, `${bot.emojis.get(emojis.eightball)} Спроси ещё раз.`, `${bot.emojis.get(emojis.eightball)} Ммм.Хз`, `${bot.emojis.get(emojis.eightball)} Я не уверен...`, `${bot.emojis.get(emojis.eightball)} Пожалyй нет.`, `${bot.emojis.get(emojis.eightball)} Ты мне говориле это.-.-`, `${bot.emojis.get(emojis.eightball)} Пожалуй да.`];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");
    
    let user = message.mentions.members.first();
    if (!user) user = message.author;
    let ballembed = new Discord.RichEmbed()

    .setColor('RANDOM')
    .addField("❔ Вопрос:", question)
    .addField("❗ Ответ:", replies[result])
    .setFooter('►СВЕРХКОНФА | s!8ball', 'https://cdn.discordapp.com/attachments/407984018118672385/490605668274012186/FunDZNs_4.png')
    .setTimestamp(); 
    return message.channel.send(ballembed)
  }

//---------------------------------------------------------

});

bot.login(process.env.BOT_TOKEN);
