//TERNARY

//Convert the following If statement into a Ternary:
if (num > 5) {
 return "greater"
} else {
  return "lesser"
}
function func() {
  var num = 7
  var number = num > 5 ? "greater" : "lesser";
  return number;
}
func()

//Ternary: Check Gender
//Write a ternary that checks the gender variable. If it is "male" return "Mr", otherwise return “Mrs”.
var gender = "male"
function func() {
  var genCheck = gender === "male" ? "Mr" : "Mrs";
  return genCheck;
}
func()

//Ternary: Check Age for Adult
//Write a Ternary that checks if age is greater than or equal to 18. If it is, set adult to true. If not, set it to false.
var age = 17;
var adult;

function func() {
  var adultCheck = age >= 18 ? adult=true : adult=false;
  return adultCheck;//Write your code below here
}
func()

//Ternary: Check true or false
//Write a ternary that checks to see if isGrandma is true or false. If it's true, set allowsKisses to true, 
//otherwise set it to false
var isGrandma = true
var allowsKisses

function func() {
  var grandma = isGrandma === true ? allowsKisses = true : allowsKisses = false;
  return grandma;
}
func()

//Ternary: Check true or false
/*Write a ternary that assigns either true or false to the variable candyEaten, 
based off the variable isDiabetic. If  isDiabetic is true, set candyEaten to false, and vice versa.*/
var isDiabetic = false;
var candyEaten;

function func(){
  var candy = isDiabetic === true ? candyEaten = false : candyEaten = true;
  return candy;
}
func()

//Ternary: Check Positive or Negative
/*Write a function called checkPositive that takes in a number as a parameter.  Inside, write a 
ternary that checks to see if the number is positive or negative. If it's positive, return the 
number with a "+" sign in front of it (3 => +3). If it's negative, just return the number.*/
function checkPositive (num){
  var numCheck = num > 0 ? num = "+" + num : num;
  return numCheck;
}
checkPositive(6);

//Ternary: Check multiple variables
/*Write a ternary that checks headPain and distasteOfMedicine. If headPain is greater than 7 and 
distasteOfMedicine is less than 5, or if headPain is greater than 9, return true. Otherwise, return false*/
var headPain = 8
var distasteOfMedicine = 4

function func() {
  var pain = headPain > 7 && distasteOfMedicine < 5 || headPain > 9 ? true : false;//Write your code below here
  return pain;
}
func()

//Ternary: Check Variables
//Write a ternary that invokes sayHello if goodMood is true, if not, invoke ignore
function sayHello() {
  return "hello"
}
function ignore() {
  return '...'
}

var goodMood = true

function func() {
  var hellNo = goodMood === true ? sayHello() : ignore();//Write your code below here
  return hellNo;
}
func()

//Ternary: Ternary within a Ternary
/*Write a ternary that checks to see if age is greater than 18. If it is less than 18, set 
employed to false. If age is greater than 18, write another ternary inside the first that 
checks to see if canCode is true or false. If it is true, set employed to true, otherwise set it to false*/
var age = 21;
var canCode = true;
var employed;

function func(){
  var person = age > 18 ? canCode === true ? employed = true : employed = false :
  employed=false; 
  return person;
}
func()

//Ternary: Ternary within a Ternary
/*Write a ternary that checks to see if chocolate is true or false. If it is false, set 
candy to be "skittles". If it is true, use another ternary to check to see if caramel is 
true or false. If it is true, set candy to be "twix", otherwise set candy to be "three musketeers".*/
var chocolate = true
var caramel = false
var candy

function func() {
  var yum = chocolate === true ? caramel === true ? candy = "twix" : candy = "three musketeers" :
  candy = "skittles";
  return yum;
}
func()
