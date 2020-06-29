var friendsData = require("../app/data/friends.js")

// Routing //
module.exports = function (app) {

    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;




        for (let i = 0; i < friendsData.length; i++) {
            var scoresDiff = 0;
            //run through scores to compare friends
            for (var j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])));
            }


            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }
        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        //return bestMatch data
        var bff = friendsData[bestMatch];
        res.json(bff);

        //pushes new submission into the friendsdata array
        friendsData.push(req.body);
    });


};



// console.log(res.body)
// res.json({ ok: true });


