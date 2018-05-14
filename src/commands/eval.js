var math = require('mathjs');
exports.run = (client, message, args, config) => {

    if(message.author.id == config.ownerid) {
        const code = args.join(" ");
        const i = math.sqrt(-1);
        try {
            let evaled = eval(code);
            if(String(evaled) != "[object Promise]")
                message.channel.send(`\`\`\`css\n${evaled}\`\`\``);
        } catch(err) {
            message.channel.send(`\`\`\`${err}\`\`\``)
        }
    } else {
        message.channel.send("Nie masz permisji do użycia tej komendy!");
    }
}