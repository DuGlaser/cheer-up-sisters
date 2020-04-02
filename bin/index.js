const discord = require("../util/discord_message");
const Github = require("../util/github");
const moment = require("moment");
const cron = require("node-cron");

cron.schedule("0 0 0 * * *", async () => {
  const date = moment().subtract(1, "days").format("YYYY-MM-DD");
  const commitCount = await Github.getCommitCountInDay(
    `${date}T00:00:00`,
    `${date}T23:59:59`
  );
  discord.daysMessage(commitCount);
});

// this work every sunday.
cron.schedule("0 0 0 * * 0", async () => {
  const m = moment();
  const to = m.subtract(1, "days").format("YYYY-MM-DD");
  const from = m.subtract(7, "days").format("YYYY-MM-DD");
  const commitCount = await Github.getCommitCountInWeek(
    `${from}T00:00:00`,
    `${to}T23:59:59`
  );

  const commitCountArray = [];
  commitCount[0].contributionDays.map((item) => {
    commitCountArray.push(item.contributionCount);
  });
  discord.sendWeeklyMessage(commitCountArray);
});
