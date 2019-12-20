This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 使用React配置proxy解决跨域问题

### `create-react-app`

使用 npm create-react-app  project-name 新建一个react项目

### `修改src`

修改src中的app文件，实现用户登录。axios中的请求为/adm/login，不需要指定服务器地址

### `修改package.json`

在package.json的末尾添加真正的服务器地址
添加"proxy":"服务器地址"

### `个人理解`

这样做后，发送的请求在浏览器只会显示localhost:3000，即react-app配置的nodejs服务器
应该是nodejs服务器转发了请求，去请求真正的服务器

### `更新补充`

搭建了本地的go服务器接口。尝试使用go接收json数据，结果失败。花了很久没找到解决办法。
最终把接口改为了get（因为仅供测试不考虑安全性）。

更详细的proxy配置可以参考博客：
https://www.cnblogs.com/Netsharp/p/11506893.html