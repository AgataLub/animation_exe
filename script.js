"use strict";

window.addEventListener("load", getText);

let sentence;
let childrenLetters;

function getText() {
  sentence = document.querySelector(".cooleffect").textContent;
  sentence = sentence.split("");
  console.log("getText: " + sentence);

  sentence.map(createSeparateLetter);

  let children = document.querySelector("#animated").childNodes;
  for (var i = 0; i < children.length; i++) {
    children[i].style.setProperty("animation-delay", i / 9 + "s");
  }
}

function createSeparateLetter(letter) {
  console.log(letter);

  let paragraph = document.getElementById("animated");

  if (letter === " ") {
    letter = String.fromCharCode(160);
  }

  paragraph.innerHTML += "<span class=letter>" + letter + "</span>";
}
