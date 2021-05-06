/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     if (!head){
//         return null
//     }
    
//     var linkedList = head; 
    
//     // if(linkedList !== null){
//     //     if (linkedList.val === val){
//     //         head = linkedList.next;
//     //         linkedList = head;
//     //         console.log('this a head ', head)
//     //         console.log('This is a linked list ', linkedList)
//     //     }
//     // }
//     console.log('This is a linked list2', linkedList) 
//     while(linkedList !== null){
//         if(linkedList.head === val){
//             break
//         }
//         var prev = linkedList;
//         linkedList = linkedList.next;
//         console.log('This is a linked list3', linkedList)
//         console.log('this is a prev ', prev)
//     }
      
//     if (linkedList === null){
//         return
//     }
//     prev.next = linkedList.next
//     console.log('prev next ', prev.next)
//     linkedList = null
// };


var removeElements = function(head, val) {
    if (!head){
        return null;
    }
    
    var currentList = head;
    var prevList = null;
    
    while(currentList !== null){
        if(currentList.val===val){
            if(prevList === null){
                head = head.next;
                currentList = head;
            } else {
                prevList.next = currentList.next;
                currentList = currentList.next;
            }
        } else {
            prevList = currentList;
            currentList = currentList.next;
        }
    }
    return head
   
}