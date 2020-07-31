// path package to get to correct directory
var path = require("path");

module.exports = function (app) {
  // when "countinue Workout" or "new Workout" is clicked in index.html
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // stats file
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
