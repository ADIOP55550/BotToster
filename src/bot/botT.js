module.exports = class {

    constructor(config) {
        this.config = config;
    }

    init() {
        this.Discord = require("discord.js");
        this.client = new this.Discord.Client();
        this.Jimp = require("jimp");
        this.handler = require("./handler.js");
    }

    start() {
        this.client.login(process.env.BOT_TOKEN);

        this.client.on('ready', () => console.log("Ready!"));

        this.client.on('message', message => {
            if (message.author.bot) return;
            
            if (message.content.startsWith(this.config.prefix)) {
                this.handler(message, this.config, this.client, this.Jimp);
            }
        })

        process.stdin.on('data', (data) => {

            data = data.toString().trim();

            if (data.startsWith("/say ")) {
                this.wiadomosc = data.replace("/say ", "")
                this.client.guilds.get(this.serwer).channels.get(this.kanal).send(this.wiadomosc);
            }

            if (data.startsWith("/serwer ")) {
                this.serwer = data.replace("/serwer ", "")
            }

            if (data.startsWith("/kanal ")) {
                this.kanal = data.replace("/kanal ", "")
            }
        
            if (data.startsWith("/obrazek ")) {

                this.wiadomosc = data.replace("/obrazek ", "")

                this.client.guilds.get(this.serwer).channels.get(this.kanal).sendMessage({
                    file: this.wiadomosc
                });
            }
        })
    }
}