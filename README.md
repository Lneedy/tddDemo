# TDDDemo

基于 TDD 仿照 饿了么 UI 项目

## 目录结构

```shell
|   .browserslistrc
|   .eslintrc.js
|   .gitignore
|   babel.config.js
|   jest.config.js
|   package-lock.json
|   package.json
|   README.md
|   public
|   src
|   assets
|   App.vue
|   main.js
|
|—— components  组件库
|   | Notification
|
|—— router  demo 路由
|   | index.js
|
|—— views demo 模板
|   | Home.vue 首页模板
|   | Detail.vue 组件详情模板
|
|—— tests 测试用例
|   |—— unit 单元测试
|   |   | notification.spec.js
```

## 基础架构

| 构建工具 | 基础 | css 预编译 | 打包工具 | 包管理 | 测试框架 |
| :------: | :--: | :--------: | :------: | :----: | :------: |
| vue-cli  | Vue  |  postcss   | webpack  |  npm   |   jest   |

## 组件说明

|     组件     | 名称 |          位置          |            测试用例             |
| :----------: | :--: | :--------------------: | :-----------------------------: |
| Notification | 通知 | src/notification/index | tests/unit/notification.spec.js |

## 开发流程

编写功能测试实例 -> 实现功能逻辑

## 开发日志

### 需求分析

#### Notification

1. 支持设置标题
1. 支持设置说明文字
1. 提供默认样式
1. 支持设置是否显示关闭按钮
1. 支持自定义类名
1. 支持显示时间
1. 支持设置位置
1. 关闭后回调
