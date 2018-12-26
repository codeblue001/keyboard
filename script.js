//Global variable
const wrapper = document.getElementById('wrapper');
const primary = document.getElementById('primary');
const keyTwo = document.getElementById('keyTwo');
const keyThree = document.getElementById('keyThree');
const keyFour = document.getElementById('keyFour');
const keyFive = document.getElementById('keyFive');
const keySix = document.getElementById('keySix');
const keySeven = document.getElementById('keySeven');
const keyEight = document.getElementById('keyEight');
const keyNine = document.getElementById('keyNine');
const keyTen = document.getElementById('keyTen');
const keyEleven = document.getElementById('keyEleven');
const keyTwelve = document.getElementById('keyTwelve');
const keyThirteen = document.getElementById('keyThirteen');
const secondary = document.getElementById('secondary');
const keyFourteen = document.getElementById('keyFourteen');
const keyFifteen = document.getElementById('keyFifteen');
const keySixteen = document.getElementById('keySixteen');
const keySeventeen = document.getElementById('keySeventeen');
const keyNineteen = document.getElementById('keyNineteen');
const keyEighteen = document.getElementById('keyEighteen');
const keyTwenty = document.getElementById('keyTwenty');
const keyTwentyOne = document.getElementById('keyTwentyOne');
const keyTwentyTwo = document.getElementById('keyTwentyTwo');
const keyTwentyThree = document.getElementById('keyTwentyThree');
const keyTwentyFour = document.getElementById('keyTwentyFour');
const keyTwentyFive = document.getElementById('keyTwentyFive');
const keyTwentySix = document.getElementById('keyTwentySix');
const tertiary = document.getElementById('tertiary');
const keyTwentySeven = document.getElementById('keyTwentySeven');
const keyTwentyEight = document.getElementById('keyTwentyEight');
const keyTwentyNine = document.getElementById('keyTwentyNine');
const keyThirty = document.getElementById('keyThirty');
const keyThirtyOne = document.getElementById('keyThirtyOne');
const keyThirtyTwo = document.getElementById('keyThirtyTwo');
const keyThirtyThree = document.getElementById('keyThirtyThree');
const keyThirtyFour = document.getElementById('keyThirtyFour');
const keyThirtyFive = document.getElementById('keyThirtyFive');
const keyThirtySix = document.getElementById('keyThirtySix');
const keyThirtySeven = document.getElementById('keyThirtySeven');
const keyThirtyEight = document.getElementById('keyThirtyEight');
const keyThirtyNine = document.getElementById('keyThirtyNine');
const keyFourty = document.getElementById('keyFourty');
const keyFourtyOne = document.getElementById('keyFourtyOne');
const keyFourtyTwo = document.getElementById('keyFourtyTwo');
const keyFourtyThree = document.getElementById('keyFourtyThree');
const keyFourtyFour = document.getElementById('keyFourtyFour');
const keyFourtyFive = document.getElementById('keyFourtyFive');
const keyFourtySix = document.getElementById('keyFourtySix');
const keyFourtySeven = document.getElementById('keyFourtySeven');
const keyFourtyEight = document.getElementById('keyFourtyEight');
const keyFourtyNine = document.getElementById('keyFourtyNine');
const keyFifty = document.getElementById('keyFifty');
const keyFiftyOne = document.getElementById('keyFiftyOne');
const keyFiftyTwo = document.getElementById('keyFiftyTwo');
const keyFiftyThree = document.getElementById('keyFiftyThree');
const keyFiftyFour = document.getElementById('keyFiftyFour');
const keyFiftyFive = document.getElementById('keyFiftyFive');
const keyFiftySix = document.getElementById('keyFiftySix');
const keyFiftySeven = document.getElementById('keyFiftySeven');

// create a fuction that plays audio
function playAudio() {
   myAudio.play();
}

