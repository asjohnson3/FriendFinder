// ===============================================================================
// DATA
// Below data will hold all of the friends who've completed the .
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      friendName: "Mr. Nobody",
      friendPhoto: "https://vignette.wikia.nocookie.net/despicableme/images/3/30/Despicable-me-2-laughing-minions.jpg/revision/latest?cb=20130713193853",
      question1: "0",
      question2: "0",
      question3: "0",
      question4: "0",
      question5: "0",
      question6: "0",
      question7: "0",
      question8: "0",
      question9: "0",
      question10: "0"
    } 
  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;