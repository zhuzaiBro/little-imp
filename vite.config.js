import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            // 选项写法
            '/api': {
                target: 'http://localhost:7001',
                changeOrigin: true,
            },
            '/upload': {
                target: "http://localhost:7001",
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
    }
})