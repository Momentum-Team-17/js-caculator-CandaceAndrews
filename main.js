// Calculator parts stored in a variable
let calSquares = document.querySelectorAll(".button");
let displayScreen = document.querySelector('#display');

//Displays the numbers in the calculator screen
const fullDisplay = [];
for (let part of calSquares) {
    part.addEventListener('click', function (event) {
        let userInput = event.target.innerText;
        fullDisplay.push(userInput);
        // console.log(fullDisplay)
        displayScreen.innerText = fullDisplay;
    }
    )
}
