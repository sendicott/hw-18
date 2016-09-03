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

let listOfWords = require('./words');

function currentList(words) {
    console.log('Words left: ' + words.length);
    console.log(words);
}

window.addEventListener('load', function() {
    // allWords is my best guess as to the syntax that will
    // draw in the array from words.js
    currentList(listOfWords.allWords);

    
});