const {REST, Routes} = require("discord.js");
const commands = [
    { 
        name: "ping",
        description: "Replies with Pong!",
    },
];

const rest = new REST({ version: "10" }).setToken ("MTE2MDk3OTcyNDM1MzQyNTUxOQ.GvjxD7.Obrpa43MQmTIxVF4hMGFl5B4PrHWzT_rRKeQTo");
(async () => {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1160979724353425519"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();