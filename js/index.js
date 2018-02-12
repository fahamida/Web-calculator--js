
var a = document.getElementById('display');

 //function when numbers and basic operations buttons are pressed 
 function addToDisplay(x){
   a.value += x;
   if (x === 'AC'){
     a.value ='';
   }
 } 
 //function when = button is pressed 
function answer(){
 x = a.value;
  x = eval(x);
  a.value=x;
}
 //function to get the square of a number
function square(x){
  x = a.value;
  a.value = eval(Math.pow(x, 2));
   
}
 //function to get the square root of a number
function squareRoot(x){
  x = a.value;
  x = eval(Math.sqrt(x));
  a.value = x;
}
 //function to get a percentage
function toPercent(x){
  x = a.value;
  x = eval(x/100);
  a.value = x;
}
//function when DEL button is pressed to go back one number 
function backspace(){
  var b = a.value;
  var bLength = b.length-1;
  a.value = b.substring(0,bLength); 
}

 //function to get pi 
function getPi(){
  a.value = Math.PI;
}