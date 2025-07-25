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