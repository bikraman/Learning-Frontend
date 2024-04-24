let temperatures = [73,74,75,71,69,72,76,73];


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    const len = temperatures.length;
    let days = [];
    let stack = [];

    stack.push(temperatures[0])
    // while ()

    for(let i = 1; i < len; i++) {

        let currentTemp = temperatures[i];

        if(stack.at(-1) > currentTemp) {
            stack.pop()
            stack.push(currentTemp)
        }




    }

    console.log(stack)
    return days;
};

// dailyTemperatures(temperatures);


function monotonic(something) {
    let stack = [];
    let result = [];
    for (let i = 0; i < something.length; i++) {
        while (stack.length !== 0 && something[stack.at(-1)] < something[i])  { //'>=' can be substitute for any operation reqd
            let curr = stack.pop()
            result[curr] = i - curr;
        }            
        stack.push(i) // append current index's item to stack
    }

    for (let i = 0; i < stack.length; i++) {
        result.push(0)
    }

    console.log(result)

    return result;
}


monotonic(temperatures);