// load default text and info first
window.addEventListener("load", function(){
    if(!sessionStorage.getItem("hasRunBefore")) {
        sessionStorage.setItem("selectedTextText", text1a);
        sessionStorage.setItem("selectedTextTitle", title1);
        sessionStorage.setItem("selectedSettingsOptions", "level1");
        sessionStorage.setItem("selectedTextAuthor", author1);
        sessionStorage.setItem("selectedTextOption", "stardust");
        sessionStorage.setItem("hasRunBefore", true);
        location.reload(true);
    }
});

// lots of variables
const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
gwpmTag = document.querySelector(".gwpm span"),
cpmTag = document.querySelector(".cpm span"),
gcpmTag = document.querySelector(".gcpm span"),
accuracy = document.querySelector(".accuracy span"),
settings = document.querySelector('#settings'),
texts = document.querySelector('#texts'),
audio = new Audio ("audio/timer.mp3"),
wrong = new Audio ("audio/wrong.mp3"),
startStopButton = document.getElementById("startStopButton"),
title1 = Object.keys(paragraphss)[0],
author1 = Object.keys(Object.values(paragraphss)[0])[0],
text1a = Object.values(Object.values(paragraphss)[0])[0],
text1b = Object.values(Object.values(paragraphss)[0])[1],
title2 = Object.keys(paragraphss)[1],
author2 = Object.keys(Object.values(paragraphss)[1])[0],
text2a = Object.values(Object.values(paragraphss)[1])[0],
text2b = Object.values(Object.values(paragraphss)[1])[1],
title3 = Object.keys(paragraphss)[2],
author3 = Object.keys(Object.values(paragraphss)[2])[0],
text3a = Object.values(Object.values(paragraphss)[2])[0],
text3b = Object.values(Object.values(paragraphss)[2])[1],
title4 = Object.keys(paragraphss)[3],
author4 = Object.keys(Object.values(paragraphss)[3])[0],
text4a = Object.values(Object.values(paragraphss)[3])[0],
text4b = Object.values(Object.values(paragraphss)[3])[1],
title5 = Object.keys(paragraphss)[4],
author5 = Object.keys(Object.values(paragraphss)[4])[0],
text5a = Object.values(Object.values(paragraphss)[4])[0],
text5b = Object.values(Object.values(paragraphss)[4])[1],
title6 = Object.keys(paragraphss)[5],
author6 = Object.keys(Object.values(paragraphss)[5])[0],
text6a = Object.values(Object.values(paragraphss)[5])[0],
text6b = Object.values(Object.values(paragraphss)[5])[1];

// more variables
let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0,
level1 = document.getElementById("level1"),
level2 = document.getElementById("level2"),
selectedSettings = document.getElementById("settings"),
selectedText = document.getElementById("texts"),
selectedSettingsOption = sessionStorage.getItem("selectedSettingsOption");

// function for choosing which difficulty (first dropdown)
function settingSelect(obj) {
    let selection,
    selectedOption = obj.options[obj.selectedIndex];
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
// event listener for first dropdown
settings.addEventListener('change', () => {
    settingSelect(settings);
    if (settings.value) {
        texts.disabled = false;
    }
    else {
        texts.disabled = true;
    }
});

// event listener that places difficulty level in sessionstorage
selectedSettings.addEventListener("change", function() {
    let selectedSettingsOption = selectedSettings.options[selectedSettings.selectedIndex].value;
    sessionStorage.setItem("selectedSettingsOption", selectedSettingsOption);
});

// function for choosing text (second dropdown)
function textSelect(obj) {
    let selection,
    selectedOption = obj.options[obj.selectedIndex];
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
// event listener for second dropdown
texts.addEventListener('change', () => {
    textSelect(texts);
});

// function and event listener for loading the correct text, title and author into sessionstorage
selectedText.addEventListener("change", function() {
    let selectedTextOption = selectedText.options[selectedText.selectedIndex].value,
    selectedSettingsOption = sessionStorage.getItem("selectedSettingsOption");
    if (selectedTextOption == "stardust" && selectedSettingsOption == "level1") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title1);
        sessionStorage.setItem("selectedTextAuthor", author1);
        sessionStorage.setItem("selectedTextText", text1a);
        location.reload(true);
    }
    else if (selectedTextOption == "stardust" && selectedSettingsOption == "level2") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title1);
        sessionStorage.setItem("selectedTextAuthor", author1);
        sessionStorage.setItem("selectedTextText", text1b);
        location.reload(true);
    }
    else if (selectedTextOption == "love" && selectedSettingsOption == "level1") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title2);
        sessionStorage.setItem("selectedTextAuthor", author2);
        sessionStorage.setItem("selectedTextText", text2a);
        location.reload(true);
    }
    else if (selectedTextOption == "love" && selectedSettingsOption == "level2") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title2);
        sessionStorage.setItem("selectedTextAuthor", author2);
        sessionStorage.setItem("selectedTextText", text2b);
        location.reload(true);
    }
    else if (selectedTextOption == "everlasting" && selectedSettingsOption == "level1") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title3);
        sessionStorage.setItem("selectedTextAuthor", author3);
        sessionStorage.setItem("selectedTextText", text3a);
        location.reload(true);
    }
    else if (selectedTextOption == "everlasting" && selectedSettingsOption == "level2") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title3);
        sessionStorage.setItem("selectedTextAuthor", author3);
        sessionStorage.setItem("selectedTextText", text3b);
        location.reload(true);
    }
    else if (selectedTextOption == "njuta" && selectedSettingsOption == "level1") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title4);
        sessionStorage.setItem("selectedTextAuthor", author4);
        sessionStorage.setItem("selectedTextText", text4a);
        location.reload(true);
    }
    else if (selectedTextOption == "njuta" && selectedSettingsOption == "level2") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title4);
        sessionStorage.setItem("selectedTextAuthor", author4);
        sessionStorage.setItem("selectedTextText", text4b);
        location.reload(true);
    }
    else if (selectedTextOption == "ändring" && selectedSettingsOption == "level1") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title5);
        sessionStorage.setItem("selectedTextAuthor", author5);
        sessionStorage.setItem("selectedTextText", text5a);
        location.reload(true);
    }
    else if (selectedTextOption == "ändring" && selectedSettingsOption == "level2") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title5);
        sessionStorage.setItem("selectedTextAuthor", author5);
        sessionStorage.setItem("selectedTextText", text5b);
        location.reload(true);
    }
    else if (selectedTextOption == "världen" && selectedSettingsOption == "level1") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title6);
        sessionStorage.setItem("selectedTextAuthor", author6);
        sessionStorage.setItem("selectedTextText", text6a);
        location.reload(true);
    }
    else if (selectedTextOption == "världen" && selectedSettingsOption == "level2") {
        sessionStorage.setItem("selectedTextOption", selectedTextOption);
        sessionStorage.setItem("selectedTextTitle", title6);
        sessionStorage.setItem("selectedTextAuthor", author6);
        sessionStorage.setItem("selectedTextText", text6b);
        location.reload(true);
    }
});

