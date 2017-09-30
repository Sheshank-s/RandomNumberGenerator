//SCRIPT GOES HERE
function randomNumber (max, min) {
 return (Math.floor(Math.random()*(max-min))+1)+min;   
}

function onClick() {
   var max = document.getElementById("maxInput").value;
   var min = document.getElementById("minInput").value;
   console.log(max);
   console.log(min);
   alert(randomNumber(max,min));
}
