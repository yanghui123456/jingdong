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
                 // 注册接口
                  // 模拟数据库已经注册的用户
                 let userpoor = [
                     {username: 'yanghui',password:'123456'}
                 ]
                 app.get('/api/register',(req,res)=>{
                     const {username,password} = req.query;
                     const userlength = userpoor.filter(v=>v.username = username).length;
                     if (userlength > 0) {
                        res.json({
                            success:false,
                            message:'用户名已存在'
                        })
                     } else{
                         res.json({
                             success:true,
                             message:'注册成功'
                         })
                    }
                 })
                 // 登录接口
                 let tokenkey = 'yanghui';
                 app.get('/api/login',(req,res)=>{
                     const {username,password} = req.query;
                     var queryData = req.query;
                     if(queryData.username == 'yanghui' && queryData.password == '123456') {
                         res.json({
                            code:'0000',
                            message:'登录成功',
                             token:tokenkey + '-' + username
                         })
                     } else {
                         res.json({
                             code:'0001',
                             message:'登录失败'
                         })
                     }
                 })
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
