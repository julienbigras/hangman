// have an array of word options
// possibly multiple arrays, should i choose to have different categories *STRETCH GOAL*
// create a function that will choose a random word from the array
// have this word appear on the page, but as a series of blank spaces

// have the user be able to select letters by clicking on them
// users should be able to type letters as well

// write a function that will check whether or not the guessed letters are part of the word
// if yes, have the letters appear
// if no, add a strike to the strike counter

// have something happen if all the letters are guessed correctly
// something else will happen if the user gets too many strikes

// have a button that will open a modal containing... not sure what? stretch goal maybe
// have a button that will reset the game

// possibly a button to have the user select different categories
// category choice will affect which array of possible words the randomizer will select from

// array of possible words - might change this if an api call is made
// might also change if more categories are added later on
const wordOptionsHP = [
    'harry potter',
    'hermoine granger',
    'ron weasley',
    'rubeus hagrid',
    'albus dumbledore',
    'draco malfoy',
    'neville longbottom',
    'minerva mcgonagall'
]

const wordOptions = [
    // 'maple leafs',
    'canadiens',
    'oilers',
    'bruins',
    'canucks',
    'rangers',
    'penguins',
    'blues',
    'blackhawks',
    'flames',
    // 'red wings',
    'sharks',
    'devils',
    'sabres',
    'flyers',
    'avalanche',
    'islanders',
    // 'golden knights',
    'lightning',
    'capitals',
    'jets',
    'senators',
    'hurricanes',
    'stars',
    // 'blue jackets',
    'wild',
    'kings',
    'ducks',
    'predators',
    'coyotes',
    'panthers'
]

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

// variables for appending the word to guess to the page
const wordToGuessSection = document.getElementById('wordToGuess');
let guess = document.createElement('p');

// variables for appending the life counter to the page
const livesSection = document.getElementById('lives');
let lives = document.createElement('p');

// function to start (or restart) the game
const startGame = function() {

    // resets the global variables
    correctGuesses = [];
    lifeCounter = 7;
    underscores = [];
    randomWord = '';
    guessedLetter = '';
    
    // gets a random word from the array of possible words
    randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log(randomWord);

    // splits the randomly chosen word into an array of individual letters
    const splitRandomWord = randomWord.split('');
    console.log(splitRandomWord);

    // replaces each letter in the split name array with underscores
    const underscoreWord = splitRandomWord.forEach(() => {
        underscores.push('_');
        return underscores;
    })
    console.log(underscores);

    // append the string of underscores to the page
    guess.innerHTML = underscores.join(' ');
    wordToGuessSection.appendChild(guess);

    // append the lives counter to the page
    lives.innerHTML = `You have ${lifeCounter} lives remaining.`;
    livesSection.appendChild(lives);
}

startGame();

// =========== ATTEMPT TO ACCOUNT FOR SPACES IN THE WORD OPTIONS ==============

// const generateUnderscores = () => {
//     for (let i = 0; i < randomWord.length; i++) {
//         if (getRandomWord[i] === /\s/) {
//             underscores.push(' ');
//         } else {
//             underscores.push('_');
//         }
//     return underscores;
//     }
// }

// ============================================================================

// take a guess from the user, and determine whether it is correct or not
const userGuess = function() {

    for (let j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === guessedLetter) {
            correctGuesses.push(randomWord[j])
            underscores[j] = randomWord[j];
            guess.innerHTML = underscores.join(' ').toUpperCase();
        }
    }

    // subtracts a life if the guessed letter is not found in the word
    // appends the new life count to the page
    if (randomWord.indexOf(guessedLetter.toLowerCase()) === -1) {
        lifeCounter--;
        drawHangman();
        lives.innerHTML = `You have ${lifeCounter} lives remaining.`;
        if (lifeCounter === 1) {
            lives.innerHTML = `You only have ${lifeCounter} life remaining!`;
        }
    }

    if (correctGuesses.length === randomWord.length) {
        setTimeout(function () {
            alert('WOO, you win!')
        }, 050);
        document.getElementById('letterButtonContainer').style.display = 'none';
    }

    if (lifeCounter === 0) {
        setTimeout(function () {
            alert('You have lost. Try again?')
        }, 050);
        document.getElementById('letterButtonContainer').style.display = 'none';
    }
}

