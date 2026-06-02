import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 开启静态导出
  basePath: '/dlgchg', // 必须配置为你的 GitHub 仓库名称（注意包含斜杠）
  assetPrefix: '/dlgchg', // 配合 basePath
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 的图片优化服务，必须关闭
  },
};

export default nextConfig;
