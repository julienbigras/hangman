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
    'uno',
    'crazy eights',
    'war',
    'blackjack',
    'euchre',
    'cribbage',
    'old maid',
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
    'guess who',
    'go fish',
    'connect four',
    'trivial pursuit',
    'snakes and ladders',
    'cards against humanity',
    'hungry hungry hippos',
    'duck hunt',
    'goldeneye',
    'super mario',
    'the legend of zelda',
    'call of duty',
    'world of warcraft',
    'rocket league',
    'tetris',
    'pogs',
    'crazy bones',
]

const sportsTeamNames = [
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
    'panthers',
    'maple leafs',
    'red wings',
    'golden knights',
    'blue jackets',
    'yankees',
    'cubs',
    'dodgers',
    'red sox',
    'mets',
    'twins',
    'braves',
    'astros',
    'phillies',
    'cardinals',
    'indians',
    'giants',
    'brewers',
    'angels',
    'blue jays',
    'nationals',
    'rays',
    'pirates',
    'athletics',
    'reds',
    'white sox',
    'tigers',
    'orioles',
    'diamondbacks',
    'padres',
    'mariners',
    'rockies',
    'marlins',
    'royals',
    'patriots',
    'cowboys',
    'eagles',
    'raiders',
    'packers',
    'giants',
    'steelers',
    'browns',
    'seahawks',
    'bears',
    'broncos',
    'vikings',
    'chiefs',
    'saints',
    'dolphins',
    'bills',
    'redskins',
    'rams',
    'ravens',
    'lions',
    'chargers',
    'texans',
    'colts',
    'falcons',
    'bengals',
    'jaguars',
    'buccaneers',
    'bengals',
]

const countries = [
    'afghanistan',
    'argentina',
    'austria',
    'bangladesh',
    'barbados',
    'belgium',
    'belize',
    'bermuda',
    'brazil',
    'burkina faso',
    'canada',
    'cambodia',
    'cameroon',
    'chile',
    'china',
    'colombia',
    'costa rica',
    'cuba',
    'czech republic',
    'denmark',
    'dominican republic',
    'ecuador',
    'egypt',
    'estonia',
    'ethiopia',
    'fiji',
    'finland',
    'france',
    'germany',
    'ghana',
    'greece',
    'guatemala',
    'haiti',
    'honduras',
    'hungary',
    'iceland',
    'india',
    'indonesia',
    'iran',
    'iraq',
    'ireland',
    'israel',
    'italy',
    'jamaica',
    'japan',
    'jordan',
    'kazakhstan',
    'kenya',
    'kuwait',
    'latvia',
    'lebanon',
    'lithuania',
    'luxembourg',
    'malaysia',
    'mexico',
    'monaco',
    'mongolia',
    'mozambique',
    'nepal',
    'netherlands',
    'new zealand',
    'norway',
    'north korea',
    'oman',
    'pakistan',
    'philippines',
    'portugal',
    'qatar',
    'romania',
    'russia',
    'rwanda',
    'singapore',
    'slovakia',
    'south korea',
    'sri lanka',
    'sweden',
    'switzerland',
    'syria',
    'tanzania',
    'thailand',
    'turkey',
    'ukraine',
    'united kingdom',
    'united states',
    'uzbekistan',
    'vietnam',
    'yemen',
    'zimbabwe'
]

const rockBands = [
    'tool',
    'rolling stones',
    'the beatles',
    'guns n roses',
    'led zeppelin',
    'pink floyd',
    'metallica',
    'queen',
    'black sabbath',
    'rush',
    'aerosmith',
    'fleetwood mac',
    'iron maiden',
    'lynyrd skynyrd',
    'eagles',
    'the doors',
    'slipknot',
    'system of a down',
    'foo fighters',
    'deep purple',
    'green day',
    'pearl jam',
    'nirvana',
    'the who',
    'oasis',
    'def leppard',
    'grateful dead',
    'bon jovi',
    'coldplay',
    'journey',
    'offspring',
    'arcade fire',
    'the police',
    'red hot chili peppers',
    'the tragically hip',
    'nine inch nails',
    'judas priest',
    'megadeth',
    'kiss',
    'talking heads',
    'creedence clearwater revival',
    'radiohead',
    'cream',
    'the kinks',
    'the sex pistols',
    'the white stripes',
    'incubus',
    'korn',
    'finger eleven',
    'sloan',
    'matthew good band',
    'third eye blind',
    'alice in chains',
    'smashing pumpkins',
    'weezer',
    'soundgarden',
    'rage against the machine',
    'no doubt',
    'stone temple pilots',
    'goo goo dolls',
    'counting crows',
    'matchbox twenty',
    'blind melon',
    'pantera',
    'bush',
    'queens of the stone age',
]

