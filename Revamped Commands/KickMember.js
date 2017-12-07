let MentionedMember = msg.mentions.members.first();
if(!MentionedMember || MentionedMember == null) return;
let ClientRole = msg.guild.fetchMember(client.user).then(m => m.highestRole.position);
let MentionedRole = MentionedMember.highestRole.position;
let MyHighestRole = msg.member.highestRole.position;
let params = msg.content.split(" ").slice(1);
let UserInput = params.join(" ");
if(!UserInput) return msg.reply("You need to provide a kick reason!");
if(MyHighestRole <= ClientRole) return;
if(MyHighestRole <= MentionedRole) return;

async function KickMember(kickReason) {
	if(kickReason == "" || kickReason == null) kickReason = "You were kicked from the server, goodbye.";
	await MentionedMember.send(kickReason);
	await MentionedMember.kick(kickReason);
};

KickMember(UserInput);
