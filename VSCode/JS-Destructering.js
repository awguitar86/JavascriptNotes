//OBJECT DESTRUCTURING

/*Return Truthy Value in Destructured Object
Create a function called truthyFalsy that takes a destructured object as it's parameter.
The properties of this object will be number and string. 
One of these properties will be truthy, the other will be falsy. Return the value that is truthy.*/ 
function truthyFalsy(obj){
    return obj.number || obj.string;
}
truthyFalsy({string:"Hello", number: 0});

//Destructured Object as Parameter
/*Write a function called greeting. Instead of giving it an object parameter, give it a destructured object 
as it's parameter. The properties of this object will be name and title.
Return from this function a greeting sentence that should say "Hello, <title> <name>!". 
Title and name in this sentence should be replaced with the values of the destructured object variables.*/
function greeting (name, title) {
  name = "Henry";
  title = "Mr. ";
  return "Hello, " + title + name + "!";
}
greeting();

//Adding Destructured Objects
/*Create a function called zooAnimals that will take an object parameter. 
The object passed to this function will have the property names lion, tiger, and bear.
The values of these properties will be a number representing the count of that animal in the zoo. 
Using object destructuring, return the value of all of these properties combined.*/
var obj = {lion:3 , tiger:4 , bear:5 };

var zooAnimals = (obj) => {
  return obj.lion + obj.tiger + obj.bear;
};
zooAnimals(obj);


//Subtract Destructured Object
/*Write a function called subtraction with an object parameter. The object passed in this function 
will have the property names num1 and num2. Use object destructuring to assign the values of these 
properties to new variables. Subtract num1 from num2 and return the result.*/
var nums = {num1: 45 , num2: 40};

var subtraction = (obj) => {
  var {num1, num2} = obj;
  var result = num1 - num2;
  return result;
}
subtraction(nums);

//Destructuring: Unpacking Properties from Object
/*Object destructuring allows you to "unpack" properties from objects and assign them to variables.
Here you are given the object animalCount. Destructure this object so that you have 3 distinct 
variables with the values of the matching properties from animalCount.*/
var animalCount = {
  cats: 2,
  dogs: 5,
  mice: 0
}
var {cats, dogs, mice} = animalCount;
console.log(cats, dogs, mice);

//Destructuring: Assign values to new values
/*Create an object named languages. Give it the properties 'French', 'English' and 'Spanish'. 
Give these properties the value true if you speak the language, false if you do not.
Use destructuring to assign the values of these properties to new variables.*/
var languages = {
  French: false, 
  English: true, 
  Spanish:false
};
var {French, English, Spanish} = languages;

console.log(French, English, Spanish);

//Destructuring with Object Literal
/*Now that you have some experience with destructuring, we will take it one step further. 
Instead of using a variable to assign values, we will use an object literal.
Create an object literal to assign the variables students, mentors and instructors a value 
through destructuring. Set the value of students to be 24, mentors to be 3, and instructors to be 5.*/
var {students, mentors, instructors} = {students:24, mentors:3, instructors:5};

console.log(students, mentors, instructors);
