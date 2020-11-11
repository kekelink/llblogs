//  单链表、
function List () {
    //初始头节点
    let head = null
    //链表长度
    let length = 0
    //节点
    let Node = function (element) {
        this.element = element
        this.next = null
    }
    //操作
    this.getList = function() {return head}
    this.search = function(list, element) {}
    this.append = function  (element) {
        let node = new Node(element),
            p = head
        // console.log(p)
        // console.log(node)
        if (!head){
            head = node
        } else {
            while (p.next) {
                console.log(p)
                p = p.next
            }

            p.next = node
            // console.log(p)

        }
        length += 1
        console.log('-------------------')
    }
    this.insert = function(position, element) {}
    this.remove = function(element){}
    this.isEmpty = function(){}
    this.size = function(){}
}
// 测试
let list = new List()
for(let i = 0; i < 5; i+=1) {
    list.append(i)
}
// console.log(list)

