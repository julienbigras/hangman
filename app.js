const funAndGames = [
    'monopoly',
    'scrabble',
    'slinky',
    'boggle',
    'clue',
    'hopscotch',
    'risk',
    'battleship',
    'checkers',
    'chess',
    'clue',
    'jenga',
    'twister',
    'operation',
    'pictionary',
    'poker',
    'solitaire',
    'minesweeper',
    'mastermind',
    'yahtzee',
    'scattergories',
    'dominoes',
    // 'guess who',
    // 'go fish',
    // 'connect four',
    // 'trivial pursuit',
    // 'snakes and ladders',
    // 'cards against humanity',
    // 'hungry hungry hippos',
]

const nhlTeamNames = [
    'canadiens',
    'oilers',
    'bruins',
    'canucks',
    'rangers',
    'penguins',
    'blues',
    'blackhawks',
    'flames',
    'sharks',
    'devils',
    'sabres',
    'flyers',
    'avalanche',
    'islanders',
    'lightning',
    'capitals',
    'jets',
    'senators',
    'hurricanes',
    'stars',
    'wild',
    'kings',
    'ducks',
    'predators',
    'coyotes',
    'panthers'
    // 'maple leafs',
    // 'red wings',
    // 'golden knights',
    // 'blue jackets',
]

const countries = [
    'afghanistan',
    'bangladesh',
    'belgium',
    'belize',
    'brazil',
    'canada',
    'cambodia',
    'chile',
    'china',
    'cuba',
    'denmark',
    'ecuador',
    'egypt',
    'ethiopia',
    'fiji',
    'finland',
    'france',
    'greece',
    'guatemala',
    'haiti',
    'honduras',
    'hungary',
    'iceland',
    'india',
    'indonesia',
    'iraq',
    'ireland',
    'jamaica',
    'japan',
    'jordan',
    'kenya',
    'latvia',
    'lebanon',
    'lithuania',
    'luxembourg',
    'malaysia',
    'mexico',
    'nepal',
    'netherlands',
    'norway',
    'oman',
    'pakistan',
    'philippines',
    'portugal',
    'russia',
    'sweden',
    'switzerland',
    'syria',
    'thailand',
    'turkey',
    'ukraine',
    'yemen',
    'zimbabwe'
]

// words from the selected category will be pushed to this array
let wordOptions = [];
// correct guesses will be pushed to this array
let correctGuesses = [];
// incorrect guesses reduce the amount of lives remaining
let lifeCounter = 7;
// underscores will replace the letters of the randomly chosen word, and will be appended to the page
let underscores = [];
// the randomly chosen word to be guessed by the user
let randomWord = '';
// the letter chosen by the user
let guessedLetter = '';
// the log of keys pressed by users
let keyLog = [];
// number of rounds won
let roundsWon = 0;
//number of rounds lost
let roundsLost = 0;

