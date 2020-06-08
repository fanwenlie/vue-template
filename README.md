> 不同的分支代表不同的模板

```
/
|—— admin-full     // 后台管理系统模版，包括路由权限，和登陆
├── admin-nologin   // 基于admin-full改造，去掉了登陆和权限
|—— simple  // 普通vue页面开发模版，没有ui框架，只有vue，vue-router, axios               

```

admin-*三者的具体区别：

admin和admin-nologin的区别就是：去掉了登陆和用户权限功能，别的一点区别都没有

