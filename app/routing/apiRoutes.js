var friends = require('../data/friends.js');

module.exports = function(app) {

    // Sets the get for the api/friends route
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "", 
            friendDiff: 40
        };
    })
}