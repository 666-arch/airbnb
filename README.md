# 关于 unoCSS 集成
### 安装 unoCSS
> pnpm add -D unocss
### 在项目根目录创建 `uno.config.ts` 文件
rules：可在此配置自定义的 css 规则
```ts
import { defineConfig, presetWind3 } from "unocss";
export default defineConfig({
    presets: [
        presetWind3()
    ],
    rules: [
        [/^shadow-custom-(\d+)$/, ([, d]) => ({
            'box-shadow': `0 ${d}px ${Number(d) * 2}px rgba(0,0,0,0.3)`
        })]
    ]
})
```
### vite配置文件
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons } from 'unocss'
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({ //添加 unocss 插件
      presets: [
        presetAttributify(), //将css预设成属性的方式进行配置
        presetIcons()//将图标作为数据源 应用到 div 上
      ]
    })
  ],
})
```

### main.ts
```ts
import "virtual:uno.css";
```
### 使用方式
```html
<div className="flex flex-1 justify-end items-center"></div>
```