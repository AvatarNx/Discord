const ms = require("ms");
let params = msg.content.split(" ").slice(1);
let UserInput = parmas.join(" ");
if(!UserInput || UserInput == null || UserInput == "") return;


async function LockDownChannel(AmountOfTime) {
	await msg.channel.overwritePermissions(msg.guild.id, {SEND_MESSAGES: false});
	setTimeout(function() {
		await msg.channel.overwritePermissions(msg.guild.id, {SEND_MESSAGES: true});
	}, ms(AmountOfTime));
};

LockDownChannel(UserInput);
