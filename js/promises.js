let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => {
        console.log(2);
        resolve("done")
    }, 0);

    console.log(1);
});

const p = new Promise((reject, resolve) => {});
p.resolve().then(() => console.log(3));