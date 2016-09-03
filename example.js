// keeps track of the number of words left in all_words list
function bopIt(words) {
    console.log('List has ' + words.length + ' words.');
    console.log(words);
}

// Delete all the words with the letter 'x'
// Return an array that doesn't have words with that letter 
function removeWithLetter(letter) {
    return all_words.filter(function (word) {
        // returns the word only if it does not have the guessed letter
        return (word.split('').indexOf(letter) === -1);
    });
}

// starts the ball rolling
window.addEventListener('load', function () {
    // starts us off with the total number of words before guessing begins
    bopIt(all_words);
    // establishes a button for setting length
    let lengthBtn = document.querySelector('#length-setter');
    // establishes a button for receiving a letter guess
    let guessBtn = document.querySelector('#guess-time');
    // adds event listener for setting length
    lengthBtn.addEventListener('click', function () {
        // sets inputted length desired to a variable
        let targetLength = parseInt(document.querySelector('#word-length').value);

        // prints out what length of word will be
        console.log('setting length to ' + targetLength);
        // reduces list to words that match target length
        // filter's function will only be called once, so it's left anonymous
        all_words = all_words.filter(function (word) {
            return (word.length === targetLength);
        });
        // prints out shortened list of words now that length is set
        bopIt(all_words);
    });
    // adds event listener for letter guesses
    guessBtn.addEventListener('click', function () {
       // if it is safe to delete all words with letter, do it ('wrong')
       // I think that this needs to be generalized to any letter, 
       //   not just example 'b'
       if (removeWithLetter('b').length > 0) {
           console.log('nope! none of those here');

           // all_words needs to lose all the words with the letter 'b'
           // Remove a life, add to guesses list, clean out the box
       } else {
           console.log('doh you got one right');
           // populate the letter they guessed
           // pick a word at random, eliminate words that don't match the pattern
       }
       // if that leaves us with no words, reveal letter(s) instead  ('right')
    });

    // Get rid of all words with the letter 'x'

    // Get rid of all words that don't have the letter 'x' in a certain position
});