let squares = document.querySelectorAll(".square");
console.log(squares);
// JS, go find all the elements with the class 'square'
// querySelector only finds the first element
// JS gets the literal chunks of HTML
for (let square of squares) {
    square.addEventListener('click', function (event) {
        console.log(event.target.innerText)
        // console log the innerText of the button that was clicked
    })
}


let frame = document.querySelector('#picture-frame')
// JS gets the picture frame element
// console.log(frame)
// display a value to the developer in the console
frame.classList.add('teal')
// can add to or remove classes from the list

let frameImage = document.querySelector('#changing-image')
// console.log(frameImage)
// get the image element

let catButton = document.querySelector('#square--one')
// actions inside the {} are only triggered when the user clicks the catButton
catButton.addEventListener('click', function () {
    frameImage.src = 'http://placekitten.com/g/200/300'
    // update the src attribute of the image using JS
    frameImage.style.border = '3px dotted yellow'

    let newElement = document.createElement('div')
    // create a new element, not on the page yet

    let text = document.createTextNode('kitty!')
    // created a text node
    newElement.appendChild(text)
    // put the text inside the new element
    frame.appendChild(newElement)
    // appended the new element with text to the existing element
}
)

