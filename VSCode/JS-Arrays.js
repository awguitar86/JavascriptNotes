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
