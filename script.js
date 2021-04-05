const Story = ["When the skies and the grounds were one, the legends, through their twelve forces, nurtured the Tree of Life. An Eye of Red Force created the evil which coveted the heart of Tree of Life, and the heart slowly grew dry. To tend and embrace the heart of Tree of Life, the legends hereby divide the tree in half and hide each side. Hence, time is over-turned and space turns askew. The twelve forces divide into two and create two suns that look alike into two worlds that seem alike. The legends travel apart. The legends shall now see the same sky but shall stand on different grounds, shall stand on the same ground but shall see different skies. The day the grounds be kept a single file before one sky in two worlds that seem alike, the legends will greet each other. The day the Red Force is purified, the twelve forces will reunite into one perfect root, a new world shall open up.."]
const textbox = document.querySelector(".type_container")
const startBTN = document.getElementById("start_btn")
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
let count = 0
let TimeCount;
startBTN.focus()
startBTN.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        startBTN.style.display = "none"
        textbox.style.display = "block"
        Timer.innerHTML = count
        UserInput.focus()
        TimeCount = setInterval(function () {
            // I wrote this on two lines for clarity.
            count++
            Timer.innerHTML = `${count}`

        }, 1000);
    }

})

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
    //Once all the word is typed and correct, it will print out a message.
    if (Correct) {
        clearInterval(TimeCount)
        Timer.innerHTML = " Your time is : " + `${count}` + " seconds"
        RETRY.style.display = "block"
    }


})
//click event that refresh the web page.
function restart() {
    location.reload()
}

