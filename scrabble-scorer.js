// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// you need to uncomment in run program. figure out transform function, figure out how to get the initial prompt output into the function scorerprompt

let word;
 function initialPrompt(word) {
  word = input.question("Let's play some scrabble! Enter a word: ");
  if (!isNaN(Number(word))) {
   initialPrompt()
}
   return word;
};

 word = initialPrompt(word)


let simpleScorer =   {
   name: "Simple score",
   description: "Each letter is worth 1 point",
   Score: function () {
let score = (word.length);
return console.log(score);
}
};
let vowelBonusScorer = { 
   name: "Vowel Bonus Score",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   Score: function (word) {
   let score = 0;
   let i = 0;
   let realWord = word.toUpperCase()
   while (i < realWord.length){
   if (realWord[i] == "A" || realWord[i] == "E" || realWord[i] == "I" || realWord[i] == "O" || realWord[i] == "U") {
      score += 3
   } else {
      score++
   }
   i++
}
   return console.log(score)
}
};
let scrabbleScorer = {
   name: "Scrabble",
   description: "Uses scrabble point system.",
   Score: oldScrabbleScorer
};

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

function scorerPrompt() {
   let choice = input.question(`Which scoring algorithm do you want?\n\n 0 - ${simpleScorer.name} - ${simpleScorer.description}\n 1 - ${vowelBonusScorer.name} - ${vowelBonusScorer.description}\n 2 - ${scrabbleScorer.name} - ${scrabbleScorer.description}\nEnter 0, 1, or 2: `)
   
  let chosenObject;
  
   
   
   if (choice === "0") {
      chosenObject = simpleScorer.Score(word);
    
   }
   else if (choice === "1") {
      chosenObject = vowelBonusScorer.Score(word);
      
   } else if (choice === "2")  {
      chosenObject = scrabbleScorer.Score(word);
      
   } else {
      return scorerPrompt();
   }

   return console.log(`The total for ${word} is ${chosenObject}`) ;
};
   
   

function transform(oldPointStructure) {
   let brandNew = {};
   for (oldPointStructure["2"] in oldPointStructure) {
      if (oldPointStructure.includes())
      brandNew["a"] = (oldPointStructure[1][0])
   }
   return console.log(brandNew)
};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
   //transform(oldPointStructure);
   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

// with this commit, the input is not being registered in the object