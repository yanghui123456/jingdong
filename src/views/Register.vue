<template>
    <div class="register">
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
                        label:'注册'
                    }
                ]

            }
        }
    },
    methods:{
        submitHandler(e) {
            e.preventDefault(); // 阻止表单的默认事件，刷新页面
            console.log('注册了')
            // 自己写的接口
            this.$http.get('/api/register',{
                params:this.model
            }).then(res=>{
                console.log('注册成功')
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style scoped lang="stylus">
    .register
        .headimg
            width:100%;
            height:150px;
</style>