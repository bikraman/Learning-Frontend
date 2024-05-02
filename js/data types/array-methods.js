
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

function filterRange(array, low, high) {
    return array.filter((value) => value >= low && value <= high)
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)
