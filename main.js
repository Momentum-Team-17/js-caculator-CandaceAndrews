// Calculator parts stored in a variable
let calSquares = document.querySelectorAll(".button");
let displayScreen = document.querySelector('#display');



// Display clicked number in console log and screen
// for (let part of calSquares) {
//     part.addEventListener("click", function (event) {
//         // console.log(event.target.innerText)
//         fullDisplay = []
//         let userInput = event.target.innerText;
//         displayScreen.innerText = userInput;
//     }
//     )

// }
const fullDisplay = [];
for (let part of calSquares) {
    part.addEventListener('click', function (event) {
        let userInput = event.target.innerText;
        fullDisplay.push(userInput);
        console.log(fullDisplay)
    }
    )
}
