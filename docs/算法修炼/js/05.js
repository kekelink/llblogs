// leetcode21：合并两个有序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
// 示例：
//
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 单列表
// 从链表头开始比较，l1 与 l2 是有序递增的，
// 所以比较 l1.val 与 l2.val 的较小值就是合并后链表的最小值，
// 次小值就是小节点的 next.val 与大节点的 val 比较的较小值，依次递归，直到递归到 l1 l2 均为 null

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
         }
//    确定边界条件： 当递归到任意链表为 null ，直接将 next 指向另外的链表即可，不需要继续递归了
let mergeTwoLists = function(l1, l2) {
        if(l1===null)return l2
        if(l2===null)return l1
        if(l1.val<=l2.val){
            l1.next=mergeTwoLists(l1.next,l2)
            return  l1
        }else{
            l2.next=mergeTwoLists(l2.next,l1)
            return  l2
        }
};

let mergeTwoLists = function(l1, l2) {
    const prehead = new ListNode(-1)
    let prev = prehead
     while(l1!=null&&l2!=null){
        if(l1.val<=l2.val){
            prev.next=l1
            l1=l1.next
        }else {
            prev.next=l2
            l2=l2.next
        }
        prev=prev.next
     }
     prev.next=l1===null?l2:l1
    return prehead

}