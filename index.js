const discord = require('discord.js');
const bot = new discord.Client();


const config = require('./config.json');
bot.config = config;
const prefix = bot.config.prefix
var userTickets = new Map();

const fs = require('fs');

bot.login(config.token);

bot.on('ready', () => {

    console.log(`${bot.user.username} est en ligne dans ${bot.guilds.cache.size} serveur(s)`)

    let statuses = ['daronner des gens'];

    setInterval(() => {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "PLAYING"})
    }, 3000);
    setInterval(function() {
        var date = new Date();
        var heure = date.getHours() ;
        var minutes = date.getMinutes() ; 
        var guild = bot.guilds.cache.get("714935212173295627");
        var member = guild.members.cache.get("418739147218485259");
        var role = guild.roles.cache.find(role => role.name === 'Muted');
        console.log("Sleep guy !")
        if(heure === 00) {
            if (minutes === 01)
                
            member.roles.add('714935212525748234');
                console.log("Role ajouté")
            member.send("**Il est tard dis-donc ! Il est temps de se coucher, au dodo ! Tu as perdu tes permissions, tu les récupèreras demain à 8h !");
    
        }
     }, 50000);

     setInterval(function() {
        var date = new Date();
        var heure = date.getHours() ;
        var minutes = date.getMinutes() ; 
        var guild = bot.guilds.cache.get("714935212173295627");
        var member = guild.members.cache.get("418739147218485259");
        var role = guild.roles.cache.find(role => role.name === 'Muted');
        console.log("Good morning !")
        if(heure === 08) {
            if (minutes === 00)
                
            member.roles.remove('714935212525748234');
                console.log("Role retiré");
            member.send("**Coucou ! J'espère que tu as bien dormi ! Tu peux maintenant profiter du Discord, tes permissions ont été remises!");
    
        }
     }, 50000);
});


