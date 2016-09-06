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
        allWords = allWords.filter(function (word) {
            return (word.length === targetLength);
        });
        let letterBoxRow = document.querySelector("#letterBoxRow");
        for (let i = 0; i < targetLength; i++) {
            let singleBox = document.createElement("div");
            singleBox.classList.add("boxStyling");
            singleBox.setAttribute("id", 'letterBox' + (i));
            letterBoxRow.appendChild(singleBox);
        }
        currentList(allWords);
        document.querySelector('#word-length').value = "";
    });
    let lifeContainer = document.querySelector("#life-count");
    lifeContainer.textContent = 22;

    guessBtn.addEventListener('click', function () {
        let letterGuess = document.querySelector('#guess-box').value;
        console.log("The word must contain the letter: " + letterGuess);
        if (removeWithLetter(letterGuess).length > 0) {
            lifeContainer.textContent = lifeContainer.textContent - 1;
            allWords = removeWithLetter(letterGuess);
            let guessGraveyard = document.querySelector("#guess-graveyard");
            let graveGraph = document.createElement("p");
            graveGraph.classList.add("graveStyling");
            graveGraph.textContent = document.querySelector('#guess-box').value;
            guessGraveyard.appendChild(graveGraph);
            document.querySelector('#guess-box').value = "";
            if (lifeContainer.textContent === "0") {
                let resultsBox = document.querySelector("#results");
                let lostMessage = document.createElement("h2");
                lostMessage.textContent = "Sorry, not this time!";
                resultsBox.appendChild(lostMessage);
                let finalAnswer = document.createElement("h2");
                finalAnswer.textContent = "The answer was: " + allWords[0];
                resultsBox.appendChild(finalAnswer);
            }
        } else {
            console.log("Got a letter right");
            let letterLocale = allWords[0].split('').indexOf(letterGuess);
            console.log("letterGuess: " + letterGuess);
            console.log("letterLocale: " + letterLocale);

            allWords.filter(function(word) {
                return (word.split('').indexOf(letterGuess) === letterLocale);
            });
            // console.log(letterLocale);
            document.querySelector('#guess-box').value = "";
        }
        currentList(allWords);
    });
});

// when a letter is guessed, if all of the remaining words have that letter, pick a random word from the list, reveal the letter(s)in the appropriate blanks, and strike everything from the wordList that doesn't have that same letter in the same position

