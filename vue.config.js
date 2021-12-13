const Mode = require('frontmatter-markdown-loader/mode');

module.exports = {
  "publicPath": "/gaveta/",
  css: {
    extract: true
  },
  chainWebpack: config => {
    config.module
      .rule('frontmatter-markdown-loader')
      
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
        
        .loader('frontmatter-markdown-loader')
        .tap(options => {
          // modify the options...
          return { 
            ...options,
            ...{
              mode: [Mode.VUE_COMPONENT]
            }
          }
        })
        .end()
  }
}