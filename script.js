var uBlockOffset = 1
var DevtoolsOffset = 1
var TipsOffset = 1
var TutOffset = 1
function showUBlock(){
  if (uBlockOffset == 1) {
      document.getElementById("uBlockD").style.display = ""
      uBlockOffset++
    } else {
      document.getElementById("uBlockD").style.display = "none"
      uBlockOffset--
    }
}
function showDevtools(){
  if (DevtoolsOffset == 1) {
      document.getElementById("DevtoolsD").style.display = ""
      DevtoolsOffset++
    } else {
      document.getElementById("DevtoolsD").style.display = "none"
      DevtoolsOffset--
    }
}
function showTips(){
  if (TipsOffset == 1) {
      document.getElementById("TipsD").style.display = ""
      TipsOffset++
    } else {
      document.getElementById("TipsD").style.display = "none"
      TipsOffset--
    }
}

function showTut(){
  if (TutOffset == 1) {
      document.getElementById("TutD").style.display = ""
      TutOffset++
    } else {
      document.getElementById("TutD").style.display = "none"
      TutOffset--
    }
}




//OLD script2.js
function midpoint() {
    var x1 = parseFloat(prompt("Enter X1:"));
    var y1 = parseFloat(prompt("Enter Y1:"));
    var x2 = parseFloat(prompt("Enter X2:"));
    var y2 = parseFloat(prompt("Enter Y2:"));

    // Calculate the midpoint
    var comX = (x1 + x2) / 2;
    var comY = (y1 + y2) / 2;

    // Format the result as a string
    var answer = "(" + comX + ", " + comY + ")";
    alert(answer);
}
