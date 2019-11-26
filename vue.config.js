const path = require('path')

module.exports = {
	devServer: {
	    'proxy': {  //做请求代理用
	      '/cadre': {
	        'target': 'http://www.******',
	        'changeOrigin': true
	      }
	    }
      },
      publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './'

}