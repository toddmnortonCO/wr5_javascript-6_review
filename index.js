// // CLASSES
// Q. What are Classes in JS?

// 1) Convert the following into a Class
function Table (shape, color, numLegs) {
	this.shape = shape;
	this.color = color;
	this.numLegs = numLegs;
	this.flipped = false;
}

Table.prototype.flip = function() {
	this.flipped = true;
	return '(╯°□°)╯︵ ┻━┻';
} 

// Code here:

class Table {
  constructor(shape, color, numLegs) {
    this.shape = shape;
	  this.color = color;
	  this.numLegs = numLegs;
	  this.flipped = false;
  }
  flip() {
    this.flipped = true;
	  return '(╯°□°)╯︵ ┻━┻';
  }
}

const toddTable = new Table('Rectangle', 'brown', 4);

toddTable.flip();



// 2) Create a simple Class named Robot and set properties as such: take in name, take in material, take in mobility, set batteryPowered to a default of true. Give it a method named addNums where it will return the sum of two numbers given to it.

class Robot {
  constructor(name, material, mobility) {
    this.name = name;
    this.material = material;
    this.mobility = mobility;
    this.batteryPowered = true;
  }
  addNums(num1, num2){
    return num1 + num2;
  }
}

// 3) Create a robot and add 2 + 2;

const toddRobot = new Robot('Todd', 'steel', true);

toddRobot.addNums(2, 2); 


// 3) Now create a WarBot Class that extends Robot. Give it a weaponChoice property that it takes in the value for. Have its addNum function return a string where it says it battles you the amount of times the sum equals with its weapon choice.

class WarBot extends Robot {
  constructor(name, material, mobility, weaponChoice) {
    super(name, material, mobility);
    this.weaponChoice = weaponChoice;
  }
  addNums(num1, num2){
    const sum = super.addNums(num1, num2);
    return `I battle you ${sum} times with ${this.weaponChoice}.`
  }
} 

const toddWarBot = new WarBot('Todd', 'titanium', true, 'missiles');

toddWarBot.addNums(3, 3); 

// // CLOSURES
// Q. What is a closure?

// 1) Invoke a function that returns an inner function and save it in a variable named "myHome". The outer function should have params for name (string), doors (number), walls (number), and fireplace (boolean). The returned function should console log whose home it is and what it looks like.

function myHome(name, doors, walls, fireplace) {
  const personName = name,
    numDoors = doors,
    numWalls = walls, 
    hasFireplace = fireplace;
  return function homeReturn() {
    console.log(`This is ${name}'s home with ${doors} doors, ${walls} walls.  Is there a fireplace?  That's ${fireplace}!`)
  }
}

// 2) Create a home for someone. Then have it console about their home.

const toddHome = myHome('Todd', 2, 4, true);

console.log(toddHome);

toddHome();

