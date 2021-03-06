# Data-structure-and-algorithm-for-javascript
一个针对javascript数据结构与算法学习的项目，编程题目使用leetcode，理论与思想来自慕课网实战  《javascript数据结构学习与算法编程》

## 一.栈(Stack)

  特点： 后进先出，随机存储
  应用场景： 10进制转2进制求余数； letcode-20 括号类型匹配（算法题目）； 函数栈式调用；
  javascript使用数组(push, pop)来模拟栈,java才有栈这种数据结构的实现

## 二.队列(Queue)

  特点：先进先出，随机存储
  应用场景：排队食堂打饭； js任务队列；letcode-933 最近的请求次数(算法题)；
  js没有队列的实现，使用array数组模拟队列，使用push和shift方法实现入队和出队

## 三.链表

  特点：
  1. 多个元素组成的列表
  2. 元素存储不连续，next指针连在一起

  与数组的区别： 数组增删非首尾元素时非常麻烦，需要移动各个元素
                而链表增删元素只需改变next的指向即可。
  js里没有链表的实现，需要使用object来模拟链表

## 四. 集合

  特点： 无序且唯一的数据结构

  在前端里存在，ES6新增的数据结构set即为集合

  集合一般用处
  1. 数组去重
  2. 集合查找存在元素的方法has()
  3. 求两个集合或者数组的交集
  4. 使用.size来得出Set对象的长度

## 五. 字典

  特点：与集合相似，存储唯一值的数据结构，由键值对的方式进行存储

  前端使用存在字典的数据结构，在es6中以map表示

## 六. 树
  特点： 树是分层的抽象数据模型，一对多

  前端： 没有树这样的数据结构，使用Array和Object模拟树结构

  前端树的使用: DOM ， 菜单分层路由


  遍历算法： 
  1. 深度优先遍历算法： 即尽可能深的搜索遍历树的分支
      算法口诀： 1.先访问历根节点 2.对根节点的chilren挨个进行深度优先遍历  （整个过程是递归调用）
  2. 广度优先遍历算法： 先访问离根节点最近的节点
    算法口诀： 1.新建一个队列，根节点入队 2. 队头出队并访问 3.根节点下的children挨个入队列 4.重复2 3两步，直到为空


### 树的知识：

树是一种分层数据的抽象模型

### 二叉树知识

先序遍历：（根左右）

1. 先访问根节点
2. 对左子树先序遍历
3. 最后对右子树先序遍历
   
中序遍历：

1. 先对左子树进行中序遍历
2. 再访问根节点
3. 最后对右子树进行中序遍历

后序遍历：

1. 对左子树进行后序遍历
2. 对右子树进行后序遍历
3. 最后访问根节点

## 图

* 图是一种数据结构，是网络结构的抽象模型，是一组由边连接的节点
* 图可以表示任何二元关系，比如道路、航班、、、

js中没有图，但是可以用Ojbect和Array表示图

图的关联关系: 邻接矩阵和邻接表

# 图的常用操作
* 深度优先遍历: 尽可能深的搜索图的分支
* 广度优先遍历：先访问离根节点最近的节点

# 堆

## 堆是什么?
* 堆是一种特殊的完全二叉树
* 所有节点都大于等于（大根堆）或者小于等于（小根堆）它的子节点

## JS中的堆

* js中使用数组表示堆
* 任意节点的左侧子节点等于 2 * index + 1
* 任意节点的右侧子节点等于 2 * index + 2
* 父节点的位置等于 (index - 1) / 2

## 堆的应用

- 快速地找出最大值和最小值 ， 时间复杂度O(1)
- 找出第K个最大或者最小元素

### 第K个最大或者最小元素

1. 构建一个最大（小）堆，并将元素依次插入堆中
2. 当堆的容量超过K，就删除堆顶
3. 插入结束后，堆顶就是第K个最大（小）元素


### 实现最小堆类

1. 将值插入堆的底部，即数组的尾部
2. 然后上移： 将这个值和它的父节点进行交换，直到父节点小于等于这个插入的值
3. 大小为K的堆中插入元素的时间复杂度为O（logK）

### 删除堆顶
1. 用数组尾部元素替换堆顶 （直接删除堆顶会破坏堆结构）
2. 然后下移： 将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶
3. 大小为k的堆中删除堆顶的时间复杂度为O(logK)

### 获取堆顶和堆的大小
* 获取堆顶： 返回组成数组的头部
* 获取堆的大小： 返回数组的长度   
  
# 分而治之
* 分而治之是 **算法设计** 中的一种方法
* 它将一个问题**分**成多个和原问题相似的小问题，
  **递归解决**小问题，再将结果**合**并以解决原来的问题

## 应用
- 归并排序
- 快速排序
- 翻转二叉树

# 动态规划

* 动态规划是 **算法设计**中的一种方法
* 它将一个问题分解为**相互重叠**的子问题，通过反复求解
子问题，来解决原来的问题

## 应用

- 斐波那契数列

# 贪心算法

* 贪心算法是**算法设计**中的一种方法
* 期盼通过每个阶段的**局部最优**选择，从而达到全局的最优
* 贪心算法的结果并 **不一定是最优**