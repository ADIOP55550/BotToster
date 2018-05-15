// Komenda pomocy
const fs = require('fs');
exports.run = (client, message, args) => {

    fs.readdir("./", (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    })
}