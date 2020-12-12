const Text = document.getElementById('text')
const NewText = Text.textContent;
const SplitText = NewText.split("")
const UserInput = document.getElementById('userinput')
const Timer = document.getElementById('timer')
Text.innerHTML = "";

//Add span tag to each letter in the text content
for (let x = 0; x < SplitText.length; x++) {
    Text.innerHTML += "<span>" + SplitText[x] + "</span>"
}

UserInput.addEventListener('input', (e) => {
    const Inputtext = e.target.value;
    const SplitLetter = Inputtext.split("")
    const SpanText = Text.querySelectorAll("span")
    let Correct = true
    SpanText.forEach((letter, index = 12) => {
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
        console.log(time)
    }


})
