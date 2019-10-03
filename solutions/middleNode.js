/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    var list = []
    while (head) {
        list.push(head)
        head = head.next
    }
    return list[Math.floor(list.length / 2)]
}