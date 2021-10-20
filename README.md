# Data-structure-and-algorithm-for-javascript
一个针对javascript数据结构与算法学习的项目，编程题目使用leetcode，理论与思想来自慕课网实战  《javascript数据结构学习与算法编程》

一.栈(Stack)

  特点： 后进先出，随机存储
  应用场景： 10进制转2进制求余数； letcode-20 括号类型匹配（算法题目）； 函数栈式调用；
  javascript使用数组(push, pop)来模拟栈,java才有栈这种数据结构的实现

二.队列(Queue)

  特点：先进先出，随机存储
  应用场景：排队食堂打饭； js任务队列；letcode-933 最近的请求次数(算法题)；
  js没有队列的实现，使用array数组模拟队列，使用push和shift方法实现入队和出队

三.链表

  特点： 1.多个元素组成的列表
        2. 元素存储不连续，next指针连在一起

  与数组的区别： 数组增删非首尾元素时非常麻烦，需要移动各个元素
                而链表增删元素只需改变next的指向即可。
  js里没有链表的实现，需要使用object来模拟链表