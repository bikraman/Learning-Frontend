let a = [1,2,3]

function change(a) {
    a = [1]
    console.log(a)
}

function modify(a) {
    a[0] = 4;
}

console.log(a)
change(a)
console.log(a)

modify(a)
console.log(a)

