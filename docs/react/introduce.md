---
order: 0
chinese: Ant Mobile of React
---

Ant Mobile是 AntUI 的 React 实现，开发和服务于蚂蚁大中台无线业务。

<div class="pic-plus">
  <img width="150" src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block!important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>


## 特性

- 基于AntUI（支付宝客户端）视觉规范。
- 基于 React 的组件化开发模式,精心开发了AntUI样式规范包含的所有UI组件。复杂组件则由[React Component](http://react-component.github.io/badgeboard/)提供大力支持,在其基础上再进行封装,保证组件的高质量。
- 基于 npm + webpack + babel 的工作流，支持 ES2015。

## 示例

```jsx
import { Button } from 'antm';
ReactDOM.render(<Button>按钮</Button>, mountNode);
```
引入样式：

```jsx
import 'antm/lib/index.css';
```

## 版本

- 稳定版：[![npm package](http://web.npm.alibaba-inc.com/badge/v/@alipay/antm.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@alipay/antm)
- 开发版：[![npm package](http://web.npm.alibaba-inc.com/badge/v/@alipay/antm.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@alipay/antm)

## 浏览器支持

ios & android4.0+

## 链接

- [构建调试工具](https://github.com/ant-design/antd-bin)
- [React 模块](http://react-component.github.io/)
- [React 代码规范](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md)
- [组件设计原则](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md)

## 谁在使用

- 蚂蚁金服

## 欢迎参与

有任何建议或意见您可以进行发个issue [提问](http://gitlab.alipay-inc.com/react-ui/ant-mobile/issues)。