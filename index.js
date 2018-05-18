const fs = require('fs');
const botT = require('./src/bot/botT.js');

let BToster = new botT(JSON.parse(fs.readFileSync('config.json')));
BToster.init();
BToster.start();