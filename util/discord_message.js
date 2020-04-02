const app = require("../app");
const Discord = require("discord.js");

const webhookClient = new Discord.WebhookClient(
  app.get("options").DISCORD_WEBHOOK_ID,
  app.get("options").DISCORD_WEBHOOK_TOKEN
);

function sendMessage(commitCount) {
  const embed = createMessage(commitCount);
  webhookClient.send(embed);
}

function daysMessage(commitCount) {
  // Customize this for you!
  switch (true) {
    case commitCount <= 3:
      return new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Some title")
        .setAuthor(
          "Some name",
          "https://i.imgur.com/wSTFkRM.png",
          "https://discord.js.org"
        )
        .setImage("https://i.imgur.com/wSTFkRM.png")
        .setTimestamp();

    default:
      break;
  }
}

function weeklyMessage(commitCountArray) {}

module.exports = { daysMessage, weeklyMessage };
