/**
 * Created by HaoNan on 2019/3/30.
 */
// 将他们暴露出去 注意：【更改该文件后项目必须重启才生效】
 module.exports = {
     // webpack拓展配置项，configureWebpack已经规定好的
     configureWebpack:{
         devServer:{  // 服务器的配置
             port: 8089, // 项目打开的端口号
             open:true, // 是否自动在刘浏览器打开项目
             // mock接口编写的地方--数据
             before(app) {
                 // req:请求的参数， res:返回参数
                 // app.get('请求地址', (req, res)=>{
                 //    res.json({
                 //        xinxi
                 //    })
                 // })
             }
         }
     },
     css: {
       loaderOptions: {
         stylus: {
           'resolve url': true,
           'import': [
             './src/theme'
           ]
         }
       }
     },

     pluginOptions: {
       'cube-ui': {
         postCompile: true,
         theme: true
       }
     }
 }
