let params = msg.content.split(" ").slice(1);
let UserInput = params.join(" ");
if(!UserInput || UserInput == null) return;

async function fetchMemberID(UserResolvable) {
	msg.guild.fetchMember(UserResolvable).then((output) => {
		let ParsedMember = output.user;
		if(output == null) return msg.reply("I couldn't find anyone by that ID in the discord.");
		msg.reply(`Username: ${ParsedMember.tag}`);
	});
};

fetchMemberID(UserInput);
