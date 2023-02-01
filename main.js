// Calculator parts stored in a variable
let calSquares = document.querySelectorAll(".button");
let displayScreen = document.querySelector('#display');



// Display clicked number in console log and screen
for (let part of calSquares) {
    part.addEventListener("click", function (event) {
        // console.log(event.target.innerText)
        let output = event.target.innerText;
        displayScreen.innerText = output;
    }
    )
}

