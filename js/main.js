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
tit1 = Object.keys(paragraphss)[0],
auth1 = Object.keys(Object.values(paragraphss)[0])[0],
tex1a = Object.values(Object.values(paragraphss)[0])[0],
tex1b = Object.values(Object.values(paragraphss)[0])[1],
tit2 = Object.keys(paragraphss)[1],
auth2 = Object.keys(Object.values(paragraphss)[1])[0],
tex2a = Object.values(Object.values(paragraphss)[1])[0],
tex2b = Object.values(Object.values(paragraphss)[1])[1],
tit3 = Object.keys(paragraphss)[2],
auth3 = Object.keys(Object.values(paragraphss)[2])[0],
tex3a = Object.values(Object.values(paragraphss)[2])[0],
tex3b = Object.values(Object.values(paragraphss)[2])[1],
tit4 = Object.keys(paragraphss)[3],
auth4 = Object.keys(Object.values(paragraphss)[3])[0],
tex4a = Object.values(Object.values(paragraphss)[3])[0],
tex4b = Object.values(Object.values(paragraphss)[3])[1],
tit5 = Object.keys(paragraphss)[4],
auth5 = Object.keys(Object.values(paragraphss)[4])[0],
tex5a = Object.values(Object.values(paragraphss)[4])[0],
tex5b = Object.values(Object.values(paragraphss)[4])[1],
tit6 = Object.keys(paragraphss)[5],
auth6 = Object.keys(Object.values(paragraphss)[5])[0],
tex6a = Object.values(Object.values(paragraphss)[5])[0],
tex6b = Object.values(Object.values(paragraphss)[5])[1];

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

var selectedSett = document.getElementById("setts");

selectedSett.addEventListener("change", function() {
    var selectedSettOption = selectedSett.options[selectedSett.selectedIndex].value;
    sessionStorage.setItem("selectedSettOption", selectedSettOption);
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
var selectedSettOption = sessionStorage.getItem("selectedSettOption");
var selectedTex = document.getElementById("texts");

selectedTex.addEventListener("change", function() {
    var selectedTexOption = selectedTex.options[selectedTex.selectedIndex].value;
    var selectedSettOption = sessionStorage.getItem("selectedSettOption");
    if (selectedTexOption == "stardust" && selectedSettOption == "punct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit1);
        sessionStorage.setItem("selectedTexAuthor", auth1);
        sessionStorage.setItem("selectedTexText", tex1a);
        location.reload(true);
    }
    else if (selectedTexOption == "stardust" && selectedSettOption == "noPunct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit1);
        sessionStorage.setItem("selectedTexAuthor", auth1);
        sessionStorage.setItem("selectedTexText", tex1b);
        location.reload(true);
    }
    else if (selectedTexOption == "love" && selectedSettOption == "punct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit2);
        sessionStorage.setItem("selectedTexAuthor", auth2);
        sessionStorage.setItem("selectedTexText", tex2a);
        location.reload(true);
    }
    else if (selectedTexOption == "love" && selectedSettOption == "noPunct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit2);
        sessionStorage.setItem("selectedTexAuthor", auth2);
        sessionStorage.setItem("selectedTexText", tex2b);
        location.reload(true);
    }
    else if (selectedTexOption == "everlasting" && selectedSettOption == "punct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit3);
        sessionStorage.setItem("selectedTexAuthor", auth3);
        sessionStorage.setItem("selectedTexText", tex3a);
        location.reload(true);
    }
    else if (selectedTexOption == "everlasting" && selectedSettOption == "noPunct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit3);
        sessionStorage.setItem("selectedTexAuthor", auth3);
        sessionStorage.setItem("selectedTexText", tex3b);
        location.reload(true);
    }
    else if (selectedTexOption == "njuta" && selectedSettOption == "punct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit4);
        sessionStorage.setItem("selectedTexAuthor", auth4);
        sessionStorage.setItem("selectedTexText", tex4a);
        location.reload(true);
    }
    else if (selectedTexOption == "njuta" && selectedSettOption == "noPunct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit4);
        sessionStorage.setItem("selectedTexAuthor", auth4);
        sessionStorage.setItem("selectedTexText", tex4b);
        location.reload(true);
    }
    else if (selectedTexOption == "ändring" && selectedSettOption == "punct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit5);
        sessionStorage.setItem("selectedTexAuthor", auth5);
        sessionStorage.setItem("selectedTexText", tex5a);
        location.reload(true);
    }
    else if (selectedTexOption == "ändring" && selectedSettOption == "noPunct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit5);
        sessionStorage.setItem("selectedTexAuthor", auth5);
        sessionStorage.setItem("selectedTexText", tex5b);
        location.reload(true);
    }
    else if (selectedTexOption == "världen" && selectedSettOption == "punct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit6);
        sessionStorage.setItem("selectedTexAuthor", auth6);
        sessionStorage.setItem("selectedTexText", tex6a);
        location.reload(true);
    }
    else if (selectedTexOption == "världen" && selectedSettOption == "noPunct") {
        sessionStorage.setItem("selectedTexOption", selectedTexOption);
        sessionStorage.setItem("selectedTexTitle", tit6);
        sessionStorage.setItem("selectedTexAuthor", auth6);
        sessionStorage.setItem("selectedTexText", tex6b);
        location.reload(true);
    }
});

var texSel = sessionStorage.getItem("selectedTexText");
var wordCount = getWordCount(texSel);
var charCount = countChars(texSel);
document.getElementById("textTitle").textContent = sessionStorage.getItem("selectedTexTitle");
document.getElementById("textAuthor").textContent = sessionStorage.getItem("selectedTexAuthor");
document.getElementById("textStats").textContent = "(" + wordCount + " words, " + charCount + " characters)";

function loadParagraph() {
    Start()
    typingText.innerHTML = "";
    document.getElementById("copy").value = "";
    var textt = sessionStorage.getItem("selectedTexText");
    textt.split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
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

        let wpm = Math.round(((charIndex - mistakes) / (charCount / wordCount)) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        let gwpm = Math.round(((charIndex) / (charCount / wordCount)) / (maxTime - timeLeft) * 60);
        gwpm = gwpm < 0 || !gwpm || gwpm === Infinity ? 0 : gwpm;
        console.log((charCount / wordCount))
        
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
        let wpm = Math.round(((charIndex - mistakes) / (charCount / wordCount)) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
        let gwpm = Math.round(((charIndex) / (charCount / wordCount)) / (maxTime - timeLeft) * 60);
        gwpmTag.innerText = gwpm;
    } else {
        Stop()
        clearInterval(timer);
    }
}

function resetGame2() {
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
}

function Start(){
    r4c4.style.background = "url('img/stop.svg')";
    r4c4.style.backgroundRepeat = "no-repeat";
    r4c4.style.backgroundPosition = "center center";
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    mixBut.value = "Stop";
    resetGame2();
    audio.pause();
    window.onkeydown = null;
}

function Stop(){
    r4c4.style.background = "url('img/start.svg')";
    r4c4.style.backgroundRepeat = "no-repeat";
    r4c4.style.backgroundPosition = "center center";
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
    clearInterval(timer);
    audio.pause();
    document.getElementById("copy").value = "";
    window.onkeydown = function(event) {
        event.preventDefault();
    };
    mixBut.addEventListener("click", function(){
        location.reload(true);
    });
}

mixBut.addEventListener("click", Start);
r4c4.style.background = "url('img/start.svg')";
r4c4.style.backgroundRepeat = "no-repeat";
r4c4.style.backgroundPosition = "center center"

loadParagraph();
inpField.addEventListener("input", initTyping);