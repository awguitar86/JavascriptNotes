// FUNCTIONS //

//REVERSE A STRING
/*Write a function called 'reverse' with one parameter (string) 
The function should return that string after it's been reversed.
For example, if the passed in string is "this is my sentence", the function should return "ecnetnes ym si siht”*/
function reverse(string){
  var newStr = "";
  for (var i = string.length - 1; i >= 0; i--){
    newStr += string[i];
  }
  return newStr;
}
reverse('this is my sentence');

// * Or you can do it this way *
// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.
function reverse (string) {
  return string.split("").reverse().join("");
}
reverse("james austin");


// FOR LOOP INCREMENTING
/*•	Create a function called myLoop that takes in two parameters. 
•	The first parameter should represent a starting number and the second is how many times the starting number should be incremented.  
•	Use a for loop to increment the first parameter a number of times equal to the second parameter. Then return the modified number. 
For example, if the first parameter is 3 and the second parameter is 4, the number three should be increased by one each time the 
for loop runs, and the for loop should run 4 times. This should return the number 7*/
function myLoop (num, inc){
for (var i=0; i<inc; i++){
num+=1;
}
return num;
}
myLoop(60, 100);  //returns 160

/*Create a function called exponent that takes in two parameters. The first parameter should represent a number to be 
multiplied against itself and the second parameter should represent how many times it is multiplied by itself. 
The function should return the result of this operation. */
function exponent(num, inc) {
  var answer = num;
  for(var i = 1; i < inc; i++) {
    answer *= num;
  }
  return answer;
}
exponent(5, 3); //returns 125


//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
  var  string = '';
  for(var i = 0; i < str.length; i++) {
     string = string + str[i] + str[i];
  }
  return string;
 }
 doubleChar("CoolBeans");
//Or do it this way
const doubleChar = (str) => str.split("").map(c => c + c).join("");

doubleChar('coolio!');


 
/* REMOVE WHITE SPACE IN STRING */
//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  return x.replace(/\s/g, '');
}
noSpace('cool beans'); //returns 'coolbeans'

//Or you can do it this way
function noSpace(x){
  return x.split(' ').join('');
}
noSpace('coo lio dude'); //return 'cooliodude'


/* CHANGE A NUMBER INTO A STRING */
function numberToString(num) {
  var numParse = num.toString();
  return numParse;
}
numberToString(2849);

//Or do it this way
var numberToString = (num) => num.toString();

numberToString(1234);

