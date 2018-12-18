const friends = require("../data/friends");
const path = require('path');


module.exports = function (app) {
  app.get("/friends", (req, res) => {
    res.send(friends);
  })
}