// variables for stats
let textSelection = sessionStorage.getItem("selectedTextText"),
wordCount = getWordCount(textSelection),
characterCount = countCharacters(textSelection);
// this populates the empty title, author and stat box
document.getElementById("textTitle").textContent = sessionStorage.getItem("selectedTextTitle");
document.getElementById("textAuthor").textContent = sessionStorage.getItem("selectedTextAuthor");
document.getElementById("textStats").textContent = "(" + wordCount + " words, " + characterCount + " characters)";

// function to load the correct text from sessionstorage and split each character for the game
function loadParagraph() {
    Start()
    typingText.innerHTML = "";
    document.getElementById("copy").value = "";
    textSelection.split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

// function to count words
function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

// function to count characters
function countCharacters(str) {
    return str.length;
}

// function that initiates the game when user starts typing
function initTyping() {
    let characters = typingText.querySelectorAll("span"),
    typedChar = inpField.value.split("")[charIndex];
    // when user isn't typing and starts typing
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            // play one minute song
            audio.load();
            audio.play();
            // start timer
            timer = setInterval(initTimer, 1000);
            // set typing to true
            isTyping = true;
        }
        // when user deletes
        if(typedChar == null) {
            if(charIndex > 0) {
                // delete character
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")) {
                    // delete mistake
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            // when user makes mistake
            } else {
                // play sound
                wrong.play();
                // add mistake
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            // add 1 to charIndex for every character typed
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        // math to work out net words per minute
        let wpm = Math.round(((charIndex - mistakes) / (characterCount / wordCount)) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        // math to work out gross words per minute
        let gwpm = Math.round(((charIndex) / (characterCount / wordCount)) / (maxTime - timeLeft) * 60);
        gwpm = gwpm < 0 || !gwpm || gwpm === Infinity ? 0 : gwpm;
        
        wpmTag.innerText = wpm;
        gwpmTag.innerText = gwpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
        gcpmTag.innerText = charIndex;
        accuracy.innerText = Math.round(100 - ((mistakes / charIndex) * 100)) + "%";
    } else {
        // once finished, clear field
        clearInterval(timer);
        inpField.value = "";
    }   
}

// function that copies every word typed
window.onload = function() {
    let src = document.getElementById("paragraph-text"),
    dst = document.getElementById("copy");
    src.addEventListener('input', function() {
        // clear the input field on space
        dst.value = src.value.split(' ').pop();
    });
};

// function to initiate the timer
function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / (characterCount / wordCount)) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
        let gwpm = Math.round(((charIndex) / (characterCount / wordCount)) / (maxTime - timeLeft) * 60);
        gwpmTag.innerText = gwpm;
    } else {
        // call stop function when timer reaches zero (can't get it to work if i'm typing when the timer hits zero, otherwise it is ok)
        Stop()
    }
}

// function to reset the game
function resetGame() {
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

// function for the start button
function Start(){
    r4c4.style.background = "url('img/stop.svg')";
    r4c4.style.backgroundRepeat = "no-repeat";
    r4c4.style.backgroundPosition = "center center";
    startStopButton.removeEventListener("click", Start);
    startStopButton.addEventListener("click", Stop);
    startStopButton.value = "Stop";
    resetGame();
    audio.pause();
    window.onkeydown = null;
}

// function for the stop button
function Stop(){
    clearInterval(timer);
    audio.pause();
    document.getElementById("copy").value = "";
    window.onkeydown = function(event) {
        event.preventDefault();
    };
    startStopButton.addEventListener("click", function(){
        location.reload(true);
    });
    r4c4.style.background = "url('img/start.svg')";
    r4c4.style.backgroundRepeat = "no-repeat";
    r4c4.style.backgroundPosition = "center center";
    startStopButton.removeEventListener("click", Stop);
    startStopButton.addEventListener("click", Start);
    startStopButton.value = "Start";
    
}

// event listener for the start/stop button
startStopButton.addEventListener("click", Start);
r4c4.style.background = "url('img/start.svg')";
r4c4.style.backgroundRepeat = "no-repeat";
r4c4.style.backgroundPosition = "center center"

// calling the load paragraph function
loadParagraph();
// event listener for the initiate typing function
inpField.addEventListener("input", initTyping);