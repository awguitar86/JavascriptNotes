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


