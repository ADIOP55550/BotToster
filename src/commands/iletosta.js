// sprawdza ile jest tosta w tym co podasz
const ss = require('string-similarity');;
exports.run = (client, message, args, config) => {
    message.channel.send(ss.compareTwoStrings(args.toString(), "tost"));
}