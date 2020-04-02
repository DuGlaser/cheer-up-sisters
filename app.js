const express = require("express");

const app = express();

const options = {
  DISCORD_WEBHOOK_TOKEN: process.env.DISCORD_WEBHOOK_TOKEN,
  DISCORD_WEBHOOK_ID: process.env.DISCORD_WEBHOOK_ID,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GITHUB_USER_NAME: process.env.GITHUB_USER_NAME,
};
app.use(express.static("image"));
app.set("options", options);

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("cheer-up-sisters application!!");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.listen(app.get("port"), () => {
  console.log("Server start: " + app.get("port"));
});

module.exports = app;
