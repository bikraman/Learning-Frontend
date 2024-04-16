
var MinStack = function () {
    this.stack = [];
    this.min = 0;
    this.minStack = new Map();

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

    if (this.stack.length === 0) {
        this.minStack.set(0, val)
        this.min = val;
        this.stack.push(val);
    }
    else {
        this.stack.push(val);
        if (val < this.min) {
            this.min = val;
        }
        this.minStack.set(this.stack.length - 1, this.min)
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.delete(this.stack.length - 1)
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack.get(this.stack.length - 1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const ms = new MinStack();


["push",
"push",
"push",
"pop",
"push",
"push",
"push",
"pop",
"pop"]

ms.push(-10)
ms.push(14)
ms.push(-20)
ms.pop()
ms.push(10)
ms.push(-7)
ms.push(-7)
ms.pop()


console.log(ms.minStack)
console.log(ms.stack)