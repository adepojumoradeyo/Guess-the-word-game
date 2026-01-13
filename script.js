const words = [
  "hi",
  "pen",
  "gun",
  "javascript",
  "developer",
  "function",
  "program",
  "ibudoiya",
  "preacher",
  "cats",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

let guessList = [];
let wrongGuessList = [];
let maxAttempts = 6;

let displayWord = "_";
for (let i = 0; i < selectedWord.length; i++) {
  displayWord += "_";
}

document.querySelector(".word_display").textContent = displayWord;

document.querySelector(".guess").addEventListener("click", function () {
  let inputElement = document.querySelector(".input_letter");

  let letter = inputElement.value.toLowerCase();

  inputElement.value = "";
  inputElement.focus();

  if (selectedWord.includes(letter)) {
    guessList.push(letter);
    document.querySelector(".word_display").style.background = "green";
  } else {
    wrongGuessList.push(letter);
    maxAttempts--;
    document.querySelector(".word_display").style.background = "red";
  }

  if (!letter) {
    alert("empty value");
  }

  if (maxAttempts === 0) {
    endgame();
    document.querySelector(".message").textContent = "Game over";
  }

  document.querySelector(".wrong_guesses").textContent = wrongGuessList;

  let updatedDisplay = "";
  let allLettersGuessed = true;
  for (let i = 0; i < selectedWord.length; i++)
    if (guessList.includes(selectedWord[i])) {
      updatedDisplay += selectedWord[i] + " ";
    } else {
      updatedDisplay += "_ ";
      allLettersGuessed = false;
    }

  if (allLettersGuessed) {
    endgame();
    document.querySelector(".message").textContent = "🎉 you win!!";
  }

  document.querySelector(".word_display").textContent = updatedDisplay;
});

document.querySelector(".attempts_left").textContent = maxAttempts;

function endgame() {
  document.querySelector(".input_letter").disabled = true;
  document.querySelector(".guess").disabled = true;
}

document.querySelector(".restart").addEventListener("click", function () {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  console.log(selectedWord);

  document.querySelector(".word_display").textContent = " ";
  document.querySelector(".wrong_guesses").textContent = "";
  document.querySelector(".message").textContent = " ";
  document.querySelector(".guess").disabled = false;
  document.querySelector(".input_letter").disabled = false;
  maxAttempts = 6;
});
