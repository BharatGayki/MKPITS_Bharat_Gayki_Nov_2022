
<!DOCTYPE html>
<html>
<body>

<div id="matrix"></div>

<button id="reset-button">Reset</button>

<script>

// function to generate random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// empty array to hold the matrix
let matrix = [];

// fill the matrix with random numbers
for (let i = 0; i < 5; i++) {
  matrix[i] = [];
  for (let j = 0; j < 5; j++) {
    let randomNumber;
    do {
      randomNumber = getRandomNumber(1, 25);
    } while (matrix.flat().includes(randomNumber)); // ensure unique random numbers
    matrix[i][j] = randomNumber;
  }
}

// create a button element for each number in the matrix
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let button = document.createElement("button");
    button.innerHTML = matrix[i][j];
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.margin = "2px";
    document.getElementById("matrix").appendChild(button);
  }
  let linebreak = document.createElement("br");
  document.getElementById("matrix").appendChild(linebreak);
}
// add event listener to reset button
document.getElementById("reset-button").addEventListener("click", function() {
  location.reload();
});

</script>

</body>
</html>






