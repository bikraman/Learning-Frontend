const ob = {
    name: "Bikraman",
    surname: "Karmakar",
    parents: {
        mother: "Mom",
        father: "Dad",
    }
}

const ob1 = {};

Object.assign(ob1, ob)

const ob2 = structuredClone(ob1)


console.log(ob.parents === ob1.parents)

console.log(ob1.parent === ob2.parents)