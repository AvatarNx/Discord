const EmbedClass = require("../modules/embed.js");
const ReplyClass = require("../modules/replies.js");
const ms = require("ms");
exports.run = function(bot, msg, args) {
  let MentionedUser = msg.mentions.users.first();
  if(!MentionedUser) return ReplyClass.NoMentionedMember(msg, "Mute");
  let MuteRole = msg.guild.roles.find("name", "Hexus-Mute");
  if(!MuteRole) return ReplyClass.CustomReply(msg, "No mute role was found!", "My internal code searches for a role called; `Hexus-Mute`");
  let TimeParameter = args[1];
  if(!TimeParameter) return ReplyClass.CustomReply(msg, "No Time Provided!", "You must specify an amount of time! >mute <user> <time> <reason>");
  let Reason = args.slice(2).join(" ");
  if(!Reason) return ReplyClass.CustomReply(msg, "No reason provided!", "Please provide a reason to mute them!");

  msg.guild.fetchMember(MentionedUser).then(function(Member) {
    if(Member.roles.has(MuteRole.id)) {
      return ReplyClass.CustomReply(msg, "Mentioned user is already muted!", "Cannot mute mentioned user as they are already muted.");
    } else {
      Member.addRole(MuteRole.id);
      EmbedClass.embed(msg, "Successfully muted user!", `Muted: ${MentionedUser.tag} \nTime: ${ms(ms(TimeParameter), {long: true})} \nReason: ${Reason}`);
      setTimeout(function() {
        Member.removeRole(MuteRole.id);
        EmbedClass.embed(msg, "Successfully unmuted user!", `Unmuted: ${MentionedUser.tag} \nTime: ${ms(ms(TimeParameter), {long: true})} \nReason: ${Reason}`);
      }, ms(TimeParameter));
    }
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Mutes user for specific time!',
  usage: 'mute <mention> <time> <reason>'
};
