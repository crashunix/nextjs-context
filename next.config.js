module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'images.unsplash.com', 'picsum.photos'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
