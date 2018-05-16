// Komenda pomocy
const fs = require('fs');
const firstline = require('firstline')
exports.run = (client, message, args) => {

    let files = "";

    fs.readdirSync("./src/commands/").forEach(file => {
        files += file.substring(0, file.length - 3) + " " + firstline(file) + "\n"
    })

    message.channel.send(files);
}