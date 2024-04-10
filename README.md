# shop_admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目初始化

```sh
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and
<enter> to proceed)
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
>(*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

```sh
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) n
```

## 组件安装

### element-plus

```sh
npm install element-plus
```

按需引入/自动导入

```vue
npm install -D unplugin-vue-components unplugin-auto-import
```

将以下代码添加到 vue.config.js 里

```js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  //...
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
```

重新运行，如果出现   <font style="color:red">ERROR  TypeError: AutoImport is not a function</font> 错误，则将unplugin-auto-import版本回退一下.

```sh
npm install unplugin-auto-import@0.16.1
```

重新运行，如果出现   <font style="color:red"> ERROR  TypeError: Components is not a function</font> 错误，则将unplugin-vue-components版本回退一下.

```sh
npm install unplugin-vue-components@0.25.2
```

### 添加文件

.env

​	\# .env配置文件,这个文件里面的变量,在开发环境和生产环境,都生效

.env.development

​	\# .env.development配置文件,这个文件里面的变量只在开发环境中生效

.env.production

​	\# .env.production配置文件,这个文件里面的变量只在生产环境中生效

### Icon

```shell
npm install @element-plus/icons-vue
```

main.js

```js
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

### 滑块验证

https://github.com/lirongtong/miitvip-captcha

```sh
npm install makeit-captcha
```

main.js

```js
import MakeitCaptcha from 'makeit-captcha'
import 'makeit-captcha/dist/captcha.min.css'

app.use(MakeitCaptcha)
```

### 动画

vue motion

```sh
npm install @vueuse/motion
```

main.js

```js
import { MotionPlugin } from '@vueuse/motion'
app.use(MotionPlugin)
```























