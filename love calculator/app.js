document.addEventListener("DOMContentLoaded", function() {
  // Wait for the DOM to be fully loaded before executing the code

  // Get the input elements with ids "yourname" and "theirname"
  const yourNameInput = document.getElementById("yourname");
  const theirNameInput = document.getElementById("theirname");

  // Get the button and result elements
  const calculateButton = document.querySelector("button[type='submit']");
  const yourLoveScoreElement = document.getElementById("yourlovescoreis");
  const scoreElement = document.getElementById("score");
  const loveInfoElement = document.getElementById("loveinfo");

  // Function to calculate love score and update HTML
  function calculateLoveScore() {
    // Get the values entered in the input fields
    const yourName = yourNameInput.value;
    const theirName = theirNameInput.value;

    // Combine names and convert to lowercase
    const combinedNames = (yourName + theirName).toLowerCase();

    // Count occurrences of letters in the combined names
    const t = combinedNames.split('t').length - 1;
    const r = combinedNames.split('r').length - 1;
    const u = combinedNames.split('u').length - 1;
    const e = combinedNames.split('e').length - 1;
    const firstDigit = t + r + u + e;

    const l = combinedNames.split('l').length - 1;
    const o = combinedNames.split('o').length - 1;
    const v = combinedNames.split('v').length - 1;
    const e2 = combinedNames.split('e').length - 1;
    const secondDigit = l + o + v + e2;

    // Calculate love score
    const score = parseInt(firstDigit.toString() + secondDigit.toString());

    // Update HTML content
    yourLoveScoreElement.textContent = "Your Love Score is: " ;

    // Add additional logic to set content for other elements if needed
    // For example, you can set different messages based on the score
    if (score < 10 || score > 90) {
      loveInfoElement.textContent = "You go together like coke and mentos.";
    } else if (score >= 40 && score <= 50) {
      loveInfoElement.textContent = "You are alright together.";
    } else {
      loveInfoElement.textContent = "";
    }

    // Optionally, you can display the numeric score as well
    scoreElement.textContent = score + " %";
  }

  // Add event listener to the button to trigger the calculation
  calculateButton.addEventListener("click", calculateLoveScore);

  // Reset result elements when the input fields change
  yourNameInput.addEventListener("input", resetResult);
  theirNameInput.addEventListener("input", resetResult);

  // Function to reset result elements
  function resetResult() {
    yourLoveScoreElement.textContent = "";
    scoreElement.textContent = "";
    loveInfoElement.textContent = "";
  }
});
