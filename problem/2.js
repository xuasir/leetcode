// problem: https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let hair = new ListNode(null);
  let n = hair;
  let l = l1,
    r = l2;
  let base = 0;
  while (r !== null || l !== null) {
    let x = (l && l.val) || 0;
    let y = (r && r.val) || 0;
    let sum = base + x + y;
    base = (sum / 10) | 0;
    n.next = new ListNode(sum % 10);
    n = n.next;
    l = (l && l.next) || null;
    r = (r && r.next) || null;
  }
  if (base) {
    n.next = new ListNode(base);
  }

  return hair.next;
};
