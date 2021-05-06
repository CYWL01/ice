	<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- CSS -->
  <link rel="stylesheet" href="./index.css" />
  <link rel="stylesheet" href="./root.css" />
  <!-- JS -->

  <title>ice</title>
</head>

<body>
# ice 更新文档 

## v3.1 2020/2/17
>1.重构了网页结构代码，采用了css的变量，也就是自定义属性  
>2.取消了时间的显示，考虑日后增加回来  
>3.采取了更年轻化，更鲜艳的配色  

## v3.0 2021/2/17
> 1.增加了日期的显示  
>>来自`星凰`的日期显示js代码
>>```javascript
>>function setClock() {
>>    let timeElement = document.getElementById('time');
>>    if (timeElement) timeElement.innerText = new Date()>>.toTimeString().split(' ')[0]
>>}
>>
>>setInterval(setClock, 1000);
>>```
>>由于没有星期的显示，所以暂时用了[网上找的一段代码](https://blog.csdn.net/qq_46384325/article/details/107441210?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-6&spm=1001.2101.3001.4242)
## v3.0 2021/2
>1.完全推翻了之前的所有设计
>- 纯色背景
>- 标签正式上线

## v2.0 2021/1
>1.重构了网页结构  
>2.更改了网页样式
>- 网页背景选择`MIKU`的图
>- 创立了标签的背景框

## v1.0 2020
>1.新增一个调用`百度`的搜索框
```html
<form action="http://www.baidu.com/baidu"target="_self">
<input type="text" name="word" id="text"autocomplete="off" placeholder="BAIDU" />
</form>
```
</body>
