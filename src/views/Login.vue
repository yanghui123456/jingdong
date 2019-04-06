<template>
    <div class="login">
        <img class="headimg" src="//img.alicdn.com/imgextra/i1/78/O1CN01BC1ujS1CRlPC2AddJ_!!78-0-luban.jpg" alt="">
        <cube-form
                :model="model"
                :schema="schema"
                @submit="submitHandler"></cube-form>
    </div>
</template>
<script>
    export default{
        data() {
            return{
                model:{
                    username:'',
                    password:''
                },
                schema:{
                    fields:[
                        // 用户名配置
                        {
                            type: 'input',
                            modelKey: 'username',
                            label:'用户名',
                            props: {
                                placeholder:'请输入用户名'
                            },
                            rules: {
                                // 用户名表单的校验规则
                                required: true,
                                type:'string',
                                min:3,
                                max:15
                            },
                            trigger:'blur', // 失去焦点时触发校验
                            messages: {
                                required: '用户名不能为空',
                                min:'用户名不能少于3个字符',
                                max:'用户名不能大于15个字符'
                            }
                        },
                        // 密码配置
                        {
                            type: 'input',
                            modelKey: 'password',
                            label:'密码',
                            props: {
                                placeholder:'请输入密码',
                                type:'password',
                                eye:{
                                    open:false
                                }
                            },
                            rules: {
                                // 密码表单的校验规则
                                required: true
                            },
                            trigger:'blur', // 失去焦点时触发校验
                            messages: {
                                required: '用户名不能为空',
                                min:'用户名不能少于3个字符',
                                max:'用户名不能大于15个字符'
                            }
                        },
                        // 注册按钮
                        {
                            type:'submit',
                            label:'登录'
                        }
                    ]

                }
            }
        },
        methods:{
            // async 表示这个接口是异步的接口
            async submitHandler(e) {
                e.preventDefault(); // 阻止表单的默认事件，刷新页面
                try {
                    const result = await this.$http.get('/api/login',{params:this.model})
                    console.log(result)
                    if (result.code == '0000') {
                        console.log('登录成功')
                        // 将token保存在vuex和localstorage中
                        // vuex commit 的是store中mutations中的方法
                        this.$store.commit('setToken',result.token);
                        window.localStorage.setItem('token',result.token);
                    } else {
                        alert('账号或者密码错误')
                    }
                }catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>
<style scoped lang="stylus">
    .login
        .headimg
            width:100%;
            height:150px;
</style>