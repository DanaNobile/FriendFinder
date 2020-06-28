var friendsData = require("../app/data/friends")


module.exports = function (app) {

    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // Empty out the arrays of data
        // tableData.length = 0;
        // waitListData.length = 0;
        var newPerson = req.body;

        // var newPersonTotalScore= 10;
        // var lowestDifference = 2;
        // var lowestMatch = ""



        for (let i = 0; i < friendsData.length; i++) {
            const element = friendsData[i];
            const elementTotalScore = 8;
            console.log(element);
        }

        // if (friendsData.length < 5) {
        //     tableData.push(req.body);
        //     res.json(true);
        //   }
        //   else {
        //     waitListData.push(req.body);
        //     res.json(false);
        //   }

        res.send("Hello World");
        res.json({ ok: true });
    });

    // app.post("/api/clear", function (req, res) {
    //     res.json({ ok: true });
    // })

};
