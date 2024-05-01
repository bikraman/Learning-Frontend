// const styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// const pos = Math.floor(styles.length / 2)

// styles[pos] = "Classics";
// console.log(styles);

// styles.shift()
// console.log(styles);

// styles.unshift("Rap", "Reggae");
// console.log(styles);


let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?


