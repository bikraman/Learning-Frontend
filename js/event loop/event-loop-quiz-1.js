setTimeout(() => console.log(1), 0);

console.log(2);

new Promise(res => {
  console.log(3)
  new Promise(res1 => {
    console.log(6);
    res1()
  }).then(() => {console.log(7)})
  res();
}).then(() => console.log(4));

console.log(5);