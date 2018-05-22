// dodaje role

exports.run = (client, message, args) => {
    const roles = ["programowanie", "informatyczny tost", "nauka", "kosmos"];

    for (let pos in roles) {
        let roleName = args.join(" ");
        message.reply(roleName);
        if (roleName == "programowanie") roleName = "informatyczny tost";
        message.reply(roleName);
        if (roleName == roles[pos]) {
            const role = client.guilds.get("335070356941438977").roles.find("name", roleName);

            if (message.member.roles.has(role.id)) {
                message.reply("już masz tę rolę!");
                return;
            }

            message.member.addRole(role.id);
        }
    }
};