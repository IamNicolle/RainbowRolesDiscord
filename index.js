const { Client, version } = require('discord.js');
const { 
    token, 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();
const keepAlive = require("./server");

bot.on("ready", async() => {
   console.log(`[ Client ] ${bot.user.tag} - Ahora está en línea.`);

     let guild = bot.guilds.cache.get(serverID) 
     if(!guild) throw `[ Error ] No encontré ningún servidor : ${serverID}` 

     let role = guild.roles.cache.find(u => u.id === roleID) 
     if(!role) throw `[ Error ] No encontré ningún rol, nombre del servidor : ${guild.name}` 
    
     if(interval < 60000) console.log(`\n[ !!! ] Bot funcionando.`) 

   setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] Se produjo un error durante el cambio de rol.`));
   }, interval)

     bot.user.setPresence({
       status: 'dnd',
       activity: {
       name: 'RainbowRoles - Discord',
       type: 'PLAYING',
       }
   })
})

keepAlive();
bot.login(token)
