
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

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
    return array.slice().sort();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)