// variable for displaying the modal
const modal = document.getElementById('modal');
// variable for displaying the main game area
const main = document.getElementById('main');
// variables for appending the word to guess to the page
const wordToGuess = document.getElementById('wordToGuess');
let guess = document.createElement('p');
// variables for appending the life counter to the page
const livesSection = document.getElementById('lives');
let lives = document.createElement('p');
// variables for appending messages to the page
const correctAnswer = document.getElementById('correctAnswer');
const answer = document.createElement('p');
// variable for displaying the results section upon completion of game
const resultsSection = document.getElementById('results');
// variabls for displaying the number of rounds won or lost by the user
const roundsWonOrLost = document.getElementById('roundsWonOrLost');
const winCount = document.createElement('p');
const lossCount = document.createElement('p');
// variables for the category selection process
const categoryOption = document.getElementsByClassName('categoryOption');
const categoryDisplay = document.getElementById('categoryDisplay');
// get all the elements with a class name of "letterButton" in order to add event listeners
const letterButtons = document.getElementsByClassName('letterButton');
// variables for drawing on the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// function that draws the hangman components on the canvas element
const drawHangman = function() {

    ctx.lineWidth = '2';

    // vertical bar left
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 270);
    ctx.stroke();
    // vertical bar right - short
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(60, 65);
    ctx.stroke();
    // vertical bar right - long
    ctx.beginPath();
    ctx.moveTo(60, 85);
    ctx.lineTo(60, 270);
    ctx.stroke();
    // horizontal bar top
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(200, 20);
    ctx.stroke();
    // horizontal bar right
    ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(200, 30);
    ctx.stroke();
    // horizontal bar bottom - short
    ctx.beginPath();
    ctx.moveTo(60, 30);
    ctx.lineTo(95, 30);
    ctx.stroke();
    // horizontal bar bottom - long
    ctx.beginPath();
    ctx.moveTo(115, 30);
    ctx.lineTo(200, 30);
    ctx.stroke();
    // bottom
    ctx.beginPath();
    ctx.moveTo(20, 270);
    ctx.lineTo(280, 270);
    ctx.stroke();
    // diagonal top
    ctx.beginPath();
    ctx.moveTo(50, 75);
    ctx.lineTo(105, 20);
    ctx.stroke();
    // diagonal bottom
    ctx.beginPath();
    ctx.moveTo(60, 85);
    ctx.lineTo(115, 30);
    ctx.stroke();
    // diagonal right
    ctx.beginPath();
    ctx.moveTo(105, 20);
    ctx.lineTo(115, 30);
    ctx.stroke();
    // diagonal left
    ctx.beginPath();
    ctx.moveTo(50, 75);
    ctx.lineTo(60, 85);
    ctx.stroke();
    // noose
    ctx.beginPath();
    ctx.moveTo(160, 30);
    ctx.lineTo(160, 66);
    ctx.stroke();

    if (lifeCounter === 6) {
        // man's head
        ctx.beginPath();
        ctx.arc(160, 90, 25, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (lifeCounter === 5) {
        // man's body
        ctx.beginPath();
        ctx.moveTo(160, 116);
        ctx.lineTo(160, 180);
        ctx.stroke();
    } else if (lifeCounter === 4) {
        // man's left arm
        ctx.beginPath();
        ctx.moveTo(160, 125);
        ctx.lineTo(135, 150);
        ctx.stroke();
    } else if (lifeCounter === 3) {
        // man's right arm
        ctx.beginPath();
        ctx.moveTo(160, 125);
        ctx.lineTo(185, 150);
        ctx.stroke();
    } else if (lifeCounter === 2) {
        // man's left leg
        ctx.beginPath();
        ctx.moveTo(160, 180);
        ctx.lineTo(135, 220);
        ctx.stroke();
    } else if (lifeCounter === 1) {
        // man's right leg
        ctx.beginPath();
        ctx.moveTo(160, 180);
        ctx.lineTo(190, 220);
        ctx.stroke();
    } else if (lifeCounter === 0) {
        // left eye - line 1
        ctx.beginPath();
        ctx.moveTo(149, 83);
        ctx.lineTo(155, 89);
        ctx.stroke();
        // left eye - line 2
        ctx.beginPath();
        ctx.moveTo(149, 89);
        ctx.lineTo(155, 83);
        ctx.stroke();
        // right eye - line 1
        ctx.beginPath();
        ctx.moveTo(166, 89);
        ctx.lineTo(172, 83);
        ctx.stroke();
        // right eye - line 2
        ctx.beginPath();
        ctx.moveTo(166, 83);
        ctx.lineTo(172, 89);
        ctx.stroke();
        // mouth
        ctx.beginPath();
        ctx.moveTo(151, 102);
        ctx.lineTo(169, 102);
        ctx.stroke();
    }
}

// function to start (or restart) the game
const startGame = function() {
    // reset the global variables
    // wordOptions = [];
    correctGuesses = [];
    lifeCounter = 7;
    underscores = [];
    randomWord = '';
    guessedLetter = '';
    keyLog = [];
    // loop over the letter buttons, and re-enable them if disabled from previous round
    for (i = 0; i < letterButtons.length; i++) {
        letterButtons[i].disabled = false;
    }
    // show the letter button container after it was hidden upon game completion
    document.getElementById('letterButtonContainer').style.display = 'block';
    // hide the results section
    resultsSection.style.display = 'none';
    // removes the game over message
    answer.remove();
    // clears the canvas from the previous game
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw the necessary hangman parts to start the game
    drawHangman();
    // get a random word from the array of possible words
    randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log(randomWord);
    // split the randomly chosen word into an array of individual letters
    const splitRandomWord = randomWord.split('');
    console.log(splitRandomWord);
    // replace each letter in the split name array with underscores
    const underscoreWord = splitRandomWord.forEach(() => {
        underscores.push('_');
        return underscores;
    })
    console.log(underscores);
    // append the string of underscores to the page
    guess.innerHTML = underscores.join(' ');
    wordToGuess.appendChild(guess);
    // append the lives counter to the page
    lives.innerHTML = `You have ${lifeCounter} lives remaining.`;
    livesSection.appendChild(lives);
    //append the rounds won and lost to the page
    winCount.innerHTML = `Rounds Won: ${roundsWon}`;
    lossCount.innerHTML = `Rounds Lost: ${roundsLost}`;
    roundsWonOrLost.appendChild(winCount);
    roundsWonOrLost.appendChild(lossCount);

    console.log(wordOptions);
}

// loop over the category option buttons, and add an event listener to each one
for (let i = 0; i < categoryOption.length; i++) {
    categoryOption[i].addEventListener('click', () => {

        // assign the value of the selected category button to the categoryValue variable
        categoryValue = categoryOption[i].value;

        if (categoryValue === 'funAndGames') {
            funAndGames.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'nhlTeamNames') {
            nhlTeamNames.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'countries') {
            countries.forEach((item) => {
                wordOptions.push(item);
            })
        }
        // display the name of the selected category on the page
        categoryDisplay.innerHTML = categoryOption[i].innerHTML;

        // hide the landing modal and display the main game area
        modal.style.display = 'none';
        main.style.display = "block"
        // run the start game function
        startGame();

    })
}

// =========== ATTEMPT TO ACCOUNT FOR SPACES IN THE WORD OPTIONS ==============

// const generateUnderscores = () => {
//     for (let i = 0; i < splitRandomWord.length; i++) {
//         if (getRandomWord[i] === ' ') {
//             underscores.push(' ');
//             correctGuesses.push(' ');
//         } else {
//             underscores.push('_');
//         }
//     return underscores;
//     }
// }

// ============================================================================

// take a guess from the user, and determine whether it is correct or not
const userGuess = function() {
    //loops over the letters of the word
    // if the user's guess matches letters of the word, those letters get pushed to the correct guesses array
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === guessedLetter) {
            // if the guessedLetter already appears in the keyLog array, return
            if (keyLog.indexOf(guessedLetter) >= 0) {
                return
                }
            correctGuesses.push(randomWord[i])
            underscores[i] = randomWord[i];
            guess.innerHTML = underscores.join(' ').toUpperCase();
        }
    }

    // subtracts a life if the guessed letter is not found in the word
    if (randomWord.indexOf(guessedLetter.toLowerCase()) === -1) {
        if (keyLog.indexOf(guessedLetter) >= 0) {
            return
        }
        // reduce the life count
        lifeCounter--;
        // draw a new part of the hangman
        drawHangman();
        // append the new life count to the page
        lives.innerHTML = `You have ${lifeCounter} lives remaining.`;
        if (lifeCounter === 1) {
            lives.innerHTML = `You only have ${lifeCounter} life remaining!`;
        }
    }

    if (correctGuesses.length === randomWord.length) {
        // hide the letter buttons
        // document.getElementById('letterButtonContainer').style.visibility = 'hidden';
        document.getElementById('letterButtonContainer').style.display = 'none';
        // display results section
        resultsSection.style.display = 'flex';
        // display a congratulatory message telling the user they won the round
        answer.innerHTML = `Nice one! You correctly guessed the word, and the stick man lives to see another day.`;
        correctAnswer.appendChild(answer);
        // update the rounds won count and append the new count to the page
        roundsWon++;
        winCount.innerHTML = `Rounds Won: ${roundsWon}`;
    }

    if (lifeCounter === 0) {
        // hide the letter buttons
        // document.getElementById('letterButtonContainer').style.visibility = 'hidden';
        document.getElementById('letterButtonContainer').style.display = 'none';
        // display results section
        resultsSection.style.display = 'flex';
        // display a message telling the user they have lost, and what the answer was 
        answer.innerHTML = `Oh no, you lost! The correct answer was ${randomWord.toUpperCase()}.`;
        correctAnswer.appendChild(answer);
        // update the rounds lost count and append the new count to the page
        roundsLost++;
        lossCount.innerHTML = `Rounds Lost: ${roundsLost}`;
    }
}

