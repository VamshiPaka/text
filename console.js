console.log("Hello I'm printing in the console!!");

console.group('start');
console.log(true);
console.log([ 1, 2, 3, 4, 5, 6 ]);
console.log(null);
console.groupEnd('start');

console.log({ name: 'karthik', age: 12 });

var person = { name: 'Vamshi', age: '26', city: 'Hyderabad' };
var person2 = { name: 'Karthik', age: '29', city: 'Hyderabad' };
var person3 = { name: 'Rakesh', age: '26', city: 'Hyderabad' };

console.time('label');
console.log({ person, person2, person3 });
console.log('%c custom message', 'color:green');
console.timeEnd('label');

// This console.log() function is used to show the output in the console it takes the input in the form of string,array,object,boolean value

// console.group() and console.groupEnd() are used to show the console objects in a seperate block which will be indented

//console.time() and console.timeEnd() will show the time taken to load this complete code.

console.error("Hello there!!! I'm an error message coming through connsole.error function");

// This console.error() function is used to show error in the console. this comes in red colour with an error icon with it

console.warn("Hello!! I'm warning comming from console");

//This console.warn() function is used to display a warning in the console it comes in Yellow colour. This takes the input in the form of string.

//console.clear() function clears the console.

console.table({ animal: 'lion', thing: 'table' });

console.table({ person, person2, person3 });

// this console.table() function is used for showing a table inside a console it must be either in the form of an object or an array

for (i = 0; i <= 5; i++) {
	console.count(i);
}

//console.count() is used to count the number that the function hit by this number
