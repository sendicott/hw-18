/**
 * 
 * 
 * at the start of the game:
 * limit words to just x letters long
 * 
 * once they enter a letter:
 * cut out words that include certain letter
 * 
 * when we reveal letters:
 * cut out words that don't have a certain
 * letter in a certain position
 */

let allWords = require('./words');

function currentList(words) {
    console.log('Words left: ' + words.length);
    console.log(words);
}

function removeWithLetter(letter) {
    return allWords.filter(function (word) {
        return (word.split('').indexOf(letter) === -1);
    });
}


window.addEventListener('load', function () {
    currentList(allWords);

    let lengthBtn = document.querySelector('#length-setter');
    let guessBtn = document.querySelector('#guess-click');

    lengthBtn.addEventListener('click', function () {
        // can I lift this variable up a scope so it can be accessed later?
        let targetLength = parseInt(document.querySelector('#word-length').value);
        console.log("Length of word must be: " + targetLength + " letters");
        allWords = allWords.filter(function (word) {
            return (word.length === targetLength);
        });
        // would this be where to put an array of blanks, to be filled
        // with letters later? Could it be accessed?
        let letterBoxRow = document.querySelector("#letterBoxRow");
        // let letterArray = [];
        for (let i = 0; i < targetLength; i++) {
            console.log("loop runs " + i + " times");
            let singleBox = document.createElement("div");
            singleBox.classList.add("#boxStyling");
            singleBox.setAttribute("id", 'letterBox' + (i + 1));
            letterBoxRow.appendChild(singleBox);
        }
        currentList(allWords);
    });

    guessBtn.addEventListener('click', function () {
        let letterGuess = document.querySelector('#guess-box').value;
        console.log("The word must contain the letter: " + letterGuess);
        if (removeWithLetter(letterGuess).length > 0) {
            console.log("Nope! That letter definitely isn't in the word.");
            allWords = removeWithLetter(letterGuess);
            currentList(allWords);
        } else {
            console.log("Got a letter right");
            currentList(allWords);

        }
    });
});