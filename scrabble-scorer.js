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


function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");

   if (!isNaN(Number(word))) {
      initialPrompt()
   }
   return word;
};

function simpleScorer(word) {
   let score = (word.length);
   return score;
};

let simple = {
   name: "Simple score",
   description: "Each letter is worth 1 point",
   Score: simpleScorer
};

function vowelBonusScorer(word) {
   let score = 0;
   let i = 0;
   let realWord = word.toUpperCase()
   while (i < realWord.length) {
      if (realWord[i] == "A" || realWord[i] == "E" || realWord[i] == "I" || realWord[i] == "O" || realWord[i] == "U") {
         score += 3
      } else {
         score++
      }
      i++
   }
   return score
}


let vowelBonus = {
   name: "Vowel Bonus Score",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   Score: vowelBonusScorer
};
let scrabbleScorer = {
   name: "Scrabble",
   description: "Uses scrabble point system.",
   Score: oldScrabbleScorer
};

const scoringAlgorithms = [simple, vowelBonus, scrabbleScorer];

function scorerPrompt() {
   let choice = input.question(`Which scoring algorithm do you want?\n\n 0 - ${simpleScorer.name} - ${simpleScorer.description}\n 1 - ${vowelBonusScorer.name} - ${vowelBonusScorer.description}\n 2 - ${scrabbleScorer.name} - ${scrabbleScorer.description}\nEnter 0, 1, or 2: `)

   let chosenObject;
   //scoringalgorithms[0]... make more efficient

   if (choice === "0") {
      chosenObject = simple;

   }
   else if (choice === "1") {
      chosenObject = vowelBonus;

   } else if (choice === "2") {
      chosenObject = scrabbleScorer;

   } else {
      return scorerPrompt();
   }

   return chosenObject;
};
// chosenObject = scorerPrompt()
// console.log(chosenObject.Score(initialPrompt(word)));


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
   const word = initialPrompt();
   const chosenObject = scorerPrompt();
   console.log(chosenObject.Score(word));
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

