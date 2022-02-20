//https://medium.com/swlh/read-html-form-data-using-get-and-post-method-in-node-js-8d2c7880adbf

const fs = require('fs');
const wordsListPath = require('word-list');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');


var sqlite3 = require('sqlite3').verbose();
let express = require('express');
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");
var bodyParser = require("body-parser");

var app = express();
let port = 3000;

//since we are using ejs view engine
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
  });

app.get('/styles.css', function(req, res){
    res.sendFile(path.join(__dirname, "/styles.css"))
})
app.get('/resultStyles.css',  function(req, res){
    res.sendFile(path.join(__dirname, "/resultStyles.css"))
})
//if more files use app.use(express.static("public")); after putting it in a folder and remove app.get

var goodArray = ""
var badArray = ""
var perfectArray;
let displayList = [];

app.get('/result', function(req, res){
    res.sendFile(__dirname + '/views/result.html')
})

//ejs, format to send data
app.engine('html', require('ejs').renderFile); 

app.use(bodyParser.urlencoded({extended: true}))
app.post('/result',async function(req, res){
    console.log("posted");
    console.log(req.body);
    goodArray = req.body.goodWords;
    badArray = req.body.badWords;
    perfectArray = req.body.perfectWords;
    //call function that runs logic with all the data
    let list = await logic(wordArray, goodArray, badArray, perfectArray);
    if(list == ""){
        res.send("<h1>No such words found</h1>");
    }else{
        // displayList = list.join('\n');
        displayList = list;
        // for(let p=0; p<list.length; p++){
        //     displayList = list
        // }
        listLength = list.length;
        res.render(__dirname + '/views/result.ejs', {name:"hola", list: displayList, listLen: listLength} )
    }
})



app.listen(port, ()=>{
    console.log("example app listening on port")
})


async function logic(wordArray, goodArray, badArray, perfectArray){
    //input
    let badWords = badArray.split("");
    let goodWords = goodArray.split("");
    let greenWords = [];
    let pos = [];
    let finalList = [];

    for(let c=1; c<=5;c++){
        greenWords.push({pos: c, word: perfectArray[c-1]})
    }
    await console.log(greenWords);
    let greenLength = 0;
    for(let e=0; e<greenWords.length;e++){
        if (greenWords[e].word != ""){
            greenLength += 1;
            let any = e+1;
            pos.push(any);
        }            
    }
    console.log(pos)
    console.log(greenLength);
    // console.log(badWords);
    // console.log(goodWords);
    

    //all 5 letter words
    let lenList = wordArray.length;
    let fiveLetter = []
    for (var i =1; i < lenList; i++){
        var lenWord = wordArray[i].length;
        if (lenWord == 5){
            fiveLetter.push(wordArray[i])
        } 
    }

    ///excludin bad words
    let lengthDict = fiveLetter.length;
    let lengthBad = badWords.length;
    let exBad = []

    for (let words=0; words<lengthDict; words++){
        let currentWord = fiveLetter[words];
        var abort = false;
        for (let i=0; i<=lengthBad && !abort; i++){
            for (let n=0; n<currentWord.length && !abort; n++)
            {
            if (badWords[i] == currentWord[n]){
             
                abort = true;            
            }
            
            }
        }
        abort? null: exBad.push(currentWord)
        
    }
    console.log(exBad);

    //including good words
    //TODO if no good words still pass the list
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
    if(incGood == ""){
        incGood = exBad;
    }
    console.log(incGood)

    if (greenLength == 0){
        finalList = incGood
    }else{
    //including yellow, perfect words
    
    for (let k=0; k < incGood.length; k++){
        let passCounter = 0;
        let currentWord = incGood[k];
        for(let o=0; o<greenLength;o++){
            let currentPos = pos[o];  
            let word = greenWords[currentPos-1].word
            if(currentWord[currentPos-1] == word){
                passCounter += 1; 
            }
        }if(passCounter == greenLength){
            finalList.push(currentWord);
            passCounter=0;
        }else{passCounter=0}
    }} 
    console.log(finalList);
    return (finalList);
}

