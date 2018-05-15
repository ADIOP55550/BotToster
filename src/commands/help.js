// Komenda pomocy
const fs = require('fs');
const firstline = require('firstline')
exports.run = (client, message, args) => {

    let message;

    fs.readdir("./", (err, files) => {
        files.forEach(file => {
            message += file + firstline(file);
        });
    })

    message.channel.send(message);
}