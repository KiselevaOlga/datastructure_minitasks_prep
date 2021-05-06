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
    var current=null;
    var tailSeeker=head;
    var count = 0;
    var prevPointer=null;
    while (tailSeeker){
        tailSeeker = tailSeeker.next;
        
        if(count>=n){
            if(!current){
                current = head;    
            }
            prevPointer = current;
            current = current.next;  
        }
        count++;
    }
    if(!current){
        head = head.next
        return head;
    }
    prevPointer.next = current.next;   
    return head
};