import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./", // 设置打包路径

  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "src/assets/styles/var.scss";',
      },
    },
  },

  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
