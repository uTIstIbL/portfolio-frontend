import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 指定 Markdown 文件的根目錄
  srcDir: "./content", // 如果你的 Markdown 文件在 `docs` 資料夾中

  title: "Aaron",
  description: "portfolio-vitepress-app",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "關於我", link: "/" },
      { text: "簡歷", link: "/resume" },
      { text: "聯絡我", link: "/contact" },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/uTIstIbL" }],

    footer: {
      message: "特別感謝 Vitepress 提供版型 ",
      copyright:
        'Copyright © 2025- <a href="https://github.com/uTIstIbL" target="_blank">Aaron</a>',
    },
  },
});
