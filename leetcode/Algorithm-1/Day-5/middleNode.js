/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let head = [1,2,3,4,5]
var middleNode = function(head) {
    let len =  0;
    let node = head;
    while(node !== null){
        len += 1;
        node =  node.next;
    }
    let middle = Math.floor(len/2);
    node = head;
    for (let i = 0; i< middle; i++){
        node = node.next;
    }
    console.log(node)
    return node; 
};