function getId(selector) {
  return document.getElementById(selector);
}

function clearNumber() {
  getId("input-number").innerHTML = "0";
  getId("result-calc").innerHTML = "0";
}

function calculateResult() {
  getId("result-calc").innerHTML = eval(getId("input-number").innerHTML);
}

function square(inputan) {
  getId("result-calc").innerHTML = eval(inputan) * eval(inputan);
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%"
      ) {
        alert("invalid entry!");
        return false;
      }
    }
  }
  return true;
}

function deleteChar(inputan) {
  if (inputan.length == 1) {
    getId("input-number").innerHTML = "0";
  } else {
    getId("input-number").innerHTML = inputan.substring(0, inputan.length - 1);
  }
}

function addChar(character) {
  if (getId("input-number").innerHTML == "0")
    getId("input-number").innerHTML = character;
  else getId("input-number").innerHTML += character;
}
