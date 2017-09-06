//CLASSES

//Classes Problem 1
/*Create a class called Puppy.The class should have a constructor that accepts 
three parameters: happiness, energy, and behavior.*/
function Puppy (happiness, energy, behavior){
    this.happiness = happiness;
    this.energy = energy;
    this.behavior = behavior;
  }
  
var Charles = new Puppy(100, 200, 300);

//Classes Problem 2
/*Create a class called Car that creates two properties on each Car object.
The first property should be called manufacturer and the second property should be called year.
The class should also have a method called displayManufacturer that returns the manufacturer.
It should also have a method called displayYear that returns the year.*/
function Car (manufacturer, year){
    this.manufacturer = manufacturer;
    this.year = year;
  }
  
  Car.prototype.displayManufacturer = function(){
    return this.manufacturer;
  }
  
  Car.prototype.displayYear = function(){
    return this.year;
  }
  // code here
  var BillysFirstCar = new Car('Tesla', 2017)
  BillysFirstCar.displayManufacturer();
  BillysFirstCar.displayYear();

  //Classes Problem 3
  /*Using the provided Puppy class, create three new puppies, each with whatever value you want for their 
  happiness, energy, and behavior.Name each of the puppies Larry, Moe, and Curly, respectively.*/
  class Puppy {
    constructor(happiness, energy, behavior) {
      this.happiness = happiness
      this.energy = energy
      this.behavior = behavior
    }
  }
  var Larry = new Puppy(50, 100, 150);
  var Moe = new Puppy(200, 400, 600);
  var Curly = new Puppy(20, 50, 30);

  //Classes Problem 4
  /*The class Puppy needs two methods.
The getsTreats method should accept one parameter. It should increase happiness by 20 for each treat received, 
then return the new happiness value. The takesNap method should decrease energy by 45 and increase behavior by 15.
Make sure you make the puppy take his nap in order to change his energy and behavior levels.*/
class Puppy {
    
      constructor(happiness, energy, behavior) {
        this.happiness = happiness
        this.energy = energy
        this.behavior = behavior
      }
      getsTreats(treat){
        this.happiness = this.happiness + 20;
        return this.happiness;
      }
      takesNap(nap){
        this.energy = this.energy - 45;
        this.behavior = this.behavior + 15;
      }
    }
    var Charles = new Puppy(75, 25, 30)
    Charles.takesNap()
    Charles.getsTreats();

    