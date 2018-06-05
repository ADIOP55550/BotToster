module.exports = class {

    constructor(config) {
        this.config = config;
    }

    init() {
        this.Discord = require("discord.js");
        this.client = new this.Discord.Client();
        this.Jimp = require("jimp");
        this.handler = require("./handler.js");
        this.autorole = require("../autofun/autorole.js");
    }

    start() {
        this.client.login(process.env.BOT_TOKEN);

        this.client.on('ready', () => console.log("Ready!"));

        this.client.on('message', message => {
            if (message.author.bot) return;

            if (message.content.toLowerCase().startsWith(this.config.prefix)) {
                this.handler(message, this.config, this.client, this.Jimp);
            }
        })

        this.client.on('guildMemberAdd', member => {
            this.autorole.addrole(member);
            console.dir(this);
        })
    }
}