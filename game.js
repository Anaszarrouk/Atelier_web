
        function startGame() {
            var maxRange = 100; 
            var randomNumber = Math.floor(Math.random() * maxRange) + 1; 
            var attempts = 10;
            for (var i = 0; i < attempts; i++) {
                var userGuess = parseInt(prompt("Guess a number between 1 and " + maxRange));
                if (userGuess === randomNumber) {
                    alert("Congratulations! You guessed the right number.");
                    break;
                } else if (userGuess < randomNumber) {
                    alert("Your guess is too low. Try again.");
                } else {
                    alert("Your guess is too high. Try again.");
                }
            }

            if (userGuess !== randomNumber) {
                alert("Sorry, you've run out of attempts. The number was " + randomNumber);
            }

            if (confirm("Do you want to play again?")) {
                startGame(); 
            }
        }

        startGame();