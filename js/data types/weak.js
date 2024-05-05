let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

const wMap = new WeakMap();

messages.forEach((value) => wMap.set(value, {isRead: false}))

console.log(wMap)