const pokemon = [];

// api call for the names of the first 151 pokemon, to be pushed to the pokemon array
for (i = 1; i <= 151; i++) {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${[i]}/`

    const getPokemon = fetch(pokeUrl)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            pokemon.push(data.name.replace(/-/, ' '));
        })
}

const harryPotterCharacters = [];
// harry potter api url
const harryPotterUrl = `https://www.potterapi.com/v1/characters?key=$2a$10$9fGI3xnlgavFnJ9L3/HnN.ud3E7Kmlf4tfxGQ2zWppihnz5r3qBky`

// api call for the complete list of harry potter characters
const getHarryPotterCharacters = fetch(harryPotterUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        for (i = 0; i < data.length; i++) {
            // push the character names to the array, changing them to lower case, and getting rid of any characters that aren't letters or spaces
            harryPotterCharacters.push(data[i].name.toLowerCase().replace(/[^a-z\s]/g, ''));
        }
    })

const movies = [
    'the godfather',
    'citizen kane',
    'star wars',
    'casablanca',
    'the dark knight',
    'pulp fiction',
    'apocalypse now',
    'jaws',
    'psycho',
    'schindlers list',
    'the shawshank redemption',
    'titanic',
    'goodfellas',
    'forrest gump',
    'the silence of the lambs',
    'rocky',
    'the wizard of oz',
    'jurassic park',
    'the matrix',
    'the lion king',
    'fight club',
    'good will hunting',
    'the graduate',
    'the green mile',
    'fargo',
    'the italian job',
    'the exorcist',
    'braveheart',
    'gladiator',
    'a clockwork orange',
    'saving private ryan',
    'raiders of the lost ark',
    'gone with the wind',
    'raging bull',
    'avengers endgame',
    'black panther',
    'iron man',
    'the departed',
    'american beauty',
    'reservoir dogs',
    'kill bill',
    'american psycho',
    'alien',
    'back to the future',
    'batman',
    'blade runner',
    'there will be blood',
    'carrie',
    'a nightmare on elm street',
    'dawn of the dead',
    'inception',
    'edward scissorhands',
    'full metal jacket',
    'ghostbusters',
    'grease',
    'halloween',
    'scarface',
    'scream',
    'the shining',
    'the sixth sense',
    'taxi driver',
    'the terminator',
    'the usual suspects',
    'the wolf of wall street',
    'zodiac',
    'zoolander',
    'superbad',
    'the sandlot',
    'the land before time',
    'aladdin',
    'rush hour',
    'ex machina',
    'wonder woman',
]

const outerSpace = [
    'mercury',
    'venus',
    'earth',
    'mars',
    'saturn',
    'jupiter',
    'neptune',
    'uranus',
    'pluto',
    'solar system',
    'milky way',
    'galaxy',
    'asteroid',
    'asteroid belt',
    'meteor',
    'meteorite',
    'black hole',
    'gravity',
    'crater',
    'asteroid belt',
    'light year',
    'comet',
    'planet',
    'universe',
    'constellation',
    'satellite',
    'space station',
    'moon',
    'eclipse',
    'astronaut',
    'cosmos',
    'launch',
    'rocket',
    'radiation',
    'orbit',
    'vaccuum',
    'andromeda',
    'orion',
    'apollo',
    'discovery',
    'columbia',
    'challenger',
    'ursa major',
    'ursa minor',
    'cygnus',
    'blue shift',
    'red shift',
    'acceleration',
    'accretion disk',
    'big bang',
    'pulsar',
    'atmosphere',
    'antimatter',
    'nebula',
    'supernova',
    'white dwarf',
    'red dwarf',
    'cosmology',
    'astronomy',
    'astrophysics',
    'gamma rays',
    'singularity',
    'telescope',
    'relativity',
    'oort cloud',
    'kuiper belt',
    'hubble',
    'stephen hawking',
    'carl sagan',
    'neil degrasse tyson',
    'neil armstrong',
    'buzz aldrin',
    'doppler effect',
]

