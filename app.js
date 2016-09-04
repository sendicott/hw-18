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
        let targetLength = parseInt(document.querySelector('#word-length').value);
        console.log("Length of word must be: " + targetLength + " letters");
        allWords = allWords.filter(function (word) {
            return (word.length === targetLength);
        });
        currentList(allWords);
    });

    guessBtn.addEventListener('click', function () {
        let letterGuess = document.querySelector('#guess-box').value;
        console.log(typeof(letterGuess));
        console.log("The word must contain the letter: " + letterGuess);
        if (removeWithLetter(letterGuess).length > 0) {
            console.log("Nope! That letter definitely isn't in the word.");
            allWords = allWords.filter(removeWithLetter(letterGuess));
                // This is running, it is recognizing that there are words left without that letter,
                // but it is filtering out all of the words and leaving nothing left
                // removeWithLetter(letterGuess);
            currentList(allWords);
        } else {
            console.log("Well even a blind squirrel finds a nut once in a while.");
        }
    });
});