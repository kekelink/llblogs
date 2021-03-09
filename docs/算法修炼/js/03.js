function DoublyLinkedList () {
    let Node = function (element) {
        this.element = element;
        //前驱指针
        this.prev = null;
        //后驱指针
        this.next = null;
    }
//    初始化头
    let head = null
//    新增尾节点
    let tail = null
//    链表长度
    let length = 0
    // 操作
    this.search = function (element) {
        let p = head
        if (!p) return false
        while (p) {
            if (p.element === element) return true
            p = p.next
        }

        return false
    }
    //双列表插入
    //确定解题思路： 初始化一个节点（待插入节点 node ），遍历链表到 position 前一个位置节点，在该节点位置后插入 node
    //确定边界条件：
    // 当待插入位置 position < 0 或超出链表长度 position > length ，都是有问题的，不可插入，此时直接返回 null ，插入失败
    this.insert = function (position, element) {
        if (position < 0 || position > length) return null
        let node = new Node(element)
        let prev = head
        let curr = head
        let index = 0
        if (position === 0) {
            if (!head) {
                head = node
                tail = node
            } else {
                node.next = head
                head.prev = node
                // head 指向新的头节点
                head = node
            }
            length+=1
        } else if (position === length) {
            //    尾节点
            curr = tail
            curr.next = node
            node.prev = curr
            //更新尾节点
            tail = node
            length+=1
        } else {
            while (index < position) {
                prev = curr
                curr = curr.next
                index++
            }
            prev.next = node
            node.next = curr
            curr.prev = node
            node.prev = prev
            length += 1
            return true
        }

    }
    this.removeAt = function (position) {
        if(position >= 0 && position < length && length > 0){
            let prev=head,
                curr = head,
                index =0
            if(position===0){
                if(length===1){
                    head=null
                    tail=null
                }else{
                    head=head.next
                    head.prev=null
                }
            }else if(position===length-1){
                curr=tail
                tail=curr.prev
                tail.next=null
            }else{
                while(index<position){
                    prev=curr
                    curr = curr.next
                    index++
                }
                prev.next=curr.next
                curr.next.prev=prev



            }
            length-=1
            return curr.element

        }else{
            return false
        }

    }
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
}

let data =new DoublyLinkedList()
data.insert(0,1)
data.insert(1,2)

data.insert(2,3)
data.insert(1,4)
// data.size()
data.search(4)
// data.size()
