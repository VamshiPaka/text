//var
var name = 'vamshi from var'; //String datatype
var age = 28; //number
var canFly = false; //boolean
var languages = [ 'Telugu', 'Hindi', 'English' ]; //array
var friends = { name: 'Karthik', hobby: 'Gyming' }; //object

var a = null;
console.log(a);

var a = 10;
console.log(a);

//let

// allows to maintain the scope of variable
{
	let name = 'Vamshi';
	console.log('name from let:', name);
}

console.log(name);

//const

//variables declared with const are the fixed values where we cannot change the values of the variable

const surname = 'Paka';

console.log(surname);
{
	surname = 'other surname';
}
//this gives an type error: Assignment to constant variable

const cars = [ 'benz', 'volvo' ];
console.log(cars);
cars.push('audi');
// can change the elements of the array when it is declared as const but cannot replace the whole array.

cars = [ 'hero', 'bajaj' ];
