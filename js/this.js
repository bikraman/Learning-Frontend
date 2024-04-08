"use strict"

let x = 20 

const myObj = {
  x: 50,
  foo: function() {
     console.log(this.x)
  }
}

function bar() {
  console.log(this);
}

bar();

myObj.foo()  // 50

const foo = myObj.foo
// foo()  // 20

const myOb = {
    x: 30
}

let newBind = foo.bind(myOb)




