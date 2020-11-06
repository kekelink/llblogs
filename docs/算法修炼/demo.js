/*
leetcode：LRU 缓存机制
运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和写入数据 put 。

获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。*/

/*LRUCache cache = new LRUCache( 2 /!* 缓存容量 *!/ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4 */





//方法二
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map()
}
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let temp = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, temp)
        return temp
    }
    return -1
}
LRUCache.prototype.put = function (key,value) {
    if(this.cache.has(key)){
        this.cache.delete(key)

    }else if (this.cache.size >= this.capacity){
        // 不存在即加入
        // 缓存超过最大值，则移除最近没有使用的
        this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
}
let cache = new LRUCache( 3 /* 缓存容量 */ );
console.log(cache.put(1, 1))
console.log(cache.put(2, 2))
console.log(cache.get(1))     // 返回  1
console.log(cache.put(3, 3))   // 该操作会使得密钥 2 作废
console.log(cache.get(2))     // 返回 -1 (未找到)
console.log(cache.put(4, 4))   // 该操作会使得密钥 1 作废
console.log(cache.get(1))     // 返回 -1 (未找到)
console.log(cache.get(3))      // 返回  3
console.log(cache.get(4))      // 返回  4
console.log(cache)