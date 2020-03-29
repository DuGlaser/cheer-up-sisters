const discord = require("../util/discord_message");
const Github = require("../util/github");
const moment = require("moment");
const cron = require("node-cron");

cron.schedule("0 0 0 * * *", async () => {
  const date = moment().subtract(1, "days").format("YYYY-MM-DD");
  const commitCount = await Github.getCommitCount(
    `${date}T00:00:00`,
    `${date}T23:59:59`
  );
  discord.sendMessage(commitCount);
});
