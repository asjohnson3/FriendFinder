// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------
  
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    var differ = [50,0];

    // if (friends.length < 5) {
      
    //   console.log(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }

    var result = req.body;
    var q1 = result.question1;
    var q2 = result.question2;
    var q3 = result.question3;
    var q4 = result.question4;
    var q5 = result.question5;
    var q6 = result.question6;
    var q7 = result.question7;
    var q8 = result.question8;
    var q9 = result.question9;
    var q10 = result.question10;

    // console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);
    // console.log(friends);
   
    for (var i = 0; i < friends.length; i++){
        var candidate = friends[i];
        var sub1 = Math.abs(candidate.question1- q1);
        var sub2 = Math.abs(candidate.question2- q2);
        var sub3 = Math.abs(candidate.question3- q3);
        var sub4 = Math.abs(candidate.question4- q4);
        var sub5 = Math.abs(candidate.question5- q5);
        var sub6 = Math.abs(candidate.question6- q6);
        var sub7 = Math.abs(candidate.question7- q7);
        var sub8 = Math.abs(candidate.question8- q8);
        var sub9 = Math.abs(candidate.question9- q9);
        var sub10 = Math.abs(candidate.question10- q10);
        var sum = sub1+sub2+sub3+sub4+sub5+sub6+sub7+sub8+sub9+sub10;

        if (sum < differ[0]){
            differ = [sum,candidate];
        }
        
// console.log("------------------------------------------------------")
        // for (var key in candidate){
            // var property = candidate[i];
            // console.log(candidate[key]);
            // console.log("-----")
            // console.log(q1);
            // console.log(parseInt(property[question1]))
            // console.log(parseInt(q1));
        // }
        // console.log(candidate);
        
    }
    console.log(differ);
    friends.push(req.body);
    res.json(differ[1]);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = [];

    res.json({ ok: true });
  });
};