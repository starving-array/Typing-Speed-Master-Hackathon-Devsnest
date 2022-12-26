//  counting word
let wordPointer;
let wordLength;
let charPointer;
let arrayOfCurrentParagraph = [];
let timerOn = false;
let wordCount = 0;
let accurecyCount = 0;
let wrongWord = 0;
let globalCharCount = 0;

// importproblem.innerText = "hello Dear"
let timeid;
// 60 sec timer
function startTimer() {
  let timer = document.querySelector(".timer");
  let time = 60;
  timeid = setInterval(function () {
    timer.innerText = time;
    if (time == 0) {
      stopTimer(timeid);
    }
    time--;
  }, 1000);
}

// stop timer
function stopTimer(id) {
  clearInterval(id);
  let timer = document.querySelector(".timer");
  timer.innerText = "00";
}

function setParagraph() {
  let importproblem = document.querySelector(".importproblem");
  arrayOfCurrentParagraph = importproblem.innerText.split(" ");
  wordPointer = 0;
  charPointer = 0;
}

function startTyping() {
  let typoError = false;
  let globalTypeError = false;
  window.onkeydown = function (e) {
    if (!timerOn) {
      startTimer();
      timerOn = true;
    }
    let currentCharByUser = e.key;
    let word = arrayOfCurrentParagraph[wordPointer];
    wordLength = word.length;
    if (word[charPointer] == currentCharByUser) {
      charPointer++;
      // chage color to green
      if (!globalTypeError) {
        setEmColorChar(globalCharCount, "green");
      }
      globalCharCount++;
      globalTypeError = false;
    } else if (
      charPointer < wordLength &&
      escapeKeys(currentCharByUser) &&
      word[charPointer] != currentCharByUser
    ) {
      // wrong typo
      typoError = true;
      // change color to red
      setEmColorChar(globalCharCount, "red");
      globalTypeError = true;
    }

    if (
      currentCharByUser == " " &&
      escapeKeys(currentCharByUser) &&
      charPointer == wordLength
    ) {
      // spaces between words
      globalCharCount++;
      charPointer = 0;
      wordPointer++;
      if (typoError) {
        wrongWord++;
        typoError = false;
      } else {
        accurecyCount++;
      }
      wordCount++;
      countAccuracy();
      countWord();
    }
  };
}

// text color set
function setEmColorChar(pos, colorName) {
  let master = document.querySelector(".importproblem");
  master.childNodes[pos].style.color = colorName;
}

function timecheckToBreakLoop() {
  let timer = document.querySelector(".timer");
  if (timer.innerText == "00" || timer.innerText == "0") {
    return false;
  }
  return true;
}

// start time || ready
function startButton() {
  reset();
  let startbtn = document.querySelector("#start");
  startbtn.blur();
  setParagraph();
  startTyping();
}

// reset
function reset() {
  stopTimer(timeid);
  wordPointer = 0;
  wordCount = 0;
  charPointer = 0;
  arrayOfCurrentParagraph = [];
  timerOn = false;
  wordCount = 0;
  accurecyCount = 0;
  wrongWord = 0;
  globalCharCount = 0;
  let ems = document.querySelectorAll("em");
  ems.forEach(function (e) {
    e.style.color = "Black";
  });
  countAccuracy();
  countWord();
}

// helper function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// helper function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// counting accurecy
function countAccuracy() {
  let accPoint = document.querySelector(".accuracy");
  let accuracyPercent = (accurecyCount / wordCount) * 100 || 0;
  accPoint.innerText = Math.round(accuracyPercent) + "%";
}
function countWord() {
  let accPoint = document.querySelector(".wordcount");
  let wordCountDisplay = wordCount || 0;
  accPoint.innerText = wordCountDisplay;
}
function escapeKeys(keys) {
  // Tab Control Shift Alt End PageDown PageUp
  // Home Backspace Insert Pause Delete Control
  // OS ArrowUp ArrowRight ArrowDown ArrowLeft Enter
  let obj_key = {
    Tab: 1,
    Control: 1,
    Shift: 1,
    Alt: 1,
    End: 1,
    PageDown: 1,
    PageUp: 1,
    Home: 1,
    Backspace: 1,
    Insert: 1,
    Pause: 1,
    Delete: 1,
    Control: 1,
    OS: 1,
    ArrowUp: 1,
    ArrowRight: 1,
    ArrowDown: 1,
    ArrowLeft: 1,
    Enter: 1,
  };
  if (obj_key[keys] == undefined) {
    return true;
  }
  return false;
}

function setProblemText(text) {
  let ar = text.split("");
  let importproblem = document.querySelector(".importproblem");
  ar.forEach(function (e) {
    let em = document.createElement("em");
    em.innerText = e;
    importproblem.append(em);
  });
}

let text1 = [
  "Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes. The first little pig was very lazy. He didn't want to work at all and he built his house out of straw. The second little pig worked a little bit harder but he was somewhat lazy too and he built his house out of sticks. Then, they sang and danced and played together the rest of the day. The third little pig worked hard all day and built his house with bricks. It was a sturdy house complete with a fine fireplace and chimney. It looked like it could withstand the strongest winds. The next day, a wolf happened to pass by the lane where the three little pigs lived; and he saw the straw house, and he smelled the pig inside. He thought the pig would make a mighty fine meal and his mouth began to water.   So he huffed and he puffed and he blew the house down! The wolf opened his jaws very wide and bit down as hard as he could, but the first little pig escaped and ran away to hide with the second little pig. The wolf continued down the lane and he passed by the second house made of sticks; and he saw the house, and he smelled the pigs inside, and his mouth began to water as he thought about the fine dinner they would make. ",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam unde soluta ratione cupiditate dolorum iure numquam nam sit sint repudiandae in iusto eaque cumque quam error, culpa voluptates voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam unde soluta ratione cupiditate dolorum iure numquam nam sit sint repudiandae in iusto eaque cumque quam error, culpa voluptates voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam unde soluta ratione cupiditate dolorum iure numquam nam sit sint repudiandae in iusto eaque cumque quam error, culpa voluptates voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam unde soluta ratione cupiditate dolorum iure numquam nam sit sint repudiandae in iusto eaque cumque quam error, culpa voluptates voluptatum.",
];

let stories = [];

setProblemText(text1[0]);
console.log(text1[0])
