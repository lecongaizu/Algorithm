/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let node = new ListNode();
    let tail = node;
    let curr1 = list1;
    let curr2 = list2;
    while(curr1 && curr2){
        let x = curr1.val;
        let y = curr2.val;
        if(x < y){
            tail.next = new ListNode(x);
            curr1 = curr1.next;
        }else if(x > y){
            tail.next = new ListNode(y);
            curr2 = curr2.next;
        }else{
            tail.next = new ListNode(x);
            curr1 = curr1.next;
        }
        tail = tail.next;
    }
    while(curr1){
        tail.next = new ListNode(curr1.val);
        curr1 = curr1.next;
        tail = tail.next;
    }
    while(curr2){
        tail.next = new ListNode(curr2.val);
        curr2 = curr2.next;
        tail = tail.next;
    }
    return node.next;
};