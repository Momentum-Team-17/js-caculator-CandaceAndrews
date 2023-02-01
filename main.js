// Calculator parts stored in a variable
let calSquares = document.querySelectorAll(".notEquals");
let displayScreen = document.querySelector('#display');
let equalSign = document.querySelector('#equal');
let clearButton = document.querySelector('#clear')


//Displays the numbers in the calculator screen
let fullDisplay = [];
for (let square of calSquares) {
    square.addEventListener('click', function (event) {
        let userInput = event.target.innerText;
        fullDisplay.push(userInput);
        // console.log(fullDisplay)
        displayScreen.innerText = fullDisplay.join("");
    }
    )
}

equalSign.addEventListener('click', function (event) {
    //clicking equal button evaluate the expression -- display solution
    let answer = eval(displayScreen.innerText)
    console.log(answer)
    displayScreen.innerText = answer;
}
)

clearButton.addEventListener('click', function (event) {
    displayScreen.innerText = "";
}
)
