
 // Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

list = []
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // list.push(head.val)

    if (head.next === null) {
        console.log(head.val)
        return head
    }
    else {
        reverseList(head.next)  
    }

    

    console.log(head.val)

};

// var printList = function(head) {

//     console.log(head.val)

//     if (head.next === null) {
//         return -1 
//     }
//     else {
//         printList(head.next)  
//     }

// };

const fifth = new ListNode(5)
const fourth = new ListNode(4, fifth)
const third = new ListNode(3, fourth)
const second = new ListNode(2, third)
const head = new ListNode(1, second)

const reversedList = reverseList(head)
// console.log(reversedList)
// console.log(list)

// let cache = ListNode(list[list.length - 1], list[list.length - 2])

// for (let i = list.length - 2; i >= 0; i--) {
//     console.log(list[i])

//     const item = new ListNode(list[i], cache);
//     cache = item;
// }

// console.log(cache)
// printList(head)

