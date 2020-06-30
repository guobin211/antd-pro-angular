<h1 align="center">Ant Design Pro For Angular</h1>

- Preview: [https://guobin211.github.io/antd-pro-angular/dashboard]
- Home Page: [https://github.com/guobin211/antd-pro-angular]
- Documentation: 
- ChangeLog: 
- FAQ: [https://github.com/guobin211/antd-pro-angular/issues]

## 文档规划

```typescript 
    projects                        // library
    app
        animations                  // 动画函数
        core 
            admin                   // 后台管理系统     
            services                // 全局服务注册中心
        guard                       // 路由守卫
        model                       // interface
        pages                       // 业务页面
        services                    // 全局api服务
        shared                      // 共享
        utils                       // 工具
        app.module                  // web
        app.server.module           // ssr

```


### 用户划分
    访客  
    管理员
    普通用户

## Scripts

```shell script

    yarn start
    yarn build
    yarn lint

    yarn build:ssr                  // ssr
    yarn publish                    // github.io 发布

    sh build.lin.sh                 // 构建projects依赖

```

[Preview]: https://guobin211.github.io/antd-pro-angular/dashboard
[antd-pro-ng]: https://github.com/guobin211/antd-pro-angular


[FAQ]: https://github.com/guobin211/antd-pro-angular/issues
