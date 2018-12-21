const friends = require("../data/friends");
const path = require('path');


module.exports = function (app) {
  app.get("/friends", (req, res) => {
    res.send(friends);
  })

  app.post("/friends", (req, res) => {
    const profile = {
      "name"     : req.body.name,
      "answers"  : req.body.answers.map(a => parseInt(a))
  };

  const friend = findBestFriend(profile);

  res.send({
    "my_name"         : profile.name,
    "friend_name"     : friend.name,
    "friend_photo_url": friend.photo_url
});
  })

  const findBestFriend = profile => {
    friends.sort((a, b) => findDifference(a, profile) - findDifference(b, profile));

        return friends[0];
  }

  const findDifference = (a, b) =>{
    let score = 0;

    for (let i = 0; i < a.answers.length; i++) {
        score += Math.abs(b.answers[i] - a.answers[i]);
    }

    return score;
}
}