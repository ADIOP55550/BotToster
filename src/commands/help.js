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

    console.log(msg);
    message.channel.send(msg);
}