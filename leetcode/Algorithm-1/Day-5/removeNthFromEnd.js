/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if (!head) return head;

	const sentinel = new ListNode(0, head);
	let slow = sentinel;
	let fast = sentinel;
	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next;
	}
	slow.next = slow.next.next;

	return sentinel.next;
    
};