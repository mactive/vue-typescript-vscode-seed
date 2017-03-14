# vue-typescript-vscode-seed

> vue2 + typescript2 + webpack + vue-class-component(官方) 装饰器
> typescript module load template 
> package document without vue single file template

- [ ] less/sass 依赖关系和整合 ts + webpack require
- [ ] 1.1 尝试 av-ts
- [ ] 1.2 尝试.vue文件中引入 ts文件
- [ ] component/plugin/directive example
- [ ] vuex integration
- [ ] 更多的注解使用方式 / 不需要注解的写法

## 另一个尝试的方向

(vue-typescript-component)[https://github.com/locoslab/vue-typescript-component],
将编译好的 *.ts 文件引入 .vue文件中

不过最好是基于webpack栈的,受众会比较广一些.

```html
<template>
...
</template>

<script>
module.exports = require('./example.ts').default.vueComponentOptions
</script>
```



## Build Setup

``` bash

# install dependencies
npm install

# make sure you have typescript cli global and typings
npm install typescript -g
npm install typings -g

# install typescript typings
npm run typings
> vue2 不需要在安装typings, npm包里面已经有了
> typings install dt~node --global --save
> typings install dt~jquery --global --save

# serve with hot reload at localhost:4040
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
