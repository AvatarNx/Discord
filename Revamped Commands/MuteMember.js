let MentionedMember = msg.mentions.members.first();
if(!MentionedMember || MentionedMember == null) return;
let MuteRole = msg.guild.roles.find("name", "Text-Mute");
if(!MuteRole || MuteRole == null) return;
let params = msg.content.split(" ").slice(1);
let TimeParameter = params.join(" ");
if(TimeParameter == null) return msg.reply("Please specify an amount of time.");

async function MuteMember(SetAmountOfTime) {
    if(SetAmountOfTime == null || SetAmountOfTime == 0) return;
    await MentionedMember.addRole(MuteRole.id);
    setTimeout(function() {
        await MentionedMember.removeRole(MuteRole.id);
    }, SetAmountOfTime);
};

MuteMember(TimeParameter);
