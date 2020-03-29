var express = require("express");

var app = express();

var options = {};

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
