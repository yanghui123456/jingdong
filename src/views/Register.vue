<template>
    <div>
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
                userName:'',
                passWord:''
            },
            schema:{
                fields:[
                    // 用户名配置
                    {
                        type: 'input',
                        modelKey: 'userName',
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
                        modelKey: 'passWord',
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
        }
    }
}
</script>
<style scoped lang="stylus"></style>