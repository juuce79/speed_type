const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
gwpmTag = document.querySelector(".gwpm span"),
cpmTag = document.querySelector(".cpm span"),
gcpmTag = document.querySelector(".gcpm span"),
accuracy = document.querySelector(".accuracy span"),
setts = document.querySelector('#setts'),
texts = document.querySelector('#texts');

var audio = new Audio ("audio/timer.mp3"),
wrong = new Audio ("audio/wrong.mp3"),
resetButton = document.getElementById("resetButton"),
playStopButton = document.getElementById("playStopButton"),
mixBut = document.getElementById("mixBut"),
mixButt = document.getElementById("mixButt"),
punct = document.getElementById("punct"),
noPunct = document.getElementById("noPunct");

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0,
para2 = JSON.parse(JSON.stringify(paragraphs));

function settingSelect(obj) {
    var selection;
    var selectedOption = obj.options[obj.selectedIndex];
    if (selection != null) {
        selection.text = selection.text;
        selection.value = selection.value;
    }
    else {
        selection = document.createElement("option");
        selection.text = selectedOption.text;
        selection.value = selectedOption.value;
        selection.setAttribute("disabled", "true");
        obj.options[0] = selection;
    }
    obj.selectedIndex = 0;
}
setts.addEventListener('change', () => {
    settingSelect(setts);
    if (setts.value) {
        texts.disabled = false;
    }
    else {
        texts.disabled = true;
    }
});

function textSelect(obj) {
    var selection;
    var selectedOption = obj.options[obj.selectedIndex];
    if (selection != null) {
        selection.text = selection.text;
        selection.value = selection.value;
    }
    else {
        selection = document.createElement("option");
        selection.text = selectedOption.text;
        selection.value = selectedOption.value;
        selection.setAttribute("disabled", "true");
        obj.options[0] = selection;
    }
    obj.selectedIndex = 0;
}
texts.addEventListener('change', () => {
    textSelect(texts);
});

function loadParagraph() {
    Start()
    typingText.innerHTML = "";
    document.getElementById("copy").value = "";
    paragraphs[0].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });

    setts.addEventListener('change', (e) => {
        const selector = e.target;
        const pesc = selector.selectedOptions[0].text;

        if (pesc == "Correct Case & Punctuation"){
            Start();
            // texts.value = '';
            typingText.innerHTML = "";
            document.getElementById("copy").value = "";
            paragraphs[0].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingText.innerHTML += span;
            });
            texts.addEventListener('change', (e) => {
                const select = e.target;
                // const value = select.value;
                const desc = select.selectedOptions[0].text;
                console.log(desc)
        
                if (desc == "English: Stardust") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    paragraphs[0].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[0]));
                }
                else if (desc == "English: Love") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    paragraphs[1].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[1]));
                }
                else if (desc == "English: Everlasting") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    paragraphs[2].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[2]));
                }
                else if (desc == "Svenska: Njuta") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    paragraphs[3].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[3]));
                }
                else if (desc == "Svenska: Ändring") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    paragraphs[4].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[4]));
                }
                else if (desc == "Svenska: Världen") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    paragraphs[5].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[5]));
                }
                
                typingText.querySelectorAll("span")[0].classList.add("active");
                document.addEventListener("keydown", () => inpField.focus());
                typingText.addEventListener("click", () => inpField.focus());
                });
        }
        else if (pesc == "Lower-Case & No Punctuation") {
            Start();
            // texts.value = '';
            typingText.innerHTML = "";
            document.getElementById("copy").value = "";
            para2[0] = para2[0].replace(/[^a-zåäö]+/gi, ' ');
            para2[0] = para2[0].toLowerCase();
            para2[0].split("").forEach(char => {
                let span = `<span>${char}</span>`
                typingText.innerHTML += span;
            });
            texts.addEventListener('change', (e) => {
                const select = e.target;
                // const value = select.value;
                const desc = select.selectedOptions[0].text;
        
                if (desc == "English: Stardust") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    para2[0] = para2[0].replace(/[^a-zåäö]+/gi, ' ');
                    para2[0] = para2[0].toLowerCase();
                    para2[0].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[0]));
                }
                else if (desc == "English: Love") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    para2[1] = para2[1].replace(/[^a-zåäö]+/gi, ' ');
                    para2[1] = para2[1].toLowerCase();
                    para2[1].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[1]));
                }
                else if (desc == "English: Everlasting") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    para2[2] = para2[2].replace(/[^a-zåäö]+/gi, ' ');
                    para2[2] = para2[2].toLowerCase();
                    para2[2].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[2]));
                }
                else if (desc == "Svenska: Njuta") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    para2[3] = para2[3].replace(/[^a-zåäö]+/gi, ' ');
                    para2[3] = para2[3].toLowerCase();
                    para2[3].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[3]));
                }
                else if (desc == "Svenska: Ändring") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    para2[4] = para2[4].replace(/[^a-zåäö]+/gi, ' ');
                    para2[4] = para2[4].toLowerCase();
                    para2[4].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[4]));
                }
                else if (desc == "Svenska: Världen") {
                    Start();
                    typingText.innerHTML = "";
                    document.getElementById("copy").value = "";
                    para2[5] = para2[5].replace(/[^a-zåäö]+/gi, ' ');
                    para2[5] = para2[5].toLowerCase();
                    para2[5].split("").forEach(char => {
                        let span = `<span>${char}</span>`
                        typingText.innerHTML += span;
                    });
                // console.log('Total words: '+getWordCount(paragraphs[5]));
                }
                typingText.querySelectorAll("span")[0].classList.add("active");
                document.addEventListener("keydown", () => inpField.focus());
                typingText.addEventListener("click", () => inpField.focus());
            });
        }
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

