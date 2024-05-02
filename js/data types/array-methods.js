
// function camelize(str) {

//     const reduced = str.split("-").reduce((previousValue, currentValue, currentIndex) => {
//         if (currentIndex > 0) {
//             return previousValue + currentValue[0]?.toUpperCase() + currentValue?.slice(1, currentValue?.length);
//         }
//         return previousValue + currentValue
//     });

//     return reduced;
// }



// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function filterRange(array, low, high) {
//     return array.filter((value) => value >= low && value <= high)
// }


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)

// console.log( arr ); // 5,3,8,1 (not modified)


// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, low, high) {

//     arr.filter((value, index) => { 
//         if (value >= low && value <= high) {
//             return true;
//         }
//         else {
//             arr.splice(index, 1);
//             return false;
//         }
//     });
// }

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a)

// console.log( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(array) {
//     return array.slice().sort();
// }

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

// function Calculator() {

//     this.calculate = function(str) {
//         const splt = str.split(" ");
//         return parseInt(splt[0]) + parseInt(splt[2]); 
//     }

// }

// let calc = Calculator;

// console.log(calc)

// console.log( calc.calculate("3 + 7") ); // 10


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((value) => value.name)

// console.log( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((value) =>  {
//     return { fullName: `${value.name} ${value.surname}`, id: value.id }
// })


// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortByAge = (a) => a.sort((a,b) => a.age - b.age);

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete