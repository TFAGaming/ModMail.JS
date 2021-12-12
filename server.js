//This is server.js file where your bot will be hosted 24/7. Do not edit anything here or your bot will not work.

const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Bot is Ready! Your Bot is online 24/7.`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("[CONSOLE: Replit]: Preparing the code... By: T.F.A#1887","\n-------------------------------------------\n[CONSOLE: Host]: Server.js is Loading... ")});
}
 
module.exports = keepAlive;
