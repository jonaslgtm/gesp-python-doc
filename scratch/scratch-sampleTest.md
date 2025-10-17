
# GESP 图形化编程 1 级认证样题

## 一级 - 样题1：踢足球

> GESP 图形化编程 1 级认证样题

![样题01 : 踢足球](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-1-01.jpg)

**准备工作：**

(1) 选择背景 Playing Field。

(2) 删除默认小猫角色，添加角色 Ben、Jordyn 和 Soccer Ball。

**功能实现：**

（1）用积木实现 Jordyn 的初始位置为舞台左下角坐标为（-164，-81），初始造型为 jordyn-a，面向右侧，如图所示；

（2）用积木实现 Ben 的初始位置为舞台右上角坐标为（187，53），初始造型为ben-d，面向左侧，如图所示；

（3）用积木实现 Soccer Ball 位于 Jordyn 脚前不远处坐标为（-114，-119），面向 Ben；

（4）点击绿旗，Jordyn 每隔 1 秒切换一个造型，直至其造型为jordyn-d；（5）在切换成 jordyn-b 造型后，Soccer Ball 播放声音basketball bounce的同时向 Ben 移动，直到碰到 Ben 为止；

（6）当 Ben 碰到 Soccer Ball 后，Ben 说“好球”2 秒，终止本身程序；

**注意事项：**

- 本程序只允许使用运动、外观、事件（除广播）、控制、侦测类积木块。

---

## 一级 - 样题2：海底寻宝

> GESP 图形化编程 1 级认证样题

![样题02 : 海底寻宝](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-1-02.jpg)

**准备工作：**

(1)导入背景 Underwater 2；

(2)删除默认小猫角色，导入角色 Crystal、Diver1 和Fish。

**功能实现：**

(1)点击绿旗，用积木实现潜水员的初始坐标为（-130，-125），面向舞台的右侧，钻石的初始坐标为（180，30）；

(2)点击绿旗，用积木实现小鱼在舞台的左侧，面向舞台的右侧，初始造型为fish-c，沿着水平方向不断游动，碰到边缘就反弹，且肚皮不能朝下；

(3)潜水员能够面向鼠标指针，以移动 10 步，等待 0.2 秒的速度在舞台上移动（通过移动鼠标指示方向，指引潜水员找到钻石）；

(4)在移动过程中，潜水员如果碰到钻石，那么就停止移动，说“找到钻石啦”2 秒，终止所有程序。

**注意事项：**

- 本程序只允许使用运动、外观、事件（除广播）、控制、侦测类积木块。

# GESP 图形化编程 2 级认证样题

## 二级 - 样题1：计算周长和面积

> GESP 图形化编程 2 级认证样题

【**题目描述**】

已知长方形的长（L）和宽（W）。

默认小猫角色和白色背景，编写程序计算长方形的周长（P）和面积（A）。周长的计算公式：P = 2 ×（L + W）

面积的计算公式：A = L × W

【**输入描述**】

新建变量“L”用于存储长方形的长（L>0），新建变量“W”用于存储长方形的宽（W>0）。

如下图所示：

![样题01 : 计算周长和面积](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-2-01.jpg)

![样题01 : 计算周长和面积](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-2-02.jpg)

【**输出描述**】

新建变量“P”用于存储长方形的周长，新建变量“A”用于存储长方形的面积。

如下图所示：

![样题01 : 计算周长和面积](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-2-03.jpg)

![样题01 : 计算周长和面积](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-2-04.jpg)

【**输入样例**】

L = 10

W = 5

【**输出样例**】

P = 30

A = 50

【**输入样例**】

L = 15

W = 6

【**输出样例**】

P = 42

A = 90

---

## 二级 - 样题2：计算奇数和

> GESP 图形化编程 2 级认证样题

【**题目描述**】

默认小猫角色和白色背景，编写程序计算从 n 到 m（包括 n 和m）之间所有奇数的和，其中 0 < n < m < 500。

例如，n = 3，m = 12，其和为：3 + 5 + 7 + 9 + 11 =35。

【**输入描述**】

新建变量“n”用于存储计算奇数和的起始数，新建变量“m”用于存储计算奇数和的终止数。

如下图所示：