//plays typewriter sound when clicked
primary.addEventListener("click", () => {
         playAudio();
 });

 //Remove keyboard letters on load
 window.onload = function() {
     primary.innerHTML = "";
     keyOne.innerHTML = "";
     keyTwo.innerHTML = "";
     keyThree.innerHTML = "";
     keyFour.innerHTML = "";
     keyFive.innerHTML = "";
     keySix.innerHTML = "";
     keySeven.innerHTML = "";
     keyEight.innerHTML = "";
     keyNine.innerHTML = "";
     keyTen.innerHTML = "";
     keyEleven.innerHTML = "";
     keyTwelve.innerHTML = "";
     keyThirteen.innerHTML = "";
     keyFourteen.innerHTML = "";
     keyFifteen.innerHTML = "";
     keySixteen.innerHTML = "";
     keySeventeen.innerHTML = "";
     secondary.innerHTML = "";
     keyEighteen.innerHTML = "";
     keyNineteen.innerHTML = "";
     keyTwenty.innerHTML = "";
     keyTwentyOne.innerHTML = "";
     keyTwentyTwo.innerHTML = "";
     keyTwentyThree.innerHTML = "";
     keyTwentyFour.innerHTML = "";
     keyTwentyFive.innerHTML = "";
     keyTwentySix.innerHTML = "";
     keyTwentySeven.innerHTML = "";
     keyTwentyEight.innerHTML = "";
     keyTwentyNine.innerHTML = "";
     keyThirty.innerHTML = "";
     keyThirtyOne.innerHTML = "";
     keyThirtyTwo.innerHTML = "";
     keyThirtyThree.innerHTML = "";
     keyThirtyFour.innerHTML = "";
     keyThirtyFive.innerHTML = "";
     keyThirtySix.innerHTML = "";
     keyThirtySeven.innerHTML = "";
     keyThirtyEight.innerHTML = "";
     keyThirtyNine.innerHTML = "";
     tertiary.innerHTML = "";
     keyFourty.innerHTML = "";
     keyFourtyOne.innerHTML = "";
     keyFourtyTwo.innerHTML = "";
     keyFourtyThree.innerHTML = "";
     keyFourtyFour.innerHTML = "";
     keyFourtyFive.innerHTML = "";
     keyFourtySix.innerHTML = "";
     keyFourtySeven.innerHTML = "";
     keyFourtyEight.innerHTML = "";
     keyFourtyNine.innerHTML = "";
     keyFifty.innerHTML = "";
     keyFiftyOne.innerHTML = "";
     keyFiftyTwo.innerHTML = "";
     keyFiftyThree.innerHTML = "";
     keyFiftyFour.innerHTML = "";
     keyFiftyFive.innerHTML = "";
     keyFiftySix.innerHTML = "";
     keyFiftySeven.innerHTML = "";
 }

 //display keyboard letters on click
 primary.addEventListener("click", () => {
   primary.innerHTML = "`";
 });
 keyOne.addEventListener("click", () => {
   keyOne.innerHTML = "1";
 });
keyTwo.addEventListener("click", () => {
   keyTwo.innerHTML = "2";
  });
keyThree.addEventListener("click", () => {
   keyThree.innerHTML = "3";
  });
keyFour.addEventListener("click", () => {
   keyFour.innerHTML = "4";
  });
keyFive.addEventListener("click", () => {
   keyFive.innerHTML = "5";
  });
keySix.addEventListener("click", () => {
   keySix.innerHTML = "6";
  });
keySeven.addEventListener("click", () => {
   keySeven.innerHTML = "7";
  });
keyEight.addEventListener("click", () => {
   keyEight.innerHTML = "8";
  });
keyNine.addEventListener("click", () => {
   keyNine.innerHTML = "9";
  });
keyTen.addEventListener("click", () => {
   keyTen.innerHTML = "0";
  });
keyEleven.addEventListener("click", () => {
   keyEleven.innerHTML = "-";
  });
keyTwelve.addEventListener("click", () => {
   keyTwelve.innerHTML = "=";
  });
keyThirteen.addEventListener("click", () => {
   keyThirteen.innerHTML = "BACKSPACE";
  });
