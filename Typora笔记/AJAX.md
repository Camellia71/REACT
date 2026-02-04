# AJAX

ajax就是让网页在不停的刷新页面时，悄悄地和服务器对话并更新部分内容；在浏览器中向服务器发送异步请求，可以无刷新获取数据

全称是**Asynchronous JavaScript and XML**（异步的 JavaScript 和 XML），虽然名字里有 XML，但现在最常用的是 **JSON** 格式

#### 1.HTTP协议

![image-20260116211600207](E:\应用\Typora\typora-user-images\image-20260116211600207.png)

**请求报文：**

包括请求行：请求类型（GET,POST...）URL路径 ，HTTP协议的版本

请求头：告知请求体的类型，需要记住格式		

```http
Host:atguigu.com
Cookie:name=guigu
Content-type:application/x-www-form-ulencoded
User-Agent:chrome 83
```

请求空行：

请求体：GET类型的请求体是空的

```http
username=admin&password=admin
```

**响应报文：**

响应行：  协议版本 ，响应状态码 ，响应状态字符串

*响应状态码：*

![image-20260116220128155](E:\应用\Typora\typora-user-images\image-20260116220128155.png)

![image-20260117171421497](E:\应用\Typora\typora-user-images\image-20260117171421497.png)

响应头：

```http
Content-Type:text/html;charset=utf-8
Content-length:2048
Content-encoding:gzip
```

相应空行：

响应体：主要的返回结果

```
<html>
	<head>
	</head>
	<body>
		<h1>尚硅谷</h1>
	</body>
</html>
```

