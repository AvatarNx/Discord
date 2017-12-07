let params = msg.content.split(" ").slice(1);
let UserInput = params.join(" ");
if(!UserInput || UserInput == null || UserInput > 100) return;
msg.channel.bulkDelete(parseInt(UserInput));
msg.channel.send(`Successfully Deleted ${UserInput} Messages!`);
