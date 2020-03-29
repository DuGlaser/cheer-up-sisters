const app = require("../app");
const Discord = require("discord.js");

const webhookClient = new Discord.WebhookClient(
  app.get("options").DISCORD_WEBHOOK_ID,
  app.get("options").DISCORD_WEBHOOK_TOKEN
);

const sendMessage = () => webhookClient.send("Webhook test");

module.exports = { sendMessage };
