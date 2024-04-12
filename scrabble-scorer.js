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

const newPointStructure = transform(oldPointStructure);

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
// need a dot includes for obects
function scrabbleScorer(word) {
   word = word.toLowerCase();
   let points = 0;

   for (let i = 0; i < word.length; i++) {

      for (item in newPointStructure) {
         // console.log(newPointStructure[item])
         if (item === (word[i])) {
            
            points = points + newPointStructure[item]
         }

      }
   }
   return points;
}
// console.log(newPointStructure.k)



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
   scorerFunction: simpleScorer
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
   scorerFunction: vowelBonusScorer
};



let scrabble = {
   name: "Scrabble",
   description: "Uses scrabble point system.",
   scorerFunction: scrabbleScorer
};

const scoringAlgorithms = [simple, vowelBonus, scrabble];

function scorerPrompt() {
   let choice = input.question(`Which scoring algorithm do you want?\n\n 0 - ${simple.name} - ${simple.description}\n 1 - ${vowelBonus.name} - ${vowelBonus.description}\n 2 - ${scrabble.name} - ${scrabble.description}\nEnter 0, 1, or 2: `)

   let chosenObject;
   //scoringalgorithms[0]... make more efficient

   if (choice === "0") {
      chosenObject = simple;

   }
   else if (choice === "1") {
      chosenObject = vowelBonus;

   } else if (choice === "2") {
      chosenObject = scrabble;

   } else {
      return scorerPrompt();
   }

   return chosenObject;
};



function transform(oldPointStructure) {
   let brandNew = {};
   for (item in oldPointStructure) {
      const arr = oldPointStructure[item]
   for (let i = 0; i < arr.length; i++) {
      brandNew[arr[i].toLowerCase()] = Number(item)
   }
   }
   
   return brandNew
};




function runProgram() {
   const word = initialPrompt();
   const chosenObject = scorerPrompt();
   console.log(chosenObject.scoringFunction(word));
   
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