// get all the elements with a class name of "letterButton"
const letterButtons = document.getElementsByClassName('letterButton');

// loop over the "letterButtons" elements, and add an event listener to each one
for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', () => {

        // assigns the value of the selected letter button to the guessedLetter variable
        guessedLetter = letterButtons[i].value;

        // disable the clicked button so that the user can't click it again
        letterButtons[i].disabled = true;

        // runs the userGuess function
        userGuess();

        console.log(guessedLetter);
        console.log(correctGuesses);
        console.log(lifeCounter);
        console.log(underscores);

    })
}

const drawHangman = function() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth=  '2';

    // vertical bar left
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.stroke();
    
    // vertical bar right - short
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(60, 50);
    ctx.stroke();
    
    // vertical bar right - long
    ctx.beginPath();
    ctx.moveTo(60, 70);
    ctx.lineTo(60, 180);
    ctx.stroke();

    // horizontal bar top
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(130, 20);
    ctx.stroke();

    // horizontal bar right
    ctx.beginPath();
    ctx.moveTo(130, 20);
    ctx.lineTo(130, 30);
    ctx.stroke();

    // horizontal bar bottom - short
    ctx.beginPath();
    ctx.moveTo(60, 30);
    ctx.lineTo(80, 30);
    ctx.stroke();

    // horizontal bar bottom - long
    ctx.beginPath();
    ctx.moveTo(100, 30);
    ctx.lineTo(130, 30);
    ctx.stroke();

    // bottom
    ctx.beginPath();
    ctx.moveTo(20, 180);
    ctx.lineTo(170, 180);
    ctx.stroke();

    // diagonal top
    ctx.beginPath();
    ctx.moveTo(50, 60);
    ctx.lineTo(90, 20);
    ctx.stroke();

    // diagonal bottom
    ctx.beginPath();
    ctx.moveTo(60, 70);
    ctx.lineTo(100, 30);
    ctx.stroke();

    // diagonal right
    ctx.beginPath();
    ctx.moveTo(90, 20);
    ctx.lineTo(100, 30);
    ctx.stroke();

    // diagonal left
    ctx.beginPath();
    ctx.moveTo(50, 60);
    ctx.lineTo(60, 70);
    ctx.stroke();

    // noose
    ctx.beginPath();
    ctx.moveTo(115, 30);
    ctx.lineTo(115, 52);
    ctx.stroke();

    if (lifeCounter === 6) {
        // man's head
        ctx.beginPath();
        ctx.arc(115, 70, 18, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (lifeCounter === 5) {
        // man's body
        ctx.beginPath();
        ctx.moveTo(115, 88);
        ctx.lineTo(115, 140);
        ctx.stroke();
    } else if (lifeCounter === 4) {
        // man's left arm
        ctx.beginPath();
        ctx.moveTo(115, 100);
        ctx.lineTo(95, 125);
        ctx.stroke();
    } else if (lifeCounter === 3) {
        // man's right arm
        ctx.beginPath();
        ctx.moveTo(115, 100);
        ctx.lineTo(135, 125);
        ctx.stroke();
    } else if (lifeCounter === 2) {
        // man's left leg
        ctx.beginPath();
        ctx.moveTo(115, 140);
        ctx.lineTo(90, 165);
        ctx.stroke();
    } else if (lifeCounter === 1) {
        // man's right leg
        ctx.beginPath();
        ctx.moveTo(115, 140);
        ctx.lineTo(140, 165);
        ctx.stroke();
    } else if (lifeCounter === 0) {
        // left eye - line 1
        ctx.beginPath();
        ctx.moveTo(106, 63);
        ctx.lineTo(112, 69);
        ctx.stroke();

        // left eye - line 2
        ctx.beginPath();
        ctx.moveTo(106, 69);
        ctx.lineTo(112, 63);
        ctx.stroke();

        // right eye - line 1
        ctx.beginPath();
        ctx.moveTo(118, 69);
        ctx.lineTo(124, 63);
        ctx.stroke();

        // right eye - line 2
        ctx.beginPath();
        ctx.moveTo(118, 63);
        ctx.lineTo(124, 69);
        ctx.stroke();

        // mouth
        ctx.beginPath();
        ctx.moveTo(106, 77);
        ctx.lineTo(124, 77);
        ctx.stroke();
    }
}

drawHangman();

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