secondary.addEventListener("click", () => {
   secondary.innerHTML = "TAB";
  });
keyFourteen.addEventListener("click", () => {
   keyFourteen.innerHTML = "Q";
  });
keyFifteen.addEventListener("click", () => {
   keyFifteen.innerHTML = "W";
  });
keySixteen.addEventListener("click", () => {
   keySixteen.innerHTML = "E";
  });
keySeventeen.addEventListener("click", () => {
   keySeventeen.innerHTML = "R";
  });
keyEighteen.addEventListener("click", () => {
   keyEighteen.innerHTML = "T";
  });
keyNineteen.addEventListener("click", () => {
   keyNineteen.innerHTML = "Y";
  });
keyTwenty.addEventListener("click", () => {
   keyTwenty.innerHTML = "U";
  });
keyTwentyOne.addEventListener("click", () => {
   keyTwentyOne.innerHTML = "I";
  });
keyTwentyTwo.addEventListener("click", () => {
   keyTwentyTwo.innerHTML = "O";
  });
keyTwentyThree.addEventListener("click", () => {
   keyTwentyThree.innerHTML = "P";
  });
keyTwentyFour.addEventListener("click", () => {
   keyTwentyFour.innerHTML = "[";
  });
keyTwentyFive.addEventListener("click", () => {
   keyTwentyFive.innerHTML = "]";
  });
keyTwentySix.addEventListener("click", () => {
   keyTwentySix.innerHTML = "&#92;";
  });
tertiary.addEventListener("click", () => {
   tertiary.innerHTML = "CAPS LOCK";
  });
keyTwentySeven.addEventListener("click", () => {
   keyTwentySeven.innerHTML = "A";
  });
keyTwentyEight.addEventListener("click", () => {
   keyTwentyEight.innerHTML = "S";
  });
keyTwentyNine.addEventListener("click", () => {
   keyTwentyNine.innerHTML = "D";
  });
keyThirty.addEventListener("click", () => {
   keyThirty.innerHTML = "F";
  });
keyThirtyOne.addEventListener("click", () => {
   keyThirtyOne.innerHTML = "G";
  });
keyThirtyTwo.addEventListener("click", () => {
   keyThirtyTwo.innerHTML = "H";
  });
keyThirtyThree.addEventListener("click", () => {
   keyThirtyThree.innerHTML = "J";
  });
 keyThirtyFour.addEventListener("click", () => {
   keyThirtyFour.innerHTML = "K";
  });
keyThirtyFive.addEventListener("click", () => {
   keyThirtyFive.innerHTML = "L";
  });
keyThirtySix.addEventListener("click", () => {
   keyThirtySix.innerHTML = ";";
  });
keyThirtySeven.addEventListener("click", () => {
   keyThirtySeven.innerHTML = "'";
  });
keyThirtyEight.addEventListener("click", () => {
   keyThirtyEight.innerHTML = "ENTER";
  });
keyThirtyNine.addEventListener("click", () => {
   keyThirtyNine.innerHTML = "SHIFT";
  });
keyFourty.addEventListener("click", () => {
   keyFourty.innerHTML = "Z";
  });
keyFourtyOne.addEventListener("click", () => {
   keyFourtyOne.innerHTML = "X";
  });
keyFourtyTwo.addEventListener("click", () => {
   keyFourtyTwo.innerHTML = "C";
  });
keyFourtyThree.addEventListener("click", () => {
   keyFourtyThree.innerHTML = "V";
  });
keyFourtyFour.addEventListener("click", () => {
   keyFourtyFour.innerHTML = "B";
  });
keyFourtyFive.addEventListener("click", () => {
   keyFourtyFive.innerHTML = "N";
  });
keyFourtySix.addEventListener("click", () => {
   keyFourtySix.innerHTML = "M";
  });
keyFourtySeven.addEventListener("click", () => {
   keyFourtySeven.innerHTML = ",";
  });
keyFourtyEight.addEventListener("click", () => {
   keyFourtyEight.innerHTML = ".";
  });
