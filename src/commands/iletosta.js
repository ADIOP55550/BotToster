// sprawdza ile w wyrażeniu jest tosta
const ss = require('string-similarity');;
exports.run = (client, message, args, config) => {
    message.channel.send(ss.compareTwoStrings(message.content, "tost"));
}