let params = msg.content.split(" ").slice(1);
let UserInput = params.join(" ");
if(!UserInput || UserInput == null || UserInput > 100) return;
let amount = msg.channel.fetchMessages(UserInput);
msg.channel.bulkDelete(parseInt(amount));
msg.channel.send(`Successfully Deleted ${UserInput} Messages!`);
