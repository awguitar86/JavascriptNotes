//ARRAYS

//Odds and Evens to an Array
/*Write a function called "oddsAndEvens" that loops through a parameter "nums" (an array).
For each number in the given array, if it is even, it is added to the evens array, if the
number is odd, is added to the odds array.*/
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

function oddsAndEvens(nums){
  for (i = 0; i < nums.length; i++){
    if ((nums[i] % 2) === 0){
      evens.push(nums[i]);
    }else {
      odds.push(nums[i]);
    }
  }
  return evens;
}
oddsAndEvens([1,2,3,4,5,6,7,8,9]);

//Even Finder of an Array
/*Create a function called evenFinder that takes an array as an argument and returns
an array with all of the odd numbers removed.*/
function evenFinder(arr){
  arrTwo = [];
  for (i = 0; i < arr.length; i++){
    if ((arr[i] % 2) === 0) {
      arrTwo.push(arr[i]);
    }
  }
  return arrTwo;
}
evenFinder([1,2,-3,4,5,6,7,-8,9])

//Reverse Loop Array
/*Create a function called 'reversedLooper' that will be passed one parameter, which will be an array.
The function will loop through the array backwards and do the following:

	•	Subtract 2 from the last element
	•	Subtract 1 from the second to last element
	•	Subtract 0 from to the third to last element
	•	Add one to the fourth to last element
	•	Add 2 to the fifth to last.
	•	Continue increasing the amount added by 1, until it reaches the front of the array.

Return the modified array when you are done*/
function reversedLooper(arr){
  var x = -2;
  for (var i = arr.length-1; i >= 0; i--){
    arr[i] += x;
    x++;
  }
  return arr;
}
reversedLooper([100, 50, 39, 300, 4]);


//Find Element in Array
/*Write a function called 'findInArray' that takes in two parameters.
The first parameter represents the array to be searched and the second parameter represents the value to be searched for.
Return true if the value exists in the array. If it doesn't exist return false.*/

function findInArray(arr, num){
  var answer = false;
    for ( i = 0; i<arr.length; i++){
      if (arr[i] === num){
        answer = true;
        break;
     }
  }
  return answer;
}
findInArray([1,2,3,4,5,6], 10);


//Return Longer Array of Two Arrays
/*You are provided some code that adds a set of random numbers to both arr1 and arr2.
Write a function called 'longer' that is given arr1 and arr2 as its only arguments and returns the array that is longer.*/
var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
function longer(arr1, arr2){
  if (arr1.length > arr2.length){
  return arr1;
}else{
  return arr2;
}
}
var longerArray = longer(arr1, arr2);


//Remove and Add Item to Array
/*Write a function called removeItem with two parameters.
The first parameter is an array called myGroceryList, and the second is an item to remove from myGroceryList.
If the second argument (the item to remove) matches an item in myGroceryList, remove that item from your grocery list
Return the new, updated grocery list.

Once you do that, write another function called addItem with two parameters.
The first is myGroceryList and the second is an item to add to your grocery list.
If the item is already in the grocery list, do not add it a second time.
If it's not in the list, then add it to the end of the array.
Return the new list.*/
function removeItem(myGroceryList, item){
  var index = myGroceryList.indexOf(item);
  if (index > -1){
    myGroceryList.splice(index, 1);
  }
  return myGroceryList;
}

function addItem(myGroceryList, item){
  var index = myGroceryList.indexOf(item);
  if (index === -1){
  myGroceryList.push(item);
  }
  return myGroceryList;
}

removeItem(["flour", "sugar", "apples"], "flour");
addItem(["flour", "sugar", "apples"], "cake");

//Or you can do it this way
function removeItem (myGroceryList, item) {
  for(var i = 0; i < myGroceryList.length; i++){
    if(myGroceryList[i] === item) {
      myGroceryList.splice(i, 1);
    }
  }
  return myGroceryList;
}
function addItem (myGroceryList, item) {
  for(var i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList.indexOf(item) < 0) {  //indexOf return -1 if the value in the array is not found. It returns 0 if it is found.
      myGroceryList.push(item);
    }
  }
  return myGroceryList;
}
removeItem (['milk', 'bread', 'butter', 'cereal'], 'milk');
addItem (['milk', 'bread', 'butter', 'cereal'], 'candy');


//Add Ten to given numbers in an Array
/*Write a function called addTen that is given 'numbers' as it's only argument and returns a
new array after adding ten to each item in numbers.
*Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]*/
var numbers = [5, '9', 16, 19, '25', '34', 48];
function addTen(numbers){
  var answers = [];
  for (var i = 0; i < numbers.length; i++){
    answers.push(+numbers[i] + 10);
  }
  return answers;
}
addTen(numbers);


//Arrays: Even Finder by removing odds in array
/*Write a function named evenFinder that is given nums as it's only argument and removes
all values that aren't even from the given array.*/
var nums = [1,2,3,6,22,98,45,23,22,12];
function evenFinder(nums){
  for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2 !== 0){
      nums.splice(i, 1);
      i = i-1;
    }
  }
  return nums;
}
evenFinder(nums);

//Array: Using array.map to change index property
/*This is another way to find the index of a property in an array of objects.
The array parameter is an array of objects. Using the array parameter and the
index variable, update the object email address (.email or ["email"]) to be the newEmail parameter.*/
function changeEmail(array, value, newEmail) {
    var index = array.map(function(e) {
        return e.userId;
    }).indexOf(value);

    array[index].email= newEmail;// Code here

    return array;
}

