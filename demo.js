const fs = require("fs");

let files = fs.readdirSync(".");
let fileNames = files.map(file => file.split(".")[0]).filter(fileName => fileName !== "");
console.log(fileNames);

// STRING

// Split

let sentence = "this is a wonderful day";
let word = sentence.split(" ").join(", ");

console.log(word); //this, is, a, wonderful, day

// Split

// Includes
let str1 = "Ly is a beutiful girl";
let w1 = "Ly";

console.log(`The word ${w1} ${str1.includes(w1)? 'is' : 'is not'} in sentence`);
// Includes


var paragraph = "I'm a cute Dog.";
var regex = /[A-Z]/g;
var found = paragraph.match(regex);

console.log(found);

let str2 = "I'm a great girl. ";

console.log(str2.replace("great", "bad").repeat(10));

console.log(str2[str2.search("gr")]);

let str3 = "My name is Ly xd";
console.log(str3.slice(str3.length - 5) + ' equals ' + str3.slice(-5));

// ARRAY

var fruits = ['Apple', 'Banana'];

fruits.shift(); // Remove Apple from the front
fruits.unshift("Tomato"); // Add Tomato in the front
fruits.push("Mango"); // Add Mango in the end
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

var array1 = [1, 2, 3, 4];

// fill with 7 from position 2 until position 4
console.log(array1.fill(7, 2, 4));


//to enable deep level flatten use recursion with reduce and concat
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

// console.log(arr1.flat()); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
// arr1.flat.forEach(function(item, index, array) {
//     console.log(item, index);
// });

// Alternative flat()
function flattenDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

// Flatmap()

// var ly = ["xinh đẹp", "cute", "nết na", "hiền dịu"];

// console.log(ly.flatMap(word => "Ly " + word).join(", "));


//  Map()
var ly = ["xinh đẹp", "cute", "nết na", "hiền dịu"];

console.log(ly.map(word => "Ly " + word).join(", "));

// Reduce

var arr2 = ["Ly", "Cute", "quá"];

console.log(arr2.reduce((accumulator, currentValue) => accumulator.concat(currentValue)));

// Reversed

var yeuEm = ["em", "yêu", "mới", "chết"];

console.log(yeuEm.reverse().join(" "));

console.log(yeuEm.join(" ")); // Reversed detruction array

// Sort
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]