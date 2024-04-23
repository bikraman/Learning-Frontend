let temperatures = [73,74,75,71,69,72,76,73];


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    const len = temperatures.length;
    let days = [];


    for(let i = 0; i < len; i++) {

        let currentTemp = temperatures[i];

        inner: {
                for(let j = i + 1; j < len; j++) {

                let nextTemp = temperatures[j];

                if (nextTemp > currentTemp) {
                    days.push(j - i);
                    break inner;
                }

                if (j === len - 1) {
                    days.push(0);
                }
            }
        }

    }

    days.push(0)


    return days;
};

dailyTemperatures(temperatures);