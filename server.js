const express = require('express');

const server = express();

server.all('/', (req, res)=>{

   res.setHeader('Content-Type', 'text/html');

   res.write('RainbowRoles - Bot. https://github.com/zLynnx066 - discord.gg/rBCTBevwBv');

   res.end();

})


function keepAlive(){

   server.listen(3000, ()=>{console.log("¡El servidor está en línea!")});

}

module.exports = keepAlive;
