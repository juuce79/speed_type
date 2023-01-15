# Final Project: README
# Speed Typer

*The final project is a speed typing game. My implementation is called Speed Typer.*

The aim of the final project is to put all the things we have learned in the previous four labs to good use and create a speed typing game website.

---

## Environment & Tools

MSI GE72MVR 7RG Apache Pro
Windows 11 Pro Version 22H2 Build 22621.1105
Git Version 2.39.0.windows.1
Visual Studio Code 1.74.3
Inkscape Version 1.2 Build dc2aedaf03
paint.net Version 4.3.12
Google Chrome Version 109.0.5414.75
Microsoft Edge Version 109.0.1518.55
Mozilla Firefox Version 108.0.2
WebStorm Version 2022.2.3

---

## Purpose

The aim of the final project is to test myself and to put all I've learned to good use. I need to be able to use HTML5, CSS3 and JavaScript to be able to build this website. The majority of the site will be built using JavaScript and everything I learned from the second lab onwards will be put to the test.

My goal for this final project is not only to pass the course but to build a good website that I can use in the future to showcase my skills. And for that I need to put everything I have learned into the site and make it as fun and enjoyable as possible while also showcasing what I can do.

---

## Procedure

This is a game that is heavily dependant on JavaScript. The first thing to do after creating the initial HTML page is to start trying to put some things together.

After looking at some inspiration on the web, as well as from the project description, I decided to style my page similarly to the project website, as I have already been burned in another course by not following closely to the project description.

I decided to get the cleanest look, and because I am still a novice, to use a borderless table to position all the different elements of the game, the text, the statistics underneath, the options above, and so on.

After styling the page in HTML and CSS, I started working on the actual game part of the game, in JavaScript. I started adding functions. I started with the loading of the text. Firstly I had the text in the main.js file, however, after a while I decided to have another file for the texts.

My loadParagraph function was much larger in the beginning. However, as time went on I decided to use sessionStorage to store the selected text, and other info in, which meant I could also reduce the size of the loadParagraph function.

I added dropdowns for choosing settings and text. I added a button to stop and start (restart) the game. This still doesn't work as intended because if I am still typing when the timer hits zero, the stop button doesn't change to a start button. If I am not tying then everything is ok. I couldn't figure out the problem with it and in the end I ran out of time.

I added a typing function to type over the text and also a an input field which shows only the current word being typed.

I added a timer that counts down from 60 and some dramatic music that plays as the timer counts down, just to get you going.

## Discussion

The most difficult parts of this project was the JavaScript, and especially the typing function. This was very complicated and I had to do a lot of research to get it working how I wanted it to work. The paragraph loading function was also a bit of a pain for a while until I started using sessionStorage. After that everything became much cleaner and easier.

Designing the game was a lot of fun and I designed my own graphics, as I always do, although I copied (payed homage to) the speed racer logo and called my game speed typer and based my logo image on the speed racer logo. However I created the logo from scratch in InkScape.

There is a lot of help out there on the web in regards to JavaScript. However, sometimes there is too much help and there are so many ways to do some things. I tried to use the latest and most modern methods as much as I could, however, as mentioned before, I am still a novice and sometimes the first solution to a problem I was having also worked.

As mentioned during the previous labs, web design is something I really like and it is one avenue I am definitely considering pursuing for my future career.