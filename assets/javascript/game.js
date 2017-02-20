// Our array of possible computer choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
    losses = 0,
    guessesLeft = 20
    guessesUsed = " "

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

    // Determine which key was pressed
    var userGuess = event.key;
        guessesUsed = guessesUsed + userGuess;
    alert(userGuess);

    // Sets the computerGuess variable equal to a random choice from the computerChoice array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)

    if (userGuess === computerGuess) {
        wins++
        guessesUsed = ""
        guessesLeft = 20
    }
    else {
        guessesLeft--
    }
    if (guessesLeft === 0) {
        losses++
        guessesLeft = 20
        guessesUsed = ""
    }

    console.log(losses)


// Here we create the HTML that will be injected into our div and displayed on the page.
    var html = "<p>The Psychic Game</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses Used: " + guessesUsed + "</p>";

    // Injecting the HTML we just created into our div and updating the game information on our page.
    document.querySelector("#game").innerHTML = html;



}

