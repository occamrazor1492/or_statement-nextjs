/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // 静态导出时不需要使用 image optimization
  images: {
    unoptimized: true,
  },
  // 设定环境变量
  env: {
    // 这里可以添加自定义的环境变量
  },
  // 如果您的应用不在域名的根目录下部署，可以设置basePath
  // basePath: '/your-prefix',
};

module.exports = nextConfig;