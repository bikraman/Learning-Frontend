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


// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// });

// arr[2](); // ?

function getMaxSubSum(arr) {

  for(let i = 0; i < arr.length; i++) {
    if(true) {

      let sum = arr[i];

      for(let j = i + 1; j < arr.length; j++) {
        if (true)
          sum = sum + arr[j];
      }

      console.log(sum);
    }
  }
}

getMaxSubSum([-1, 2, 3, -9])



