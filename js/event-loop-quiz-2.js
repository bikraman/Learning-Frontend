setTimeout(() => {
  console.log('timeout 1');
  const promise = new Promise((res) => res());
  promise.then(() => console.log('promise 1'));
});

setTimeout(() => console.log('timeout 2'));

const promise = new Promise((res) => res());

promise.then(() => console.log('promise 2'));