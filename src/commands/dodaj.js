// dodaje role

exports.run = (client, message, args) => {
    const roles = ["programowanie", "Informatyczny tost", "nauka", "kosmos"];

    for (let pos in roles) {
        let roleName = args.join(" ");
        if (roleName == "programowanie") roleName = "Informatyczny tost";
        if (roleName == "informatyczny tost") roleName = "Informatyczny tost";
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