console.log(countries.length, 'countries');
console.log(sportsTeamNames.length, 'sports teams');
console.log(funAndGames.length, 'fun and games');
console.log(rockBands.length, 'rock bands');
console.log(movies.length, 'movies');
console.log(outerSpace.length, 'outer space');

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
const winCount = document.createElement('span');
const lossCount = document.createElement('span');
// variables for the category selection process
const categoryOption = document.getElementsByClassName('categoryOption');
const categorySpan = document.getElementsByClassName('categorySpan');
const categoryDisplay = document.getElementById('categoryDisplay');
// get all the elements with a class name of "letterButton" in order to add event listeners
const letterButtons = document.getElementsByClassName('letterButton');
// variables for drawing on the canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// function that draws the hangman components on the canvas element
const drawHangman = function() {

    ctx.lineWidth = '2';
    ctx.strokeStyle = '#FEFFFF';

    // vertical bar left
    ctx.beginPath();
    ctx.moveTo(50, 10);
    ctx.lineTo(50, 260);
    ctx.stroke();
    // vertical bar right - short
    ctx.beginPath();
    ctx.moveTo(60, 10);
    ctx.lineTo(60, 55);
    ctx.stroke();
    // vertical bar right - long
    ctx.beginPath();
    ctx.moveTo(60, 75);
    ctx.lineTo(60, 260);
    ctx.stroke();
    // horizontal bar top
    ctx.beginPath();
    ctx.moveTo(50, 10);
    ctx.lineTo(200, 10);
    ctx.stroke();
    // horizontal bar right
    ctx.beginPath();
    ctx.moveTo(200, 10);
    ctx.lineTo(200, 20);
    ctx.stroke();
    // horizontal bar bottom - short
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(95, 20);
    ctx.stroke();
    // horizontal bar bottom - long
    ctx.beginPath();
    ctx.moveTo(115, 20);
    ctx.lineTo(200, 20);
    ctx.stroke();
    // bottom
    ctx.beginPath();
    ctx.moveTo(20, 260);
    ctx.lineTo(280, 260);
    ctx.stroke();
    // diagonal top
    ctx.beginPath();
    ctx.moveTo(50, 65);
    ctx.lineTo(105, 10);
    ctx.stroke();
    // diagonal bottom
    ctx.beginPath();
    ctx.moveTo(60, 75);
    ctx.lineTo(115, 20);
    ctx.stroke();
    // diagonal right
    ctx.beginPath();
    ctx.moveTo(105, 10);
    ctx.lineTo(115, 20);
    ctx.stroke();
    // diagonal left
    ctx.beginPath();
    ctx.moveTo(50, 65);
    ctx.lineTo(60, 75);
    ctx.stroke();
    // noose
    ctx.beginPath();
    ctx.moveTo(160, 20);
    ctx.lineTo(160, 56);
    ctx.stroke();

    if (lifeCounter === 6) {
        // man's head
        ctx.beginPath();
        ctx.arc(160, 80, 25, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (lifeCounter === 5) {
        // man's body
        ctx.beginPath();
        ctx.moveTo(160, 106);
        ctx.lineTo(160, 170);
        ctx.stroke();
    } else if (lifeCounter === 4) {
        // man's left arm
        ctx.beginPath();
        ctx.moveTo(160, 115);
        ctx.lineTo(135, 140);
        ctx.stroke();
    } else if (lifeCounter === 3) {
        // man's right arm
        ctx.beginPath();
        ctx.moveTo(160, 115);
        ctx.lineTo(185, 140);
        ctx.stroke();
    } else if (lifeCounter === 2) {
        // man's left leg
        ctx.beginPath();
        ctx.moveTo(160, 170);
        ctx.lineTo(135, 210);
        ctx.stroke();
    } else if (lifeCounter === 1) {
        // man's right leg
        ctx.beginPath();
        ctx.moveTo(160, 170);
        ctx.lineTo(190, 210);
        ctx.stroke();
    } else if (lifeCounter === 0) {
        // left eye - line 1
        ctx.beginPath();
        ctx.moveTo(149, 73);
        ctx.lineTo(155, 79);
        ctx.stroke();
        // left eye - line 2
        ctx.beginPath();
        ctx.moveTo(149, 79);
        ctx.lineTo(155, 73);
        ctx.stroke();
        // right eye - line 1
        ctx.beginPath();
        ctx.moveTo(166, 79);
        ctx.lineTo(172, 73);
        ctx.stroke();
        // right eye - line 2
        ctx.beginPath();
        ctx.moveTo(166, 73);
        ctx.lineTo(172, 79);
        ctx.stroke();
        // mouth
        ctx.beginPath();
        ctx.moveTo(151, 92);
        ctx.lineTo(169, 92);
        ctx.stroke();
    }
}

// function to start (or restart) the game
const startGame = function() {
    // reset the global variables
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
    const underscoreWord = splitRandomWord.forEach((item) => {
        if (item === ' ') {
            underscores.push(' ');
            correctGuesses.push('*')
        } else {
            underscores.push('_');
        }
        return underscores;
    })
    console.log(underscores);
    console.log(correctGuesses);
    // append the string of underscores to the page
    guess.innerHTML = underscores.join('');
    wordToGuess.appendChild(guess);
    // append the lives counter to the page
    lives.innerHTML = `You have ${lifeCounter} lives remaining.`;
    livesSection.appendChild(lives);
    //append the rounds won and lost to the page
    winCount.innerHTML = `Rounds Won: ${roundsWon}`;
    lossCount.innerHTML = `Rounds Lost: ${roundsLost}`;
    roundsWonOrLost.appendChild(winCount);
    roundsWonOrLost.appendChild(lossCount);
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
        } else if (categoryValue === 'sportsTeamNames') {
            sportsTeamNames.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'countries') {
            countries.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'rockBands') {
            rockBands.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'pokemon') {
            pokemon.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'harryPotterCharacters') {
            harryPotterCharacters.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'movies') {
            movies.forEach((item) => {
                wordOptions.push(item);
            })
        } else if (categoryValue === 'outerSpace') {
            outerSpace.forEach((item) => {
                wordOptions.push(item);
            })
        }
        // display the name of the selected category on the page
        categoryDisplay.innerHTML = categorySpan[i].innerHTML;

        // hide the landing modal and display the main game area
        modal.style.display = 'none';
        main.style.display = "block"
        // run the start game function
        startGame();

    })
}

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
            guess.innerHTML = underscores.join('').toUpperCase();
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
        answer.innerHTML = `Oh no, you lost! The correct answer was ${randomWord.toUpperCase()}. Rest in peace, stick man.`;
        correctAnswer.appendChild(answer);
        // update the rounds lost count and append the new count to the page
        roundsLost++;
        lossCount.innerHTML = `Rounds Lost: ${roundsLost}`;
    }
}

// add a keypress event listener
document.addEventListener('keypress', (e) => {
    // save the 'key' of the key pressed to a variable
    const keyPressed = e.key.toLowerCase();
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

// add an event listener to play again
playAgain.addEventListener('click', () => {
    startGame();
});

// get the element with the id of newCategory
const newCategory = document.getElementById('newCategory');
// add an event listener to restart the game
newCategory.addEventListener('click', () => {
    // empty the word options array
    wordOptions = [];
    // hide the main game area and display the landing page
    modal.style.display = 'block';
    main.style.display = 'none';
});