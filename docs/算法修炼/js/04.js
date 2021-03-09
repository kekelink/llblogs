function CircularLinkedList () {
    let Node = function (element) {
        this.element = element
        // 后继指针
        this.next = null
    }
    // 初始头节点为 null
    let head = null

    // 链表长度
    let length = 0
    // 操作
    this.search = function (element) {
    }
    this.insert = function (positon, element) {
        let node = new Node(element)
        let index = 0
        let prev = head
        let curr = head
        if (positon >= 0 && positon <= length) {
            if (positon === 0) {
                while (index < length) {

                }
                prev.next = node
                node.next = curr
                head = node
            }
        }
    }
    this.removeAt = function (position) {
    }
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
}