//ARRAY: Fill empty array with strings
/*Instructions
For loops are especially useful when combined with arrays.
Create an empty array called myArray
Then create a function called arrayFiller that takes one parameter (the parameter will be a number).
hen fill myArray with the string "item" the number of times indicated by the parameter.
Return the filled array.
For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] . */
var myArray = [];
function arrayFiller (num) {
  for(var i = 0; i < num; i++) {
    myArray.push('item');
  }
  return myArray;
}
arrayFiller(3);

//ARRAY: Create Array and Fill with Numbers
/*Instructions
Write a function called 'maker' that creates an array and fills that array with numbers 1 to 25, then returns the array.
*/
function maker() {
  var arr = [];
  for(var i = 0; i < 25; i++){
    arr[i] = i + 1;
  }
    return arr;
}
maker();

//ARRAY: Increment numbers in array by 5
/*Instructions
Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5
and then return the updated array.*/
var numbers = [10, 20, 30, 40, 50, 60];
function looper(numbers) {
  newNum = [];
  for(var i = 0; i < numbers.length; i++) {
    newNum.push(+numbers[i] + 5);  //the + before numbers[i] makes a string into a number, if a number in the array passed in is a string.
  }
  return newNum;
}
looper(numbers);


/* backWards Array */
//Below we have a function that will loop over an array in reverse.
//What you need to do is add the index to the newArray on every iteration
function backWards(arr) {
  var newArray = [];
     for (var i = arr.length - 1; i >= 0; i--) {

        newArray.push(i);// Code here
     }
  return newArray;
 }

backWards([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


/* findInArray */
//Below we have a  function called 'findInArray' that takes in two parameters, the first representing the
//array to be searched and the second representing the value to be searched for. Return true if the array has the value
function findInArray(arr, value) {
  answer = false;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === value){
        answer = true;
        break;
      }
  }// Code Here
return answer;
}

findInArray([1, 2, 3, 4, 5], 6);


/* Parse string to integer and addTen */
//This problem is the same as the previous problem, the only difference is that we have both strings and integers in
//our numbers array. You will need to parse the strings into integers before you add ten.
function addTen(arr) {
  newArr = [];
  for(var i = 0; i < arr.length; i++) {
    var newItem = parseInt(arr[i]) + 10;
    newArr.push(newItem);
  }
  return newArr;
}
addTen([1, "2", 3, 4, "5", "6", 7, "8"]);

/* deleteUser object from array of objects */
//Imagine a world where you have an array of user objects, and you need to delete one of those users.
//Inside your if statement, remove the object from the array of objects.
function deleteUser(array, property, value) {
  for(var i = 0; i < array.length; i++) {
      if(array[i][property] === value) {
          array.splice( i, 1);// Code Here
      }
  }
 return array;
}
deleteUser([{name: "jon", age: 40}, {name: "Tim", age: 50}, {name: "James", age: 21}], "age", 21);


/* Update User Object Email */
//Inside your if statement, update the user's email property to the newEmail being passed in.
function updateUserEmail(array, property, value, newEmail) {
  for(var i = 0; i < array.length; i++) {
      if(array[i][property] === value) {
        array[i][property] = newEmail;// Code Here
      }
  }
  return array;
}
updateUserEmail([
    {name: "Jon", email: "jon@gmail.com"},
    {name: "Tim", email: "tim@gmail.com"},
    {name: "George", email: "george@gmail.com"}],
    "email",
    "tim@gmail.com",
    "timtimtimmy@gmail.com");


/* Change Password in array of Objects */
//On each iteration, check the array index for a property that is equal to the value being passed in.
//If that condition is met, change the object's password property value to equal newPassword.
function changePassword(array, property, value, newPassword) {
  for(var i = 0; i < array.length; i++ ) {
      if(array[i][property] === value){
        array[i][property] = newPassword;
      }// Code Here
  }
  return array;
}
changePassword(
  [{name: "jon", password: "12345"},{name: "tim", password: "98765"},],
  "password",
  "12345",
  "coolBeans"
  );


/* Update Email property in Array of Objects */
//This is another way to find the index of a property in an array of objects.
//The array parameter is an array of objects.
//Using the array parameter and the index variable, update the object email address (.email or ["email"]) to be the newEmail parameter.




/* RETURN DUPLICATES IN AN ARRAY */
//Write a function that takes two arrays and returns the matching numbers in both of those arrays.
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 5, 6];

const both = (arr1, arr2) => {
  const arr3 = arr1.concat(arr2);
  const newArr = [];
  arr3.forEach((elem, index) => {
    if(arr3.indexOf(elem, index + 1) > -1) {
      newArr.push(elem);
    }
  })
  return newArr;
}
both(arr1, arr2);


/* DESCENDING ORDER */
//Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.
var number = 1234567890;

function descendingOrder(n){
  var arr = n.toString().split('');
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(parseInt(arr[i]));
  }
  var sorted = newArr.sort((a,b) => b-a);
  var sorted2 = sorted.join('');
  return parseInt(sorted2);
}
descendingOrder(number);


/* INCREMENT A NUMBER  */
//Create a function called myLoop that takes in two parameters.
//The first parameter should represent a starting number and the second is how many times the starting number should be incremented.
//Use a for loop to increment the first parameter a number of times equal to the second parameter.  Then return the modified number.
//For example, if the first parameter is 3 and the second parameter is 4, the number three should be increased by one each time the
//for loop runs, and the for loop should run 4 times. This should return the number 7
function myLoop(num, inc) {
  for(var i = 0; i < inc; i++) {
    num++;
  }
  return num;
}
myLoop(5, 10);

