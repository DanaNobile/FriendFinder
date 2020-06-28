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

        for (let i = 0; i < friendsData.length; i++) {
            const element = friendsData[i];
            const elementTotalScore = 8;
            console.log(element);
        }

        res.send("Hello World");
        res.json({ ok: true });
    });
};
