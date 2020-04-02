const app = require("../app");
const Discord = require("discord.js");
const fs = require("fs");
const chart = require("./chart");

const webhookClient = new Discord.WebhookClient(
  app.get("options").DISCORD_WEBHOOK_ID,
  app.get("options").DISCORD_WEBHOOK_TOKEN
);

function sendDaysMessage(commitCount) {
  const embed = daysMessage(commitCount);
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

async function sendWeeklyMessage(commitCountArray) {
  const embed = await weeklyMessage(commitCountArray);
  webhookClient.send(embed);
}

async function weeklyMessage(commitCountArray) {
  await chart.createChart(commitCountArray);
  const image = app.get("options").PROJECT_URL + "image.png";
  return new Discord.MessageEmbed()
    .setColor("#008000")
    .setTitle("今週の進捗よ！")
    .setImage(image)
    .setTimestamp();
}

module.exports = { sendDaysMessage, sendWeeklyMessage };
