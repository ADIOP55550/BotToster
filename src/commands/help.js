// Komenda pomocy
const fs = require('fs');
const firstline = require('firstline')
exports.run = (client, message, args) => {

    let msg = "";

    fs.readdirSync("./", (err, files) => {
        files.forEach(file => {
            msg += file // + firstline(file);
        });
    })

    message.channel.send(msg);
}