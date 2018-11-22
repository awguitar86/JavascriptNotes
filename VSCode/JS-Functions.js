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


/* REVERSE WORDS IN STRING BUT NOT WHOLE STRING */
//Write a reverseWords function that accepts a string as a parameter, and reverses each word in the string.
//Any spaces in the string should be retained.
function reverseWords(str) {
  return str.split(' ').map((word) => {
    return word.split('').reverse().join('')
  }).join(' ');
}
reverseWords("May the force be with you");


/* CHECK IF STRING IS AN ISOGRAM */
//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
  var strCheck = str.toLowerCase();
  for(var i = 0; i < strCheck.length; i++){
    for(var x = i + 1; x < strCheck.length; x++){
      if(strCheck[i] === strCheck[x]){
        return false;
      }
    }
  }
  return true;
}
isIsogram("Amazing");


/* DOUBLE NUMBERS, AND REPEAT STRINGS */
// Write a function  called doubleTheFun that takes 1 parameter. It should double numbers, and
// repeats strings. example 4->8, 2.5->5, 'Awesome'->'AwesomeAwesome'
function doubleTheFun(param){
	if(isNaN(param)){
		return param.repeat(2);
	}else{
		return param * 2;
	}
}

/* Is this a triangle? */
//Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle
//can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a,b,c){
  if(a+b > c && b+c > a && c+a > b){
    return true;
  }
  else{
     return false;
   }
}
isTriangle(1, 2, 2);

/* Determine is square number */
// Given an integral number, determine if it's a square number
var isSquare = function(n){
  if(Math.sqrt(n) % 1 === 0){
    return true;
  }
    return false; // fix me
}
isSquare(26);


/* Dubstep */
//The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
//Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
function songDecoder(song){
  let arr = song.split("WUB");
  let leftOver = [];
  let answer = '';
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== ""){
      leftOver.push(arr[i]);
    }
  }
  answer = leftOver.join(' ');
  return answer;
}
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");


/* DNA */
// in the dna string, replace A with T, T with A, G with C, and C with G.
function DNAStrand(dna){
  let answer = '';
  for(let i = 0; i < dna.length; i++){
    switch(dna[i]){
      case 'A':
        answer += 'T';
        break;
      case 'T':
        answer += 'A';
        break;
      case 'G':
        answer += 'C';
        break;
      case 'C':
        answer += 'G';
        break;
    }
  }
  return answer;
}
DNAStrand("ATTGC");
/* OR */
var pairs = {
  A:'T',
  T:'A',
  C:'G',
  G:'C'
};

function DNAStrand(dna){
  return dna.split('').map( letter => {
    return pairs[letter]
  }).join('');
}
DNAStrand('TAACG');


/* Find Unique Number */
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains more than 3 numbers.
function findUniq(arr) {
  let sortArr = arr.sort();
  let num1 = sortArr[0];
  let num2 = sortArr[sortArr.length - 1];

  if(sortArr[1] == num1){
    return num2;
  }else {
    return num1;
  }
 }
 findUniq([1, 1, 5, 1, 1, 1]);
/* OR */
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
findUniq([1, 1, 6]);


/* Checking Coupon Code */
//Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
//A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let cDate = Date.parse(currentDate);
  let xDate = Date.parse(expirationDate);
  if(enteredCode === correctCode && xDate >= cDate){
    return true;
  }
  else {
    return false;
  }
}


/* Sort Array by String Length */
//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
//ordered from shortest to longest.
function sortByLength (array) {
  array.sort(function(a,b) {
    return a.length - b.length;
  })
  return array;
};
sortByLength(['awesome', 'cool', 'it', 'fantastic', 'rad']);


let array1 = [{_id: 1 }, {_id: 2 }, {_id: 3 }, {_id: 4 }];
let array2 = [{_id: 1}, {_id:2 }, {_id: 3}, {_id:4}, {_id: 5}];

function arrayCheck (arr1, arr2) {
  for(let i = 0; i < arr1.length; i++){
    for(let z = 0; z < arr2.length; z++){
      if( arr2[z].id === arr1[i].id ){
          return ( <div>match</div>);
      }
      else {
        return (<div> no match </div>);
      }
    }
  }
}


/* IS ANAGRAM */
// function isAnagram(str1, str2){
//  return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

function isAnagram(str1, str2){
	let dictionary = {};
  let answer;
  for(let i = 0; i < str1.length; i++){ //i=0
  		if(dictionary[str1[i]]) {
      	dictionary[str1[i]]++;
      }
      else {
      	dictionary[str1[i]] = 1; // dictionary[t] = 1 -> dictionary = {'t':1}
      }
  }
  console.log(dictionary);
  for(let i = 0; i < str2.length; i++){
    if(dictionary[str2[i]]){
      dictionary[str2[i]]--;
    }
  }
  console.log(dictionary);
  for(let x in dictionary){
    if(dictionary[x] === 0){
      delete dictionary[x];
    }
  }
  console.log(dictionary);
    if(Object.keys(dictionary).length === 0){
      answer = true;
    }
    else {
      answer = false;
    }
  return answer;
}
isAnagram("test", "stet");
  // loop over string2 and decrement the values in dictionary1
  		//if value === 0 -> delete it
  // check that no keys in the dictionary


/* SUM OF TWO LOWEST POSITIVE INTEGERS */
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
var arr = [19, 5, 42, 2, 77];
function sumTwoSmallestNumbers(numbers) {
    let result = numbers.sort((a, b) => a - b);
    return result[0] + result[1];
};
sumTwoSmallestNumbers(arr);


/* COUNT LOST SHEEP */
// Every week (Friday and Saturday night), the farmer and his son count amount of sheep returned to the yard of their farm.
// They count sheep on Friday night, the same goes for Saturday (suppose that sheep returned on Friday are not feeding back on hills on Saturday).
// As sheep are not coming in one flock, you will be given two arrays (one for each night) representing number of sheep as they were returning to the yard during the evenings (entries are positive ints, higher than zero).
// Farmer and his son know the total amount of their sheep, you will be given this number as third parameter.
// Your goal is to calculate the amount of sheep lost (not returned) to the farm after Saturday night counting.
// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
function lostSheep(friday,saturday,total){
  return friday.concat(saturday).reduce((s,l)=>s-l,total)
}
// OR
function lostSheep(friday,saturday,total){
  if(friday.length > 0){
    friday = friday.reduce(getSum);
  }
  if(saturday.length > 0){
    saturday = saturday.reduce(getSum);
  }
  return total - (friday + saturday);
}