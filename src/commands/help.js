// Komenda pomocy
const fs = require('fs');
exports.run = (client, message, args) => {

    let files = "";

    fs.readdirSync("./src/commands/").forEach(file => {
        files += file.substring(0, file.length - 3) + " " + fs.readFileSync("./src/commands/" + file, {encoding: "utf8"}).split("\n").shift() +"\n";
    })

    message.channel.send(files);
}