const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(".content button"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
gwpmTag = document.querySelector(".gwpm span"),
cpmTag = document.querySelector(".cpm span"),
gcpmTag = document.querySelector(".gcpm span"),
accuracy = document.querySelector(".accuracy span");

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    // var paraArray = {
    //     volvo: "my text one",
    //     saab: "my text two",
    //     mercedes: "my text three",
    //     audi: "my text four"
    // };
    // const paraG = ""
    // const texVal = document.getElementById("cars");
    // if (textVal === volvo) {
    //     paraG = paraArray["volvo"]
    // }
    
    typingText.innerHTML = "";
    console.log('Sentence: '+paragraphs[ranIndex]);
    console.log('Total words: '+getWordCount(paragraphs[ranIndex]));
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

// function loadParagraph() {
//     const paraG = document.getElementById('cars');
//     paragraphTitles.addEventListener('change', () => {
//         const selectedOption = paragraphTitles.value;
//         if (selectedOption === 'volvo') {
//             typingText.innerHTML = 'This is the text for paragraph 1';
//         }
//         else if (selectedOption === 'saab') {
//             typingText.innerHTML = 'This is the text for paragraph 2';
//         }
//         else if (selectedOption === 'mercedes') {
//             typingText.innerHTML = 'This is the text for paragraph 3';
//         }
//         else if (selectedOption === 'audi') {
//             typingText.innerHTML = 'This is the text for paragraph 4';
//         }

//     // typingText.innerHTML = "";
//     console.log('Sentence: '+ paraG);
//     console.log('Total words: '+getWordCount(paraG));
//     paraG.split("").forEach(char => {
//         let span = `<span>${char}</span>`
//         typingText.innerHTML += span;
//     });
//     typingText.querySelectorAll("span")[0].classList.add("active");
//     document.addEventListener("keydown", () => inpField.focus());
//     typingText.addEventListener("click", () => inpField.focus());
// }}

// function loadParagraph() {
//     // Get a reference to the dropdown menu and text box
//     const paragraphTitles = document.getElementById('cars');
//     const paragraphText = document.getElementById('paragraph-text');

//     // Add an event listener to the dropdown menu to update the text box
//     // when a new option is selected
//     paragraphTitles.addEventListener('change', () => {
//     // Get the value of the selected option
//         const selectedOption = paragraphTitles.value;

//     // Set the value of the text box to the corresponding paragraph
//         if (selectedOption === 'volvo') {
//             paragraphText.value = 'This is the text for paragraph 1';
//         } else if (selectedOption === 'saab') {
//             paragraphText.value = 'This is the text for paragraph 2';
//         } else if (selectedOption === 'mercedes') {
//             paragraphText.value = 'This is the text for paragraph 3';
//         }
        
//         typingText.innerHTML = "";
//         console.log('Sentence: '+ paragraphText);
//         console.log('Total words: '+ getWordCount(paragraphText));
//         paragraphText.split("").forEach(char => {
//             let span = `<span>${char}</span>`
//             typingText.innerHTML += span;
//         });
//         typingText.querySelectorAll("span")[0].classList.add("active");
//         document.addEventListener("keydown", () => inpField.focus());
//         typingText.addEventListener("click", () => inpField.focus());
//     });
// }

function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

// const sentence = 'Give me the count of all words in this sentence!';
// console.log('Sentence: '+char);
// console.log('Total words: '+getWordCount(paragraphs[0]));

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            new Audio ("sound/timer.mp3").play()
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        let gwpm = Math.round(((charIndex)  / 5) / (maxTime - timeLeft) * 60);
        gwpm = gwpm < 0 || !gwpm || gwpm === Infinity ? 0 : gwpm;
        
        wpmTag.innerText = wpm;
        gwpmTag.innerText = gwpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
        gcpmTag.innerText = charIndex;
        accuracy.innerText = Math.round(100 - ((mistakes / charIndex) * 100)) + "%";
    } else {
        clearInterval(timer);
        inpField.value = "";
    }   
}

function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
        let gwpm = Math.round(((charIndex)  / 5) / (maxTime - timeLeft) * 60);
        gwpmTag.innerText = gwpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    gwpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
    gcpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);