import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
// unplugin-icon
import Icons from 'unplugin-icons/vite'
// 自動解析 icon
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 在 vite 中可解析所有 @ 開頭之路徑
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    Vue(),
    Pages(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
        }),
      ]
    }),
    Icons()
  ],
})
