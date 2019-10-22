const db = require("../data/friends.js");

module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(db);
  });

  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;

    let leastDifferent = -1;
    let minDifference = 100;
    for (var i = 0; i < db.length; i++) {
      let totalDifference = 0;
      for (var j = 0; j < 5; j++) {
        totalDifference += Math.abs(newFriend.scores[j] - db[i].scores[j]);
      }
      if (totalDifference < minDifference) {
        minDifference = totalDifference;
        leastDifferent = i;
      }
    }

    db.push(req.body);
    console.log(db[leastDifferent].name);
    res.json(db[leastDifferent].name);
  });
};
