exports.run = (client, message, args, config) => {
    if(message.author.id == config.ownerid) {
        process.exit();
    }
}