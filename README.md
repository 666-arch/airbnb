# 关于 unoCSS 集成
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
### main.ts
```ts
import "virtual:uno.css";
```
### 使用方式
```html
<div className="flex flex-1 justify-end items-center"></div>
```