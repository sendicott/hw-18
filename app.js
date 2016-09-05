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
        allWords = allWords.filter(function (word) {
            return (word.length === targetLength);
        });
        let letterBoxRow = document.querySelector("#letterBoxRow");
        for (let i = 0; i < targetLength; i++) {
            let singleBox = document.createElement("div");
            singleBox.classList.add("boxStyling");
            singleBox.setAttribute("id", 'letterBox' + (i + 1));
            letterBoxRow.appendChild(singleBox);
        }
        currentList(allWords);
        document.querySelector('#word-length').value = "";
    });
    // trying this out
    let lifeContainer = document.querySelector("#life-count");
    lifeContainer.textContent = 2;

    guessBtn.addEventListener('click', function () {
        let letterGuess = document.querySelector('#guess-box').value;
        // trying this out
        console.log("The word must contain the letter: " + letterGuess);
        if (removeWithLetter(letterGuess).length > 0) {
            console.log("Nope! That letter definitely isn't in the word.");
            //trying this out
            lifeContainer.textContent = lifeContainer.textContent - 1;
            console.log(lifeContainer.textContent);

            allWords = removeWithLetter(letterGuess);

            let guessGraveyard = document.querySelector("#guess-graveyard");
            let graveGraph = document.createElement("p");
            graveGraph.classList.add("graveStyling");
            graveGraph.textContent = document.querySelector('#guess-box').value;
            guessGraveyard.appendChild(graveGraph);
            document.querySelector('#guess-box').value = "";
            if (lifeContainer.textContent === 0) {
                console.log("it's working");
                let resultsBox = document.querySelector("#results");
                let lostMessage = document.createElement("h2");
                // let finalAnswer = document.createElement("h2");
                lostMessage.textContent = "Sorry, not this time!";
                // finalAnswer.textContent =
                resultsBox.appendChild(lostMessage);
            }

            currentList(allWords);
        } else {
            console.log("Got a letter right");
            currentList(allWords);
        }
    });
});