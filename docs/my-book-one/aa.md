# 特殊语法演示

## VUE组件演示：

组件默认全局注册，无需引入，直接使用 `/docs/.vuepress/components` 下的文件名即可。

注意：

  1. 请使用**大驼峰**（或带有 `-` ），不然会被误认为是原生`html`
  2. 若在文件夹内的组件使用 `-` 连接文件夹和文件名

<Demo>
  <Box />
</Demo>

::: details 点击查看代码（直接书写）
```vue {3}
<template>
  <div class="box-container">
    假装写一点，并且我被高亮了
  </div>
</template>
```
:::

写点正文

::: details 点击查看代码（直接引入文件）
<<< @/docs/.vuepress/components/Box.vue
:::

## 图片演示

md语法引用图片

![sea](~@img/sea.png)

::: details 查看语法
```md
![sea](~@img/sea.png)
```
:::


直接使用h5标签

<img src="~@img/sea.png"></img>

::: details 查看语法
```html
<img src="~@img/sea.png" />
```
:::