import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
    }),
  ],
  // 配置css模块化开发的规则，可以使用驼峰命名法来表示样式类名
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
