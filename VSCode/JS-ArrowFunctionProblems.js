//ARROW FUNCTIONS

//Arrow Function: Greater Than 20
//Create a one line ES6 arrow function called isGreaterThanTwenty that will take in a parameter and return true if the parameter is greater than 20. The function should return false otherwise.
var isGreaterThanTwenty = (num) => {
  var answer = num > 20 ? true : false;
  return answer;
  } 
isGreaterThanTwenty(25);

//Arrow Function: Return the number 7
//Create a one line ES6 arrow function called seven that will return the number 7.
var seven = () => {
  return 7;
}
seven();

//Arrow Function: Re-write ES5 functions in to arrow functions 
//Re-write the ES5 functions provided as ES6 arrow functions. Name your functions the same as the ES5 versions provided.
	//•	You should not use the ES5 function declaration syntax in your final solution.
	//•	Be sure to call the functions the same name as in the ES5 syntax functions.
// Function 1
// function add(num1, num2){
//   return num1 + num2;
// }
// Your Solution to Function 1 Here
		var add = (num1, num2) => {
		  return num1 + num2;
		}
// Function 2
// function subtract(num1, num2){
//   return num1 - num2;
// }
// Your Solution to Function 2 Here
		var subtract = (num1, num2) => {
 		 return num1 - num2;
		}
// Function 3
// function double(num){
//   return num * 2
// }
// Your solution to Function 3 Here
		var double = (num) => {
  		return num * 2;

//Arrow Function: Multiply two parameters
//Create an ES6 arrow function called multiply that will take in two parameters and return the product of the two parameters.
var multiply = (num1, num2) => {
  return num1 * num2;
}
multiply(4, 6);


//Arrow Function: Greater than 20 function
//Create an ES6 multi-line arrow function called isGreaterThanTwenty that will take in a number parameters and return true if the parameter is greater than twenty. The function should return false otherwise. 
var isGreaterThanTwenty = (num) => {
  if (num > 21){
    return true;
  }else {
    return false;
  }
}
isGreaterThanTwenty(25);

//Arrow Function: Add function
//Create an ES6 arrow function called add that will take in two parameters, both numbers. The function will need to add the two parameters passed in. 
var add = (num1, num2) => {
  return num1 + num2;
}
add(200, 400);

//Arrow Function: Filter with arrow function
//Use the built in filter method to filter over the jobs array of objects and return the object of the person with a job as a programmer. Make sure to use the arrow function in conjunction with the filter method.
var jobs = [{receptionist: "James"}, 
            {programmer: "Steve"},
            {designer: "Alicia"}];

var solution = jobs.filter(obj => obj.programmer);

//Arrow Function: Problem 8
//Write a multi-line arrow function called gemInfo that takes in three parameters, a gem type, gem size, and  a gem color. Have the gemInfo function return an abject with the values of those parameters set to these three keys, gemType, gemSize, gemWeight.
var gemInfo = (type, size, color) => {
  return {gemType: type, gemSize: size, gemWeight: color};
}
gemInfo("crystal", 10, “blue");


//Arrow Function: Problem 9-return even numbers array
//Inside the evens function use the built in filter method to filter over the array called numbers and return a new array with only the even numbers. Make sure to use the arrow function combined with the filter method.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var evens = (arr) => numbers.filter(nums => nums % 2 === 0);

evens(numbers);

//Arrow Function: Problem 10 - return strings with first letter A with .filter method
//Inside the startWithLetterA function use the built in filter method to filter over the array called strings and return a new array with only the strings that start with a letter "a". Make sure to use the arrow function combined with the filter method. 
var strings = ["cool", "awesome", "amazaing", "rad", "sweet"];

var startWithLetterA = (arr) => strings.filter(string => string[0] === "a");

startWithLetterA(strings);

//Arrow Function: Problem 11 - Return new array with .map method 
//Inside the formalGreeting function use the built in .map method to map over the array called names and return a new array with "Hello, " appended to the beginning of each name. Make sure to use the arrow function combined with the filter method. 
var names = ["Ted", "George", "Caroline", "Harold"];

var formalGreeting = (arr) => names.map(greet => "Hello, " + greet);

formalGreeting(names);

//Arrow Function: Problem 11 - Return new array with .reduce method
//Inside the productOfArray function use the built in reduce method to loop over the array called numbers and return the product of all the numbers in the array. Make sure to use the arrow function combined with the filter method.
var numbers = [1, 2, 3, 4, 5];

var productOfArray = (arr) => numbers.reduce((total, num) => total * num);

productOfArray(numbers);
