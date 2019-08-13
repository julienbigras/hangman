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

// gets a random word from the array of possible words
const randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
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
const wordToGuessSection = document.getElementById('wordToGuess');
let guess = document.createElement('p');
guess.innerHTML = underscores.join(' ');
wordToGuessSection.appendChild(guess);

// append the strike counter to the page
const livesSection = document.getElementById('lives');
let lives = document.createElement('p');
lives.innerHTML = `You have ${lifeCounter} lives remaining.`;
livesSection.appendChild(lives);

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

// get all the elements with a class name of "letterButton"
const letterButtons = document.getElementsByClassName('letterButton');

// loop over the "letterButtons" elements, and add an event listener to each one
for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', () => {
        let guessedLetter = letterButtons[i].value;

        // disable the clicked button so that the user knows it's been selected
        letterButtons[i].disabled = true;

        // loops through the letters of the word, and if the guessed letter is found in the word, it pushes those letters to the correct guesses array
        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guessedLetter) {
                correctGuesses.push(randomWord[j])
                underscores[j] = randomWord[j];
                guess.innerHTML = underscores.join(' ').toUpperCase();
            }
        }

        // logs a strike if the guessed letter is not found in the word
        // appends the new strike count to the page
        if (randomWord.indexOf(guessedLetter.toLowerCase()) === -1) {
            lifeCounter--;
            lives.innerHTML = `You have ${lifeCounter} lives remaining.`;
            if (lifeCounter === 1) {
                lives.innerHTML = `You have ${lifeCounter} life remaining!`;
            }
        }

        console.log(guessedLetter);
        console.log(correctGuesses);
        console.log(lifeCounter);
        console.log(underscores);

        if (correctGuesses.length === randomWord.length) {
            setTimeout(function() {
                alert('WOO, you win!')
            }, 050);
            document.getElementById('letterButtonContainer').style.display = 'none';
        }

    })
}

const drawHangman = function() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth=  '2';

    // vertical bar left
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 175);
    ctx.stroke();
    
    // vertical bar right
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(60, 175);
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

    // horizontal bar bottom
    ctx.beginPath();
    ctx.moveTo(130, 30);
    ctx.lineTo(60, 30);
    ctx.stroke();

    // bottom
    ctx.beginPath();
    ctx.moveTo(20, 175);
    ctx.lineTo(170, 175);
    ctx.stroke();

    // diagonal left
    ctx.beginPath();
    ctx.moveTo(50, 60);
    ctx.lineTo(90, 20);
    ctx.stroke();


}

drawHangman();

// take a guess from the user, and determine whether it is correct or not
// const userGuess = function () {
//     for (let j = 0; j < randomWord.length; j++) {
//         if (randomWord[j] === guessedLetter) {
//             correctGuesses.push(randomWord[i])
//         } else {
//             lifeCounter++;
//         }
//     }
// }
// userGuess();

// function that checks if the game is over
const gameOver = function() {
    if (lifeCounter === 7) {
        alert('Game over. You lose!');
    }
}

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
