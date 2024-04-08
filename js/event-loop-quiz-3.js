setTimeout(() => console.log('timeout 1'));

const promise = new Promise(resolve => setTimeout(resolve));
promise.then(() => console.log('promise 1'));

Promise.resolve().then(() => console.log('promise 2'));

setTimeout(() => console.log('timeout 2'));
