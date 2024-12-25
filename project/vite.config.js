import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // 确保使用相对路径
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true, // 构建前清空输出目录
  }
})