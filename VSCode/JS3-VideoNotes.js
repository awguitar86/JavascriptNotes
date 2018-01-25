//JAVASCRIPT 3 VIDEO NOTES

//Prototypes
/*This way is not good because there is duplication here. We're being 
redundant and wasting spave here. It's not memory efficiant.*/
function Dog (){
    this.legs = 4;
    this.bark = function(){
        return 'arf arf';
    }
}
var germanShephard = new Dog();

var retriever = new Dog();

//This is more efficiant and works better.
function Dog (){
    this.legs = 4;
}
 Dog.prototype.bark = function(){
     return 'arf arf';
     };
var corgi = new Dog();

corgi.bark(); //returns 'arf arf'. This says corgi came from dog so it has access to the prototype bark.

//Here is another example problem
function Flower(color){
    this.color = color;
    this.blossomed = false;
}

Flower.prototype.bloom = function(){
    this.blossomed = true;
}

var rose = new Flower('red');

var lilac = new Flower('purple');

rose.bloom(); //because rose is to the left of the .bloom it now becomes the value of "this" in the bloom function.

lilac.blossomed //this is false because it is in the original Flower function and not in the .bloom function.

//Here is another example
Array.prototype.firstItem = function(){
    return this[0];
}

var myArray = ['first', 'second', 'third'];

myArray.firstItem();//which get's us the 'first' in the array.

//another example
var myArray = ['first', 'second', 'third'];

Array.prototype.pop = function(){
    return 'popcorn!';
}
/*Native Array Methods:
    .push()
    .unshift()
    .pop()
    .shift()
    .reverse()
These are the native built in prototypes, and when we use them in a function like 
the above function Array.prototype.pop, we override the native built-in prototype
which is bad practice and makes things confusing. Instead go for new unique prototypes
that won't confuse people.
*/

//RECAP
function Dog(){
    this.legs = 4;
}
//Adding methods to the prototype instead of the constructor function saves space, keeps consistancy.
Dog.prototype.bark = function(){
    return 'arf arf';
};
var daschund = new Dog();

/*Invoke methods on prototype as if they were properties of the object itself. 
Javscript will search first for a method in the object, then look to the prototype.*/
daschund.bark();

/* OBJECTS - COPYING WITH ASSIGN */
Object.assign({}, obj1)
//Object.assign: a method that copies all properties and values from source objects to target object.
//The empty brackets is the target object. This object will be returned by the function.
//The obj1 is the source object(s). The properties from this object will be copied to the target object.
var obj = {
    name: "Joseph"
};

var obj2 = Object.assign({}, obj);

obj.name = 'Joe'

obj2.name //still equals 'Joseph' even though we changed obj.name to 'Joe'.


/* OBJECTS - FOR IN LOOPS */
for(var prop in myObj){
    myObj[prop];
}
//for in loop: loop that runs a block of code of each of an object's own properties
//the prop: create variable that will stand for each property key
//the myObj: the object to loop through
//the prop in brackets: the property key variable can be referred to inside the l;oop (use bracket notation).
var employees = {
    tom: 'designer',
    chris: 'engineer',
    james: 'developer'
}
var employeeNames = [];

for(var prop in employees){
    employeeNames.push[prop];
}


/* PROTOTPES AND CLASSES - CLASSES */
//Javascript classes ate syntactical sugar for writing constructor functions and adding methods to the prototype
//the constructor function takes in the parameters and assigns properties as usual
//outside the constructor function, define any methods you want to add to the prototype
//create new instances the same way you would with a constructor function
class Tree {
    constructor(height){
        this.height = height;
        this.food = 'photosynthesis';
    }

    grow(){
        this.height++;
    }
}
var oak = new Tree(10);

oak.grow();

oak