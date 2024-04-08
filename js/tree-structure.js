class TreeNode {


    constructor(data) {
        this.children = []
        this.value = data;
    }

    addChild(node) {
        this.children.push(node)
    }

    printChildren() {
        console.log(this.value);
        for(let i = 0; i < this.children.length; i++) {
            console.log(this.children[i].value);
        }
    }
} 

let root = new Node("Hello");

let item1 = new Node("sub hello");
let item2 = new Node("sub hello 1");

item1.addChild(new Node("sub sub hello"))



root.addChild(item1);
root.addChild(item2);

root.printChildren();





