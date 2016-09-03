# hw-18

The goal here is to make a hangman game that dodges the user's guesses
for as long as possible before revealing the last possible option out
necessity:

1.  Acquire an array of single words
2.  Allow user to specify a length of word they want in an input field
3.  Remove any words that do not match this length
4.  Display the appropriate number of blanks in a section
5.  Create an input field for guessing individual letters
        a. when a letter is guessed, if there is a word in the wordList that 
            does not have that letter, remove all words with the letter and 
            count the guess as wrong
        b. when a letter is guessed, if all of the remaining words have that
            letter, pick a random word from the list, reveal the letter(s) in the
            appropriate blanks, and strike everything from the wordList that
            doesn't have that same letter in the same position
6.  Create a 'guess' button to be an event listener for user letter guesses
7.  Create a section that keeps track of remaining guesses/lives
8.  Create a section that keeps track of letters guessed
9.  Update blanks with correctly guessed letters
10. When the game is over...
        a. if they win, display all letters and print out message
        b. if they lose, user guesses/lives displays 0 and correct answer is displayed