function countChars(str) {
    return str.length;
}

var select = document.getElementById("texts");
select.addEventListener("change", displaySelected);

function displaySelected() {
    var selectedOption = select.options[select.selectedIndex].text;
    if (selectedOption == "English: Stardust") {
        document.getElementById("textTitle").innerHTML = "Stardust";
        document.getElementById("textAuthor").innerHTML = "by Frank Curwen";
        document.getElementById("textStats").innerHTML = "(" + getWordCount(paragraphs[0]) + " words, " + countChars(paragraphs[0]) + " characters)";
    }
    else if (selectedOption == "English: Love") {
        document.getElementById("textTitle").innerHTML = "Love";
        document.getElementById("textAuthor").innerHTML = "by Frank Curwen";
        document.getElementById("textStats").innerHTML = "(" + getWordCount(paragraphs[1]) + " words, " + countChars(paragraphs[1]) + " characters)";
    }
    else if (selectedOption == "English: Everlasting") {
        document.getElementById("textTitle").innerHTML = "Everlasting";
        document.getElementById("textAuthor").innerHTML = "by Frank Curwen";
        document.getElementById("textStats").innerHTML = "(" + getWordCount(paragraphs[2]) + " words, " + countChars(paragraphs[2]) + " characters)";
    }
    else if (selectedOption == "Svenska: Njuta") {
        document.getElementById("textTitle").innerHTML = "Njuta";
        document.getElementById("textAuthor").innerHTML = "av Frank Curwen";
        document.getElementById("textStats").innerHTML = "(" + getWordCount(paragraphs[3]) + " words, " + countChars(paragraphs[3]) + " characters)";
    }
    else if (selectedOption == "Svenska: Ändring") {
        document.getElementById("textTitle").innerHTML = "Ändring";
        document.getElementById("textAuthor").innerHTML = "av Frank Curwen";
        document.getElementById("textStats").innerHTML = "(" + getWordCount(paragraphs[4]) + " words, " + countChars(paragraphs[4]) + " characters)";
    }
    else if (selectedOption == "Svenska: Världen") {
        document.getElementById("textTitle").innerHTML = "Världen";
        document.getElementById("textAuthor").innerHTML = "av Frank Curwen";
        document.getElementById("textStats").innerHTML = "(" + getWordCount(paragraphs[5]) + " words, " + countChars(paragraphs[5]) + " characters)";
    }
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            audio.load();
            audio.play();
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
                wrong.play();
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / getWordCount()) / (maxTime - timeLeft) * maxTime);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        let gwpm = Math.round(((charIndex) / getWordCount()) / (maxTime - timeLeft) * maxTime);
        gwpm = gwpm < 0 || !gwpm || gwpm === Infinity ? 0 : gwpm;
        console.log(charIndex)
        
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

window.onload = function() {
    var src = document.getElementById("paragraph-text"),
    dst = document.getElementById("copy");
    src.addEventListener('input', function() {
        dst.value = src.value.split(' ').pop();
    });
};

function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / getWordCount()) / (maxTime - timeLeft) * maxTime);
        wpmTag.innerText = wpm;
        let gwpm = Math.round(((charIndex) / getWordCount()) / (maxTime - timeLeft) * maxTime);
        gwpmTag.innerText = gwpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    // window.location.reload();
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
    accuracy.innerText = "100%";
    audio.pause();
    Stop();
}
function resetGame2() {
    // window.location.reload();
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
    accuracy.innerText = "100%";
    audio.pause()
    // loadParagraph();
}

function Start(){
    console.log("Started");
    r4c4.style.background = "url('img/stop.svg')";
    r4c4.style.backgroundRepeat = "no-repeat";
    r4c4.style.backgroundPosition = "center center"
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
    // loadParagraph();
    // clearInterval(timer);
    // timeLeft = maxTime;
    // charIndex = mistakes = isTyping = 0;
    // inpField.value = "";
    // timeTag.innerText = timeLeft;
    // wpmTag.innerText = 0;
    // gwpmTag.innerText = 0;
    // mistakeTag.innerText = 0;
    // cpmTag.innerText = 0;
    // gcpmTag.innerText = 0;
    // accuracy.innerText = "100%";
    resetGame2();
    audio.pause();
    window.onkeydown = null;
}

function Stop(){
    console.log("Stopped");
    r4c4.style.background = "url('img/start.svg')";
    r4c4.style.backgroundRepeat = "no-repeat";
    r4c4.style.backgroundPosition = "center center"
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
    clearInterval(timer);
    audio.pause();
    document.getElementById("copy").value = "";
    window.onkeydown = function(event) {
        event.preventDefault();
    };
}

mixBut.addEventListener("click", Start);
r4c4.style.background = "url('img/start.svg')";
r4c4.style.backgroundRepeat = "no-repeat";
r4c4.style.backgroundPosition = "center center"

loadParagraph();
inpField.addEventListener("input", initTyping);
// resetButton.addEventListener("click", resetGame);
// playStopButton.addEventListener("click", resetGame);