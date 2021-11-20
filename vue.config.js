module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import '@/assets/styles/reset.scss';
          @import '@/assets/styles/color.scss';
          @import '@/assets/styles/mixin.scss';
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/alpha-shop-vue/' : '/',
}
