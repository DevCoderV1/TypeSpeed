const Story = ["One day a rabbit was boasting about how fast he could run. He was laughing at the turtle for being so slow. Much to the rabbit's surprise, the turtle challenged him to a race. The rabbit thought this was a good joke and accepted the challenge. The fox was to be the umpire of the race. As the race began, the rabbit raced way ahead of the turtle, just like everyone thought.The rabbit got to the halfway point and could not see the turtle anywhere.He was hot and tired and decided to stop and take a short nap. Even if the turtle passed him, he would be able to race to the finish line ahead of him.All this time the turtle kept walking step by step by step.He never quit no matter how hot or tired he got.He just kept going. However, the rabbit slept longer than he had thought and woke up.He could not see the turtle anywhere! He went at full speed to the finish line but found the turtle there waiting for him."]
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
        Timer.innerHTML = " Your Time Record is : " + `${count}` + " seconds"
        RETRY.style.display = "block"
    }


})
//click event that refresh the web page.
function restart() {
    location.reload()
}

