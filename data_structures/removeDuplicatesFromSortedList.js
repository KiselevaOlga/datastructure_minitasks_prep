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
 var deleteDuplicates = function(head) {
    var currentPointer = head;
    var prevPointer = null;
    var foundElement;
    if(!head){
        return null;
    } else if(!head.next){
        return head;
    }
    
    while(currentPointer !== null){
        if(currentPointer.next !== null && currentPointer.val === currentPointer.next.val){
            if(prevPointer === null){
                var element = currentPointer.val;
                while(head !== null && head.val === element){
                      head = head.next;
                }
                currentPointer = head;
            } else {
                var element = currentPointer.val;
                while(currentPointer !== null && element === currentPointer.val){
                    currentPointer = currentPointer.next;
                }
                prevPointer.next = currentPointer;
            }
        } else {
            prevPointer = currentPointer;
            currentPointer = currentPointer.next;
        }
    }
    return head
};