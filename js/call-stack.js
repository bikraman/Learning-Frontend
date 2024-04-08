function first() {
    console.log("hello from first");
}

function second() {
    first();
}

function third() {
    second();
}

third();


const proc = process.memoryUsage();

console.log(proc);