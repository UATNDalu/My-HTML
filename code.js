// Function to implement the Craps game
function playCraps() {
  // Generate 2 random numbers between 1 and 6
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;

  // Calculate the sum of the two dice
  const sum = die1 + die2;

  // Check if the sum is 7 or 11
  if (sum === 7 || sum === 11) {
    // Output CRAPS - you lose!
    document.getElementById('result').innerHTML = 'CRAPS - you lose!';
  } else if (die1 === die2 && die1 % 2 === 0) {
    // Check if both dice are equal (doubles) and even (2, 4, 6)
    // Output You won!
    document.getElementById('result').innerHTML = 'You won!';
  } else {
    // Output You pushed!
    document.getElementById('result').innerHTML = 'You pushed!';
  }
}

// Attach the playCraps function to the button click event
document.getElementById('playButton').addEventListener('click', playCraps);