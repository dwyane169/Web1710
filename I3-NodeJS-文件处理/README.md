
# 内容

## 文件处理

## 服务器搭建



## 文件处理

### 挑战1： 统计出有多少个人

思路：

1. 得到了文件的内容 str
2. 字符串str 按照 换行符 分隔   ==> 数组 arr（存储了所有的行）
        str.split("\n")
3. 遍历数组，提取出当前数组元素中的名字

4. 提取出每一行数据

思路

var a = "1,,何峰,2017/2/6 9:09"

// 按逗号分隔
var nameArr = a.split(",")

// 
nameArr[2]  就是名字

5. 统计
    1. 把所有名字都存储到数组中（数组中有了所有人名（重复））
    2. 遍历数组，如果 当前的与上一个不一样，计数器就增1

最终处理之后，打印计数器


### 挑战2：找出最早上班的那个人