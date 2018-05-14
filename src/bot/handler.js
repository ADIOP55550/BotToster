module.exports = (message, config, client, Jimp) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();     //komenda i argumenty

    if (command != "_>" && command != "") {
        try {
            let commandFile = require("../commands/" + command + ".js");
            commandFile.run(client, message, args, config);
        } catch (err) {
            message.channel.send("Coś poszło źle. Spróbuj jeszcze raz sprawdzając czy poprawnie wpisałeś/aś komendę. Błąd: " + err);
        }
    }
}