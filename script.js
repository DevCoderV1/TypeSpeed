const Text = document.getElementById('text')
const NewText = Text.textContent;
const SplitText = NewText.split("")
const UserInput = document.getElementById('userinput')
const AllSpan = document.querySelectorAll("span");
Text.innerHTML = "";



for (let x = 0; x < SplitText.length; x++) {
    Text.innerHTML += "<span>" + SplitText[x] + "</span>"
}
let count = 0;
UserInput.addEventListener('keyup', (e) => {
    let InputText = e.target.value;
    count++
    const Span = text.querySelectorAll('span')[count]

    console.log(Span)

})
