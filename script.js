//creating factory function
var makePolitician = function(name, partyColour){
  //creating politician object 
  var politician = {}; //new empty object
  politician.name = name; // set name parameter to object name property
  politician.results = null;
  politician.totalVotes = 0;
  politician.partyColour = partyColour;
  
//creating function to add up all votes
  politician.addTotalVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i <this.results.length; i++)
    {
      this.totalVotes = this.totalVotes + this.results[i];
    }
    //console.log("Total Votes: " + this.totalVotes);
  };
  
  return politician;
};


//create new instances of politician object
var john = makePolitician("John Doe", [132, 17, 11]);
var jane = makePolitician("Jane Smith", [245, 141, 136]);

//create array of results for john doe
john.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

//create array of results for Jane Smithh
jane.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//make changes to both arrays
john.results[9] = 1;
jane.results[9] = 28;

john.results[4] = 17;
jane.results[4] = 38;

john.results[43] = 11;
jane.results[43] = 27;

//check array changes
console.log(john.results);
console.log(jane.results);

var setStateResults = function (state){
  theStates[state].winner = null;
  if(john.results[state] > jane.results[state]){
    theStates[state].winner = john;
  }
  else if(john.results[state] < jane.results[state]){
    theStates[state].winner = jane;
  }
  
  var stateWinner = theStates[state].winner;
  if(stateWinner != null){
    theStates[state].rgbColor = stateWinner.partyColour;
  }
  else{
    theStates[state].rgbColor = [11, 32, 57];
  }
  
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = theStates[state].nameAbbrev;
  candidate1Name.innerText = john.name;
  candidate2Name.innerText = jane.name;
  candidate1Results.innerText = john.results[state];
  candidate2Results.innerText = jane.results[state];
  
  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
  
};

//run method to total up votes
john.addTotalVotes();
jane.addTotalVotes();

//view total votes
console.log(john.totalVotes);
console.log(jane.totalVotes);

//finding out who wins
var winner = "";

if (john.totalVotes < jane.totalVotes){
  winner = jane.name;
}
else if (john.totalVotes > jane.totalVotes){
  winner = john.name;
}

else
{
  winner = "It's a tie";
}

console.log("And The winner is: " + winner);

var topTable = document.getElementById("countryResults");

topTable.children[0].children[0].children[0].innerText = john.name;
topTable.children[0].children[0].children[1].innerText = john.totalVotes;  topTable.children[0].children[0].children[2].innerText = jane.name;
topTable.children[0].children[0].children[3].innerText = jane.totalVotes; 
topTable.children[0].children[0].children[5].innerText = winner;
  
  
  
  
  

