console.log("We're live!");

const letters = document.querySelectorAll('.letter')
const input = document.querySelector("#input")

input.addEventListener('keydown', handleKeyPress)
input.addEventListener('keyup', handleKeyPress)

function handleKeyPress(e){
    letters.forEach(letter =>{
        if (letter.dataset.letter === e.key) {
            letter.classList.toggle("active")
        }
    })
}

