
    //Variables For Banning Mentioned Member.
    let MentionedMember = msg.mentions.members.first();
    if(!MentionedMember) throw new Error("No member mention was found.");
    let MyHighestRole = msg.member.highestRole.position;
    let MentionedMemberRole = MentionedMember.highestRole.position;
    let ClientRole = msg.guild.fetchMember(client.user).then(m => m.highestRole.position);
    if(MyHighestRole <= MentionedMemberRole) return;
    if(MyHighestRole <= ClientRole) return;

    //Asynchronous Ban Function.
    async function banMentionedMember(MessageHistoryAmount) {
        if(MessageHistoryAmount == null || MessageHistoryAmount > 7) MessageHistoryAmount = 0;
        await MentionedMember.ban(MessageHistoryAmount);
    }

    //Calling our ban function.
    banMentionedMember();
