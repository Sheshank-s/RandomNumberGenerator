//SCRIPT GOES HERE
function randomNumber (max, min) {
 return (Math.floor(Math.random()*(max-min))+1)+min;   
}

function onClick() {
   var max = document.getElementById("maxInput").value;
   var min = document.getElementById("min").value;
   alert(randomNumber(max,min));
}
