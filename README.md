Address book demo
==================

Address book 是一个用来演示vuejs制作一个地址簿的代码片段。

# Run

浏览器打开 index.html

# Dependencies

- vuejs
- vue-resource
- webpack
- underscore

# Build

yarn
```
yarn install
yarn webpack
```

npm
```
npm install -g webpack
webpack
```

# Dev
```shell
yarn webpack-dev-server
```

or

```shell
node node_modules/webpack-dev-server/bin/webpack-dev-server.js
```
index.html的`<script src="dist/bundle.js"></script>`修改成`<script src="bundle.js"></script>`

# Description

`src/addressbooks.js` 管理数据模型。`src/app.vue`Vue的视图组件，代码已经移动到`src/app.js`
，`app.js`保存视图组件的代码，比如增加、编辑删除等各项操作的行为方法。`app.js`调用`addressbooks.js`
完成所有对数据对操作。

TODOs:

> 分离Service和Model

**src/addressbooks.js methods**

- removeAllSelected 删除所有选择的地址项
- selectAllRowsIfFirstIsSelected 选择所有的地址项，如果第一行被选择
- createEmptyAddressBook 创建一个空的地址
- append 把地址添加到地址簿
- sort 排序
- dirty 查询脏数据
- resetDirty 重置脏数据的追踪

## 脏数据

参考`UnitWork` Martin folwer 的设计模式，标记修改的数据，并提供一个查询所有的脏数据的方法。
Client查询出脏数据然后提交修改。