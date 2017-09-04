//FUNCTIONS

//Reverse a String
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
reverse("this is my sentence”);

//For Loop Incrementing
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


