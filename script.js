//SCRIPT GOES HERE
function randomNumber (max, min) {
 return (Math.floor(Math.random()*(max-min))+1)+min;   
}

function onClick() {
   var max = parseInt(document.getElementById("maxInput").value);
   var min = parseInt(document.getElementById("minInput").value);
   var randomNumber = randomNumber(max,min);
   document.getElementById("output").innerHTML = randomNumber;
}
