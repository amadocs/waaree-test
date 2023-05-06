const data = require('./301_data.json')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
   i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  build: {
    vendor: ['scrollmagic'],    
  },
  plugins: [
    {
      src: '../plugins/scrollmagic' 
    }
  ],
  reactStrictMode: true,
  // assetPrefix: isProd ? 'https://d1i9ayjpmhheod.cloudfront.net' : undefined,
  images: {
    domains: [
      'waareeimages.s3.ap-south-1.amazonaws.com',
      'https://d2ehz7r19zq528.cloudfront.net'
    ],
    },
      headers:
    {
      'Content-Type':'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': 'True',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
  async redirects() { 
    let arr = []
    {data.data.map((redirect) => {
      arr.push(redirect)
    })
    }
  return arr
}
}
