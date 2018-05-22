// dodaje role

exports.run = (client, message, args) => {
    const roles = ["programowanie", "informatyczny tost", "nauka", "kosmos"];

    for (let pos in roles) {
        if (args[0] == "programowanie") args[0] = "informatyczny tost";
        if (args[0] == roles[pos]) {
            let roleName = roles[pos];
            const role = client.guilds.get("335070356941438977").roles.find("name", roles[pos]);

            if (message.member.roles.has(role.id)) {
                message.reply("już masz tę rolę!");
                return;
            }

            message.member.addRole(role.id);
        }
    }
};