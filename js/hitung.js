function clearNumber() {
  console.log("clearNumber")
  document.getElementById('input-number').innerHTML = "";
  document.getElementById('result-calc').innerHTML = "";
}

function calculateResult() {
  var inputan = document.getElementById('input-number').innerHTML;
  console.log("inputan calculateResult " + document.getElementById('input-number').innerHTML);
  document.getElementById('result-calc').innerHTML = eval(inputan.replace( % , "/100"));
}

function deleteChar(inputan) {
  document.getElementById('input-number').innerHTML = inputan.substring(0, inputan.length - 1);
}