// variable to keep track of the previous number clicked
let previousNumber = -1; 

// create a button element for each number in the matrix
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let button = document.createElement("button");
    button.innerHTML = matrix[i][j];
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.margin = "2px";
    button.addEventListener("click", function() {
        let currentNumber = Number(this.innerHTML)
      if(previousNumber !== -1 && previousNumber > currentNumber) {
        alert("Previous number should be less than current number.");
      }else{
        alert(this.innerHTML);
        previousNumber = currentNumber;
      }
    });
    document.getElementById("matrix").appendChild(button);
  }
  let linebreak = document.createElement("br");
  document.getElementById("matrix").appendChild(linebreak);
}
//This will now check that the user is clicking on a number that is greater than the previous number, otherwise will show the alert message.