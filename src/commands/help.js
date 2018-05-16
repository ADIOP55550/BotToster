// Komenda pomocy
const fs = require('fs');
exports.run = (client, message, args) => {

    let files = "";

    fs.readdirSync("./src/commands/").forEach(file => {
        console.log(fs.readFileSync("./src/commands/" + file, {encoding: string}));
        files += file.substring(0, file.length - 3) + " " /*+ fs.readFileSync("./src/commands/" + file).split("\n").shift() */+"\n";
    })

    message.channel.send(files);
}