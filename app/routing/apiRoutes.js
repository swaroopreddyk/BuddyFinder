const friends = require("../data/friends");
const path = require('path');

module.exports = (app) => {

  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });

  // Add new friend entry
  app.post('/api/friends', (req, res) => {
    let input = req.body;

    let responses = input.scores;

    // Compute bff match
    let matchName = '';
    let matchImage = '';
    let difference = 10000; // Make the initial value large for comparison

    for (var i in friends) {

      let diff = 0;
      for (var j in responses) {
        diff += Math.abs(friends[i].scores[j] - responses[j]);
      }

      if (diff < difference) {

        difference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    friends.push(input);

    res.json({
      status: 'OK',
      matchName: matchName,
      matchImage: matchImage
    });
  });
};