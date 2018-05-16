// Komenda pomocy
const fs = require('fs');
const firstline = require('firstline')
exports.run = (client, message, args) => {

    let files = fs.readdirSync("./src/commands/");

    message.channel.send(files);
}