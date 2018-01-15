//OBJECTS

//Person Object With Name and Age Property
/*Create a function called getPerson. 
Inside that function, create a person object with a name property (string) and an age property (number) and return it.*/
function getPerson(){
  var person = {name:"John", age:30};
  return person;
}
getPerson();

//Car object with Make and Model Properties
/*Create a newCar function that takes in two parameters: make and model.  
Using those parameters, create a car object, give it make and model properties, and return it from the function*/
function newCar(make, model){
  var car = {make: make, model: model};
  return car;
}
newCar("Ford", "F-150");

//Person Object that has Name and Age Property
/*Create a function called canDrive that takes in a person object that has a name and an age property. 
If the person's age is greater than or equal to 16 then return a string concatenating their name with the 
string " is old enough to drive." If the person's age is less than 16 then return a string concatenating 
their name with the string " is not old enough to drive.”*/
function canDrive(person){
  if (person.age >= 16){
    return person.name + " is old enough to drive.";
  }if (person.age < 16) {
    return person.name + " is not old enough to drive.";
  }
}
canDrive({name:"Howard", age:15});
//Or do it this way with a ternary
function canDrive(person) {
  var oldEnough = person.age >= 16 ? person.name + " is old enough to drive." : person.name + " is not old enough to drive.";
  return oldEnough;
}
canDrive({name:"Ted", age: 32});


//Change Email Function with User Object
/*Create a function called changeEmail that takes in a user object and a newEmail string. 
Replace the user's current email address (assigned to the email property) with the newEmail 
string, then return the updated user object.*/
var user = {name: "Rumpelstiltskin", email: "guessmyname@gmail.com"};
function changeEmail (user, newEmail) {
 user.email = newEmail;
 return user;
}
changeEmail(user, "rumpelstiltskin@gmail.com");
//Or do it this way
function changeEmail(user, newEmail) {
  user.email = newEmail;
  return user;
}
changeEmail({name:"Giff", email:'giffygiff@gmail.com'}, 'gifford@gmail.com');

//Change User Object Role in a Function
/*Create a function called addRole that takes in a user object and a string. 
This string will represent the user's new role in the system (i.e. admin, 
creator, editor, visitor). Create a new property on the user object called 
"role" and assign the passed in string to it, then return the updated user object.*/
var user = {name:"Peter Pan", role:"boy"}
function addRole(user, string){
  user.role = string;
  return user;
}
addRole(user, "hero");
//Or do it this way and it will automatically add the role property to the object.
function addRole(user, string){
  user.role = string;
  return user;
}
addRole({name:"Tobias"}, "musician");

//Remove Role Object Property with Function
/*Create a function called removeRole that takes in a user object. 
Delete the user's role property and return the updated user.*/
var user = {name:"Bruce Wayne", role:"Batman"};
function removeRole(user){
  delete user.role;
  return user;
}
removeRole(user);

//Change all Object Property Values to Unknown with Loop in a Function
/*Create a function called unknownPerson that takes in a person object. 
This person object will have properties such as name, age, gender, etc. 
Loop through all the properties of the object and set each value to "Unknown", then return the object. 
For example, if "person" is {name: "Dolph L.", age: 33} then the function would return {name: "Unknown", age: “Unknown"}.*/
var person = {name:"Sheldon Cooper", age:35, gender: "male", job:"Physicist"}
function unknownPerson(person){
  for (var prop in person){ // for/in loops through object 
    if (person.hasOwnProperty(prop)){ // hasOwnProperty method returns a boolean indicating whether the object has the specified property as own (not inherited) property.
      person[prop] = "Unknown";
    }
  }
  return person;
}
unknownPerson(person);

//Truthy Object
/*Create a function called truthyObject that takes in a user object. 
This function should loop through the user object checking to make sure that each of its values is truthy. 
If a value is not truthy then remove it from the object. 
Return the updated object after looping through it.*/
function truthyObject (user){
  for (const prop in user){
    if (!user[prop]){ //need to use brackets when doing this type of function and if statement.
      delete user[prop];
      }
  }
  return user;
}
truthyObject({name:"Dwight", age:45, job:false});

//Loop Through Object and Change values
/*Below we have a function called objectLooper that will take a number object and loop over it. 
You need to change the value of each property to 0.*/
var number = {
    age: 30,
    score: 100,
    length: 12,
    year: 2016
}
function objectLooper(number) {
    for(var key in number) {
       if (number.hasOwnProperty(key)){
         number[key] = 0;
    }
}
 return number;
}
objectLooper(number);


//Object: Check and Change each Value
//Check each value and if value is greater than 3000000, if true, set it to 0.
var state = {
    utah: 2942902,
    texas: 26956958,
    california: 38802500
};
function stateLooper(arr) {
    for(var key in arr) {
      if (arr[key] > 3000000){
        arr[key] = 0;
      }
    }
  return arr;
}
stateLooper(state);


//Object: If false value remove it
//If the value is falsy remove it. Once all the falsy value are removed return the obj.
var user = {
    name: 'Sally Rally',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'SallyRally801',
    age: 0

};
function cleanUser(obj) {
	for (var key in obj){
	  if (!obj[key]){
	    delete obj[key];
	  }
	}
	return obj;
}
cleanUser(user);


//Object: Change values of object elements
/*Change the value of name to Ryan, change the value of pwHash to 43df90w_h and change the value of 
username to ryanleeeallred. After you have updated all the values return the new object*/
var user = {
    name: 'Sally Rally',
    pwHash: 'U+Ldlngx2BYQk',
    username: 'SallyRally801'
};
function personalize(user) {
   user.name = "Ryan";
   user.pwHash = "43df90w_h";
   user.username = "ryanleeeallred"; 
   return user;
}
personalize(user);


//Object: Update Email property
//Find and update the email property then return the new email.
var obj = {
  email: "cool@gmail.com"
};
function updateEmail(obj, str) {
    obj.email = str;
    return obj.email
}
updateEmail(obj, 'awesome@gmail.com');


//Object: Check if person object is old enough
/*Write a function called isOldEnough that takes a person obj and checks if the person is old enough to enter the club. 
 If they are 21 or older return true else return false.  The person's age can be found on the age property/key.*/
var person = {age: 20};
function isOldEnough (person){
  for (var key in person){
    if (person[key] >= 21){
      return true;
    }else{
      return false;
    }
}
  return person;
}
isOldEnough(person);


//Object: add role to user object
/*Create a function called addRole that takes in a user object and a string. 
This string will represent the user's new role in the system (i.e. admin, creator, editor, visitor).
Create a new property on the user object called "role" and assign the passed in string to it, then 
return the updated obj.role. Make sure you only return the obj.role otherwise the test will fail.*/
	var obj = {name: "john", age: 30};

	function addRole (obj, str){
  		obj.role = str;
  		return obj.role;
	}
	addRole(obj, "Creator" );

//Object: Zero out property values in object
/*Create a function called zeroOut that take a user object and then loops over that object and changes 
all the values to 0. Return the user object at the end.*/
var obj = {
  name: "tim",
  age: 34,
  job: "driver" 
};
function zeroOut(obj){
  for (var key in obj){
    if (obj.hasOwnProperty(key)){
      obj[key] = 0;
    }
  }
  return obj;
}
zeroOut(obj);

//backWards Array:
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

