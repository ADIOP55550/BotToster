// restartuje bota (tylko dla Przemyka)
exports.run = (client, message, args, config) => {
    if(message.author.id == config.ownerid || message.author.id == "415202237720297473") {
        process.exit();
    }
}