function clearNumber() {
  document.getElementById('input-number').innerHTML = "0";
  document.getElementById('result-calc').innerHTML = "0";
}

function calculateResult() {
  document.getElementById('result-calc').innerHTML = eval(document.getElementById('input-number').innerHTML);
}

function square(inputan) {
  document.getElementById('result-calc').innerHTML = eval(inputan) * eval(inputan)
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." &&
        ch != "(" && ch != ")" && ch != "%") {
        alert("invalid entry!")
        return false
      }
    }
  }
  return true
}

function deleteChar(inputan) {
  document.getElementById('input-number').innerHTML = inputan.substring(0, inputan.length - 1);
}

function addChar(character) {
  if (document.getElementById('input-number').innerHTML == "0")
    document.getElementById('input-number').innerHTML = character
  else
    document.getElementById('input-number').innerHTML += character
}