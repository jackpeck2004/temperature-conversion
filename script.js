// Declare variables
var cIn = document.getElementById('celsius');
var fIn = document.getElementById('farenheight');
var btn = document.getElementById('cnvrtBtn');

//Check what to convert
function convertAlgorithm() {
  if(fIn.value == ""){                        //Checks if celsius is inserted (farenheight not inserted)
    convertToFarenheight();
  } else if (fIn.value != "") {               //Checks if farenheight is inserted
    convertToCelsius();
  }
}

function convertToFarenheight() {
  var fOut = cIn.value * 9/5 + 32;
  fIn.value += fOut;
  btn.style.display = "none";
}

function convertToCelsius(){
  var cOut = (fIn.value - 32) * 5 / 9;
  cIn.value += cOut;
  btn.style.display = "none";
}
