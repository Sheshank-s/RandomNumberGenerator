//SCRIPT GOES HERE
function randomNumber (max, min) {
 return (Math.floor(Math.random()*(max-min))+1)+min;   
}

function onClick() {
 
 document.getElementById("output").style.cssText = "font-size:1px;transition: all 0.5s ease;";
   var max = parseInt(document.getElementById("maxInput").value);
   var min = parseInt(document.getElementById("minInput").value);
   var rand = randomNumber(max,min);
   document.getElementById("output").innerHTML = rand;
 document.getElementById("output").style.cssText = "font-size:30px;transition: all 1s ease;";
}
