// Komenda pomocy
const fs = require('fs');
const firstline = require('firstline')
exports.run = (client, message, args) => {

    let msg = "";

    fs.readdir("./", (err, files) => {
        files.forEach(file => {
            msg += file
        });
    })

    console.log(msg);
    message.channel.send(msg);
}