![样题02 : 计算奇数和](https://cdn.jsdelivr.net/gh/jonaslgtm/Cloud-Image-Hosting/ccf-gesp/scratch/scratch-sample-2-05.jpg)

![样题02 : 计算奇数和](https://cdn.jsdelivr.net/gh/jonaslgtm/Cloud-Image-Hosting/ccf-gesp/scratch/scratch-sample-2-06.jpg)

【**输出描述**】

新建变量“result”用于存储从 n 到 m（包括 n 和 m）之间所有奇数的和。

如下图所示：

![样题02 : 计算奇数和](https://cdn.jsdelivr.net/gh/jonaslgtm/Cloud-Image-Hosting/ccf-gesp/scratch/scratch-sample-2-07.jpg)

【**输入样例**】

n = 3

m = 12

【**输出样例**】

result = 35

【**输入样例**】

n = 1

m = 100

【**输出样例**】

result = 2500

# GESP 图形化编程 3 级认证样题

## 三级 - 样题1：鸡兔同笼

> GESP 图形化编程 3 级认证样题

【**题目描述**】

在小明家的院子里养了一群鸡和兔子，鸡有两只脚，兔子有四只脚，兔子和鸡都只有一个头。

目前已知所有鸡和兔子头的数量为 head，脚的数量为foot。

默认小猫角色和白色背景，编写程序计算鸡（chicken）和兔子（rabbit）的数量。

【**输入描述**】

新建变量“head”用于存储鸡和兔子头的总数量，新建变量“foot”用于存储鸡和兔子脚的总数量。

如下图所示：

![样题01 : 鸡兔同笼](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-3-01.jpg)

【**输出描述**】

新建变量“chicken”用于存储鸡的数量，新建变量“rabbit”用于存储兔子的数量。

如下图所示：

![样题01 : 鸡兔同笼](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-3-02.jpg)

【**输入样例**】

head = 20

foot = 50

【**输出样例**】

chicken = 15

rabbit = 5

【**输入样例**】

head = 35

rabbit = 100

【**输出样例**】

chicken = 20

rabbit = 15

---

## 三级 - 样题2：数字加密

> GESP 图形化编程 3 级认证样题

【**题目描述**】

在信息科技的课堂上，科技老师提了一个问题“如何对十进制的四位数进行加密呢？” 小明想到的方法是：首先，将个位和千位对调，再将十位和百位对调；然后，将每位数字按照一定规则进行替换。

替换规则为：0 替换成 9、1 替换成8、2 替换成7、其他数字以此类推，直到 9 替换成 0。

例如，对 1978（称之为明文） 加密，则：

个位和千位对调后得 8971;

十位和百位对调后得 8791;

将每个数字替换后得 1208（称之为密文）。

默认小猫角色和白色背景，现给定一个密文的四位数，请编写程序，解码得出明文的四位数。

【**输入描述**】

新建变量“密文”，存入一个四位数，且保证输入的密文有且仅有四个数字。

如下图所示：

![样题02 : 数字加密](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-3-03.jpg)

【**输出描述**】

新建变量“result”，将最后的结果存入变量“result”，表示对应的明文。

如下图所示：

![样题02 : 数字加密](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-3-04.jpg)

【**输入样例**】

密文 = 1978

【**输出样例**】

result = 1208

【**输入样例**】

密文 = 0557

【**输出样例**】

result = 2449

# GESP 图形化编程 4 级认证样题

## 四级 - 样题1：出生日期

> GESP 图形化编程 4 级认证样题

【**题目描述**】

身份证号码通常是一个 18 位的编码，例如：110104200306215328。

其第 7 位到第 14 位表示出生日期，前面的四位表示年份，接着的两位表示月份，最后两位表示日期，上面的例子中年份为 2003，月份为 06，日期为21。

默认小猫角色和白色背景，编写程序从身份证编码中查找出出生年月。

【**输入描述**】

新建变量“身份证号”，用于存储身份证号码。保证存入的身份证号码都是合理的。

如下图所示：

![样题01 : 出生日期](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-4-01.jpg)

【**输出描述**】

新建变量“生日”，用于存储出生日期，格式为 yyyy 年 mm 月 dd 日。

如下图所示：

![样题01 : 出生日期](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-4-02.jpg)

【**输入样例**】

身份证号 = 110104200306215328

【**输出样例**】

生日 = 2003 年 06 月 21 日

【**输入样例**】

身份证号 = 420113200405074215

【**输出样例**】

生日 = 2004 年 05 月 07 日

---

## 四级 - 样题2：计算天数

> GESP 图形化编程 4 级认证样题

【**题目描述**】

可以用如下的方法来判断闰年：

如果年份能够被 4 整除但不能被 100 整除或者年份能够被400 整除，那么该年份为闰年。闰年的 2 月有 29 天，否则有 28 天。

默认小猫角色和白色背景，编写程序给定一个日期，可以准确输出该日期是当年中的第几天。

【**输入描述**】

新建变量“date”，将日期数据存入该变量中，日期的格式为yyyymmdd，其中yyyy表示给定的年份，mm 表示给定的月份，dd 表示给定的日期。如果这些数字不足四位或二位，以 0 补足。

保证月份与日期都是合理的。

如下图所示：

![样题02 : 计算天数](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-4-03.jpg)

【**输出描述**】

新建变量“result”，将最后的结果存入变量“result”，表示输入日期是该年的第几天。

如下图所示：

![样题02 : 计算天数](https://cdn.jsdelivr.net/gh/jonaslgtm/gesp-scratch-doc/docs/_img/scratch-sample-4-04.jpg)

【**输入样例**】

date = 19981127

【**输出样例**】

result = 331

【**输入样例**】

date = 20000209

【**输出样例**】

result = 60
