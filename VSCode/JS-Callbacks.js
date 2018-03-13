//CALLBACK FUNCTIONS

//Callback Problem 1
/*Create a function called outerFn, that takes in a callback as a parameter, and then returns that callback invoked.
To see it working, invoke outerFn at the bottom, passing in the InnerFn as the callback. You should now see
"The innerFn is a callback!" in the console.*/
var outerFn = (callback) => {
  return callback();
}
var innerFn = () => {
  return "The innerFn is a callback!";
};

outerFn(innerFn); //returns “The innerFn is a callback!”

//Callback Problem 2
/*Create a function called fullName, that takes in three parameters: firstName, lastName, and a callback.
The fullName function should return the callback, passing in firstName and lastName as parameters.
To test, invoke fullName with your first name, last name and the welcomeMessage function as arguments.*/
var fullName = (firstName, lastName, callback) => {
  return callback(firstName, lastName);
}
var welcomeMessage = (first, last) => {
  return `Welcome to DevMountain, ${first} ${last}!`
}

fullName("Austin", "Wright", welcomeMessage); //returns “Welcome to DevMountain, Austin Wright!”


//Callback Problem 3
/*Create a function called canDrink that will execute the proper callback depending on the passed in age.
	•	If the age is 21 or greater, return drinkAlcohol
	•	If the age is below 21, return drinkSoda*/
var canDrink = (age) => {
  if (age >= 21){
    return drinkAlcohol();
  }else{
    return drinkSoda();
  }
}
var drinkAlcohol = () => {
  return "Drink responsibly!"
}
var drinkSoda = () => {
  return "Come back when you are legally allowed a drink!"
}
canDrink(23);
// Or do it this way
var drinkSoda = () => {
  return "Come back when you are legally allowed a drink!"
}
var drinkAlcohol = () => {
  return "Drink responsibly!"
}
var canDrink = (age, cb1, cb2) => {
  var oldEnough = age >= 21 ? cb2() : cb1();
  return oldEnough;
}
canDrink(22, drinkSoda, drinkAlcohol);

//Callback Problem 4
/*Write two functions, one called add and one called multiply, that each takes in two numbers and returns the appropriate new value.
Write a function called math that takes in two numbers, and a function 'operator' as parameters.
	•	This function should return a callback invoked with the appropriate arguments.*/
var add = (num1, num2) => {
  return num1 + num2;
}
var multiply = (num1, num2) => {
  return num1 * num2;
}
var math = (num1, num2, callback) => {
  return callback(num1, num2);
}
math(5, 6, add);


//Callback Problem 5
/*For this problem, we will be re-creating the functionality of the .filter function.
Begin by creating a checkAge function.
	•	It needs to take in an array, loop through it, and return a new array containing all the numbers greater than 18.*/
var checkAge = (arr) => {
  var newArr = [ ];
  for(var i = 0; i < arr.length; i++){
    if (arr[i] > 18){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
var ages = [3, 32, 33, 16, 8, 40, 12, 19];

var filter = (arr, cb) => {
  return cb(arr);
}
filter(ages,checkAge);


/* SIMPLE CALLBACK */
// Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla)
// with the argument string(back) + ' back'."
// example - If I call you with 'Give it' you should invoke holla with 'Give it back'
function callerBack(func, str){
	return func(str + ' back');
}

function holla(str){
	return str;
}