// add a keypress event listener
document.addEventListener('keypress', (e) => {
    // save the 'key' of the key pressed to a variable
    const keyPressed = e.key;
    // push the guessedLetter to the key log array
    keyLog.push(guessedLetter)
    // loop over the letter buttons
    for (let i = 0; i < letterButtons.length; i++) {
        // if the key pressed is equal to the value of the letter button
        if (letterButtons[i].value === keyPressed) {
            // assign the value of the selected letter button to the guessedLetter variable
            guessedLetter = letterButtons[i].value;
            // disable the clicked button so that the user can't click it again
            letterButtons[i].disabled = true;
            // run the userGuess function
            userGuess();

            console.log(guessedLetter);
            console.log(correctGuesses);
            console.log(underscores);
        }
    }
})

// loop over the "letterButtons" elements, and add the click event listener to each one
for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', () => {
        // assign the value of the selected letter button to the guessedLetter variable
        guessedLetter = letterButtons[i].value;
        // disable the clicked button so that the user can't click it again
        letterButtons[i].disabled = true;
        // run the userGuess function
        userGuess();

        console.log(guessedLetter);
        console.log(correctGuesses);
        console.log(underscores);
    })
}

// get the element with the id of playAgain
const playAgain = document.getElementById('playAgain');
// add an event listener to restart the game
playAgain.addEventListener('click', () => {
    // empty the word options array
    wordOptions = [];
    // hide the main game area and display the landing page
    modal.style.display = 'block';
    main.style.display = 'none';
});

// API CALL - THIS WILL BE A STRETCH GOAL 

// const url = `https://www.potterapi.com/v1/characters?key=$2a$10$9fGI3xnlgavFnJ9L3/HnN.ud3E7Kmlf4tfxGQ2zWppihnz5r3qBky`
// const characterNames = [];

// const getCharacters = fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))

// const getCharacters = fetch(url)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data);
//         const names = data.forEach(function() {
//             return data.name;
//         })
//         characterNames.push(names);
//     })

//     console.log(characterNames)
