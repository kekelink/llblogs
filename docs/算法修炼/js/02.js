//链表相对于数组来说，要复杂的多，首先，链表不需要连续的内存空间，它是由一组零散的内存块透过指针连接而成，
// 所以，每一个块中必须包含当前节点内容以及后继指针。最常见的链表类型有单链表、双链表以及循环链表。
function List () {
    // 节点
    let Node = function (element) {
        this.element = element
        this.next = null
    }
    // 初始头节点为 null
    let head = null

    // 链表长度
    let length = 0
    // 操作
    this.getList = function () {
        return head
    }
//     2. 查找：
// **确定解题的数据结构：**单链表
//
//     确定解题思路： 遍历单链表，判断节点值是否等于待查找值，相等则返回 true ，否则继续遍历下一个节点，直到遍历完整个链表还未找到，则返回 false
//
//     画图实现： 很简单，读者可以尝试画一下
//
//     确定边界条件： 当链表为 null ，可直接返回 false
    this.search = function (element) {
        let p = head
        if (!p) return false
        while (p) {
            if (p.element === element) return true
            p = p.next
        }
        return false

    }
    //     1. 追加节点：
    //      **确定解题的数据结构：**单链表
    //
    //     确定解题思路： 初始化一个节点（待追加节点），遍历到链尾，在尾节点后插入该节点
    this.append = function (element) {
        let node = new Node(element)
        let p = head
        if (!head) {
            head = node
        } else {
            while (p.next) {
                p = p.next
            }
            //找到最后一个阶段 插入新节点
            p.next = node
        }
        length += 1

    }
    //插入**确定解题的数据结构：**单链表
    //
    // 确定解题思路： 初始化一个节点（待插入节点 node ），遍历到 position 前一个位置节点，在该节点后插入 node
//     确定边界条件：
//
//     当 position 为 0 时，直接将插入节点 node.next 指向 head ， head 指向 node 即可，不需要遍历
//     当待插入位置 position < 0 或超出链表长度 position > length ，都是有问题的，不可插入，此时直接返回 null ，插入失败
    this.insert = function (position, element) {
        if (position < 0 || position > length) return null
        let node = new Node(element)
        let index = 0
        let prev = head
        let curr = head

        if (length === 0) {
            head = node
            return
        }
        if (position === 0) {
            node.next = head
            head = node
        } else {
            while (index < position) {
                prev = curr
                curr = curr.next
                index++

            }
            prev.next =node
            node.next =curr
        }
        length+=1
    }
    this.remove = function (element) {
        if(!head) return null
        let prev = head
        let curr = head
        while(curr){
            if(curr.element===element){
                curr=curr.next
                prev.next=curr
            }else{
                prev=curr
                curr=curr.next
            }
        }

    }
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
}

let data =new List()
data.append(1)
data.append(2)
data.append(3)
data.size()
data.search(1)
data.insert(1,4)
data.insert(0,4)
data.insert(2,6)
data.getList()
data.size()
