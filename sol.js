const fs = require('fs');
const wordsListPath = require('word-list');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
// console.log(wordArray[0]);

//input
let badWords = ["a", "b", "c", "e", "d"]
let goodWords = ["f", "t", "y"]
let greenWords = [{pos: 4, word: "f"}, {pos: 2, word: "u"}]

//all 5 letter words
let lenList = wordArray.length;
let fiveLetter = []
for (var i =1; i < lenList; i++){
    var lenWord = wordArray[i].length;
    if (lenWord == 5){
        fiveLetter.push(wordArray[i])
    } 
}
// console.log(fiveLetter);

///excludin bad words
let lengthDict = fiveLetter.length;
let lengthBad = badWords.length;
let exBad = []

for (let words=0; words<lengthDict; words++){
    let currentWord = fiveLetter[words];
    // console.log(currentWord)
    var abort = false;
    for (let i=0; i<=lengthBad && !abort; i++){
        // console.log(i)
        for (let n=0; n<currentWord.length && !abort; n++)
        {
        //  console.log(badWords[i])
        //  console.log(currentWord[n])
         if (badWords[i] == currentWord[n]){
            // console.log("break")
            abort = true;            
         }
        //  else{console.log("didnotbreak")}
        }
    }
    abort? null: exBad.push(currentWord)
    // console.log("this word made it")    
}
console.log(exBad);

//including yellow, perfect words
let incGood = []

for (let k=0; k < exBad.length; k++){
    let passCounter = 0;
    let currentWord = exBad[k];
    for (let s=0; s< goodWords.length; s++){
        abort = false;
        for (let l=0; l<currentWord.length && !abort; l++){
            if (goodWords[s] == currentWord[l]){
                passCounter += 1; 
                abort = true;
            }
        }
    }
    if(passCounter == goodWords.length){
        incGood.push(currentWord);
        passCounter=0;
    }else{passCounter=0}

}
 console.log(incGood)

let finalList = [];
for (let k=0; k < incGood.length; k++){
    let passCounter = 0;
    let currentWord = incGood[k];
    for(let o=0; o<greenWords.length;o++){
        let pos = greenWords[o].pos;
        let word = greenWords[o].word        
        abort = false;

        for (let z=1; z<=5 && !abort;z++){
            if (z == pos){
                if(currentWord[pos-1] == word){
                    passCounter += 1; 
        
                    abort = true;
                }
            }
        }
    }if(passCounter == greenWords.length){
        finalList.push(currentWord);
        passCounter=0;
    }else{passCounter=0}
} 
console.log(finalList)
