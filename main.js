let calSquares = document.querySelectorAll(".button");

for (let part of calSquares) {
    part.addEventListener("click", function (event) {
        console.log(event.target.innerText)
    }
    )
}