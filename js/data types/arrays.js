// let ar = Array();

// ar.push(1,2,3);
// console.log(ar)

// ar.pop()
// console.log(ar)

// ar.shift()
// console.log(ar)

// ar.unshift(4,5)
// console.log(ar)
"use strict";

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // ? 
