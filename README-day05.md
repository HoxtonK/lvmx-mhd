## 为什么使用 vue-lazyload 时配置 error 或者 loading 用 src 中的图片需要使用 require 呢？

首先，要知道使用的是 脚手架工具 创建的项目，这个项目中使用了 webpack 这个构建工具。
还要知道一点，开发时（npm run serve）访问的 localhost:8080 这个地址是将一个看不见的 dist 文件夹作为web服务的根目录的

使用 npm run build 命令打包，这里会生成 dist 文件夹。
dist 文件夹里面的内容就是 webpack 对 src 源代码文件夹中的依赖打包生成到 dist 里面去的
还会将 public 文件夹里面的内容给复制到 dist 文件夹。

所以 通过 localhsot:8080 能访问到 index.html

本地开始时，localhost:8080 访问的其实是看不见的 dist 文件夹的内容。
