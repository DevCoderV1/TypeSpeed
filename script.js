const Story = ["One day a rabbit was boasting about how fast he could run. He was laughing at the turtle for being so slow.Much to the rabbit's surprise, the turtle challenged him to a race.The rabbit thought this was a good joke and accepted the challenge.The fox was to be the umpire of the race."]
const Text = document.getElementById('text')

const SplitText = Story[0].split("")
const UserInput = document.getElementById('userinput')
const Timer = document.getElementById('timer')
const RETRY = document.getElementById('restart')
Text.innerHTML = "";

//Add span tag to each letter in the text content
for (let x = 0; x < SplitText.length; x++) {
    Text.innerHTML += "<span>" + SplitText[x] + "</span>"
}
//Timer
var count = 0
let TimeCount = setInterval(function () {
    // I wrote this on two lines for clarity.
    count++

    Timer.innerHTML = `${count}`

}, 1000);

//event once enter character in input
UserInput.addEventListener('input', (e) => {
    const Inputtext = e.target.value;
    const SplitLetter = Inputtext.split("")
    const SpanText = Text.querySelectorAll("span")
    let Correct = true
    SpanText.forEach((letter, index) => {
        const CurrentLetter = SplitLetter[index]
        if (CurrentLetter == null) {
            letter.classList.remove('correctText')
            letter.classList.remove('incorrectText')
            Correct = false
        } else if (CurrentLetter === letter.innerText) {
            letter.classList.add('correctText')
            letter.classList.remove('incorrectText')
        } else {
            letter.classList.remove('correctText')
            letter.classList.add('incorrectText')
            Correct = false
        }
    })
    if (Correct) {
        Timer.innerHTML = " Your Time Record is :" + `${count}` + " seconds"
        clearInterval(TimeCount)
        RETRY.style.display = "block"

    }


})

function restart() {
    location.reload()
}

