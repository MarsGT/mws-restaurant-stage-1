# 优达学城餐厅点评应用项目
本项目 Fork 自 [mws-restaurant-stage-1](https://github.com/udacity/mws-restaurant-stage-1) 项目，原项目是基于餐厅点评功能的 Demo 应用，本项目将进一步完善其功能，包括对齐增加响应式设计、增加可访问性以及增加离线访问功能。

## 怎样运行此项目
- 建议部署到本地端网页服务器运行（后端依赖），如本机安装有 Python2.x 环境，可以使用`python -m SimpleHTTPServer 8000`启用对 8000 端口请求的响应（后端 Mock 数据都部署在 8000 端口），或者也可以使用 [live-server](https://github.com/tapio/live-server) 进行简单配置后亦可。
- 测试 Service Worker 时可能需要启动 HTTPS 服务，可以考虑使用 [mkcert](https://github.com/FiloSottile/mkcert) 这样的工具，通过脚本为本机（即 localhost）签发自签名证书的方式，开启 HTTPS 服务。

## 更多内容
如果你对此项目感兴趣，可以访问 [优达学城论坛](https://discussions.youdaxue.com/c/fend/nd001-restaurant-reviews-01) 了解更多相关信息。