keyFourtyNine.addEventListener("click", () => {
   keyFourtyNine.innerHTML = "/";
  });
keyFifty.addEventListener("click", () => {
   keyFifty.innerHTML = "SHIFT";
  });
keyFiftyOne.addEventListener("click", () => {
   keyFiftyOne.innerHTML = "CTRL";
  });
keyFiftyTwo.addEventListener("click", () => {
   keyFiftyTwo.innerHTML = "FN";
  });
keyFiftyThree.addEventListener("click", () => {
   keyFiftyThree.innerHTML = "WIN";
  });
keyFiftyFour.addEventListener("click", () => {
   keyFiftyFour.innerHTML = "ALT";
  });
keyFiftyFive.addEventListener("click", () => {
   keyFiftyFive.innerHTML = "SPACE";
  });
keyFiftySix.addEventListener("click", () => {
   keyFiftySix.innerHTML = "ALT";
  });
keyFiftySeven.addEventListener("click", () => {
   keyFiftySeven.innerHTML = "CTRL";
  });

  //Bind keyboard key to virtual keyboard
document.addEventListener("keyup", function(event) {
    event.preventDefault();

    if (event.keyCode === 96) {
      primary.innerHTML = "`";
      playAudio();
      }
    if (event.keyCode === 49) {
      keyOne.innerHTML = "1";
      playAudio();
      }
    if (event.keyCode === 50) {
      keyTwo.innerHTML = "2";
      playAudio();
      }
    if (event.keyCode === 51) {
      keyThree.innerHTML = "3";
      playAudio();
      }
    if (event.keyCode === 52) {
      keyFour.innerHTML = "4";
      playAudio();
      }
    if (event.keyCode === 53) {
      keyFive.innerHTML = "5";
      playAudio();
      }
    if (event.keyCode === 54) {
      keySix.innerHTML = "6";
      playAudio();
      }
    if (event.keyCode === 55) {
      keySeven.innerHTML = "7";
      playAudio();
      }
    if (event.keyCode === 56) {
      keyEight.innerHTML = "8";
      playAudio();
      }
    if (event.keyCode === 57) {
      keyNine.innerHTML = "9";
      playAudio();
      }
    if (event.keyCode === 48) {
      keyTen.innerHTML = "0";
      }
    if (event.keyCode === 45) {
      keyEleven.innerHTML = "&#45;"
      playAudio();
      }
    if (event.keyCode === 61) {
      keyTwelve.innerHTML = "=";
      playAudio();
      }
    if (event.keyCode === 08) {
      keyThirteen.innerHTML = "BACKSPACE";
      playAudio();
      }
    if (event.keyCode === 81) {
      keyFourteen.innerHTML = "Q";
      playAudio();
      }
    if (event.keyCode === 87) {
      keyFifteen.innerHTML = "W";
      playAudio();
      }
    if (event.keyCode === 69) {
      keySixteen.innerHTML = "E";
      playAudio();
      }
    if (event.keyCode === 82) {
      keySeventeen.innerHTML = "R";
      playAudio();
      }
    if (event.keyCode === 09) {
      secondary.innerHTML = "TAB";
      playAudio();
      }
    if (event.keyCode === 84) {
      keyEighteen.innerHTML = "T";
      playAudio();
      }
    if (event.keyCode === 89) {
      keyNineteen.innerHTML = "Y";
      playAudio();
      }
    if (event.keyCode === 85) {
      keyTwenty.innerHTML = "U";
      playAudio();
      }
    if (event.keyCode === 73) {
      keyTwentyOne.innerHTML = "I";
      playAudio();
      }
    if (event.keyCode === 79) {
      keyTwentyTwo.innerHTML = "O";
      playAudio();
      }
    if (event.keyCode === 80) {
      keyTwentyThree.innerHTML = "P";
      playAudio();
      }
    if (event.keyCode === 91) {
      keyTwentyFour.innerHTML = "[";
      playAudio();
      }
    if (event.keyCode === 93) {
      keyTwentyFive.innerHTML = "]";
      playAudio();
      }
    if (event.keyCode === 92) {
      keyTwentySix.innerHTML = "&#92;";
      playAudio();
      }
    if (event.keyCode === 65) {
      keyTwentySeven.innerHTML = "A";
      playAudio();
      }
    if (event.keyCode === 83) {
      keyTwentyEight.innerHTML = "S";
      playAudio();
      }
    if (event.keyCode === 68) {
      keyTwentyNine.innerHTML = "D";
      playAudio();
      }
    if (event.keyCode === 70) {
      keyThirty.innerHTML = "F";
      playAudio();
      }
    if (event.keyCode === 71) {
      keyThirtyOne.innerHTML = "G";
      playAudio();
      }
    if (event.keyCode === 72) {
      keyThirtyTwo.innerHTML = "H";
      playAudio();
      }
    if (event.keyCode === 74) {
      keyThirtyThree.innerHTML = "J";
      playAudio();
      }
    if (event.keyCode === 75) {
      keyThirtyFour.innerHTML = "K";
      playAudio();
      }
    if (event.keyCode === 76) {
      keyThirtyFive.innerHTML = "L";
      playAudio();
      }
    if (event.keyCode === 59) {
      keyThirtySix.innerHTML = ";";
      playAudio();
      }
    if (event.keyCode === 39) {
      keyThirtySeven.innerHTML = "'";
      playAudio();
      }
    if (event.keyCode === 13) {
      keyThirtyEight.innerHTML = "ENTER";
      playAudio();
      }
    if (event.keyCode === 14) {
      keyThirtyNine.innerHTML = "SHIFT";
      playAudio();
      }
    //if (event.keyCode === 84) {
    //tertiary.innerHTML = "CAPS LOCK";
    //}
    if (event.keyCode === 90) {
      keyFourty.innerHTML = "Z";
      playAudio();
      }
    if (event.keyCode === 88) {
      keyFourtyOne.innerHTML = "X";
      playAudio();
      }
    if (event.keyCode === 67) {
      keyFourtyTwo.innerHTML = "C";
      playAudio();
      }
    if (event.keyCode === 86) {
      keyFourtyThree.innerHTML = "V";
      playAudio();
      }
    if (event.keyCode === 66) {
      keyFourtyFour.innerHTML = "B";
      playAudio();
      }
    if (event.keyCode === 78) {
      keyFourtyFive.innerHTML = "N";
      playAudio();
      }
    if (event.keyCode === 77) {
      keyFourtySix.innerHTML = "M";
      playAudio();
      }
    if (event.keyCode === 44) {
      keyFourtySeven.innerHTML = ",";
      }
    if (event.keyCode === 46) {
      keyFourtyEight.innerHTML = ".";
      playAudio();
      }
    if (event.keyCode === 47) {
      keyFourtyNine.innerHTML = "/";
      playAudio();
      }
    if (event.keyCode === 15) {
      keyFifty.innerHTML = "SHIFT";
      playAudio();
      }
    //if (event.keyCode === 84) {
    //  keyFiftyOne.innerHTML = "CTRL";
    //playAudio();
    //  }
    //if (event.keyCode === 84) {
    //  keyFiftyTwo.innerHTML = "FN";
    //playAudio();
    //  }
    //if (event.keyCode === 84) {
    //  keyFiftyThree.innerHTML = "WIN";
    //playAudio();
    //  }
    //if (event.keyCode === 84) {
    //  keyFiftyFour.innerHTML = "ALT";
    //  }
    if (event.keyCode === 32) {
      keyFiftyFive.innerHTML = "SPACE";
      playAudio();
      }
    //if (event.keyCode === 84) {
    //  keyFiftySix.innerHTML = "ALT";
    //playAudio();
    //  }
    //if (event.keyCode === 84) {
    //  keyFiftySeven.innerHTML = "CTRL";
    //playAudio();
    //  }
  });
