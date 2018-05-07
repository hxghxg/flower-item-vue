<template>
    <div class="f_login">
        <signhead></signhead>
        <div class="lg_main">
            <div class="lg_tag">
                <span @click="loginchange" :data-tagtypes="tagtypes">{{logintag}}</span>
            </div>
            <cmpform :is="tagtypes"></cmpform>
            <div class="lg_help">
                <p :style="lg_help_p1">
                    <i style="background-image:url(src/img/sign/sign_main_1.png)"></i>
                    <span @click="$router.push({path:'/register'})">快速注册</span>
                </p>
                <p :style="lg_help_p2">
                    <i style="background-image:url(src/img/sign/sign_main_2.png)"></i>
                    <span>找回密码</span>
                </p>
            </div>
            <div class="lg_else">
                <p class="lg_else_line"></p>
                <p class="lg_else_title">其他方式登录</p>
                <p class="lg_else_link">
                    <span style="background-image:url(src/img/sign/sign_main_3.png);left:30%;">QQ</span>
                    <span style="background-image:url(src/img/sign/sign_main_4.png);right:30%;">支付宝</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import ajax from '../../utils/httpclient.js';
    import signhead from '../sign/signhead.vue';

    function cmrannum(n){
        var str = '0123456789';
        var res = '';
        for(var i = 0;i < n;i++){
            res += str.charAt(parseInt(Math.random()*n));
        };
        return res;
    };

    export default {
        data:function(){
            return {
                'tagtypes':'lg_email',
                'logintag':'会员帐号登录' 
            }
        },
        computed:{
            'lg_help_p1': function(vm){
                if(vm.tagtypes == 'lg_email'){
                    return {'float':'left'};
                }else if(vm.tagtypes == 'lg_phone'){
                    return {'float':'right'};
                };
            },
            'lg_help_p2': function(vm){
                if(vm.tagtypes == 'lg_email'){
                    return {'float':'right'};
                }else if(vm.tagtypes == 'lg_phone'){
                    return {'display':'none','float':'right'};
                };
            },
        },
        methods:{
            'loginchange':function(){
                if(this.tagtypes == 'lg_email'){
                    this.tagtypes = 'lg_phone';
                    this.logintag = '使用手机验证登录';
                }else if(this.tagtypes == 'lg_phone'){
                    this.tagtypes = 'lg_email';
                    this.logintag = '会员帐号登录';
                };
            }
        },
        components:{
            signhead,
            'lg_email':{
                template:
                `<form class="lg_form">
                    <input class="lg_btn1" type="text" placeholder="请输入邮箱" v-model="uname"/>
                    <p style="color:red;">{{al1}}</p>
                    <input class="lg_btn1" type="password" placeholder="请输入登录密码" v-model="upsw"/>
                    <p style="color:red;">{{al2}}</p>
                    <label class="lg_btn2" name="lg_btn3"><input id="lg_btn3" type="checkbox" checked/>&ensp;一个月内免登录</label>
                    <input class="lg_btn4" type="button" value="登录" @click="lgemail"/>
                </form>`,
                data:function(){
                    return {
                        'uname':'',
                        'upsw':'',
                        'al1':'',
                        'al2':''
                    };
                },
                methods:{
                    'lgemail':function(){
                        var vm = this;
                        vm.al1 = (vm.uname == '') ? '请输入用户名' : '';
                        vm.al2 = (vm.upsw == '') ? '请输入密码' : '';
                        if(vm.uname != '' && vm.upsw != ''){
                            var pramas = {
                                'lgtype':'email',
                                'uname':vm.uname,
                                'upsw':vm.upsw,
                                'token':localStorage.getItem('huaUserToken')
                            };

                            var token = localStorage.getItem('huaUserToken') || '';

                            ajax.post('sign/signin', pramas,{'auth':token}).then(function(res){
                                if(res.data.msg == 'signin'){
                                    localStorage.setItem('huaUserToken',res.data.data);
                                    vm.$router.push({'path':'/my'});
                                }else if(res.data.msg == 'repeat'){
                                    vm.al1 = '此帐号已经登录';
                                }else if(res.data.msg == 'differ'){
                                    localStorage.setItem('huaUserToken',res.data.data);
                                    vm.$router.push({'path':'/my'});
                                }else if(res.data.msg == 'non'){
                                    vm.al1 = '帐号不存在';
                                }else if(res.data.msg == 'errpsw'){
                                    vm.al2 = '密码错误';
                                }else{
                                    vm.al1 = '请重新登录';
                                }
                            });
                        }
                    }
                }
            },
            'lg_phone':{
                template:
                `<form class="lg_form">
                    <input class="lg_btn1" type="text" maxlength="11" placeholder="请输入手机号码" v-model="uname"/>
                    <p style="color:red;">{{al1}}</p>
                    <p>
                        <input class="lg_btn5" type="text" maxlength="6" placeholder="输入短信验证码" v-model="num6"><input class="lg_btn6" type="button" value="获取验证码" @click="ran6"/>
                    </p>
                    <p style="color:red;"><span style="padding:0 2%;color:#888;">{{sm6}}</span><span>{{al4}}</span></p>
                    <p class="lg_verify">
                        <input class="lg_btn7" type="text" maxlength="6" placeholder="验证码" v-model="num4"/><i @click="ran4">{{sm4}}</i><span @click="ran4">看不清 , 换一张</span>
                    </p>
                    <p style="color:red;">{{al2}}</p>
                    <input class="lg_btn4" type="button" value="登录" @click="lgphone"/>  
                </form>`,
                data:function(){
                    return {
                        'uname':'',
                        'al1':'',
                        'num6':'',
                        'sm6':'短信验证码',
                        'al4':'',
                        'num4':'',
                        'sm4':cmrannum(4),
                        'al2':''
                    };
                },
                methods:{
                    'ran4':function(){
                        this.sm4 = cmrannum(4);
                    },
                    'ran6':function(){
                        this.sm6 = cmrannum(6);
                    },
                    'lgphone':function(){
                        var vm = this;
                        var regphone = /^[1][3,4,5,7,8][0-9]{9}$/;
                        vm.al1 = regphone.test(vm.uname) ? '' : '请输入正确手机号码';
                        vm.al2 = (vm.num6 == vm.sm6) ? '' : '短信验证码不正确';
                        vm.al4 = (vm.num4 == vm.sm4) ? '' : '验证码不正确';

                        if(regphone.test(vm.uname) && vm.num6 == vm.sm6 && vm.num4 == vm.sm4){
                            var pramas = {
                                'lgtype':'phone',
                                'uname':vm.uname,
                                'token':localStorage.getItem('huaUserToken')
                            };

                            var token = localStorage.getItem('huaUserToken') || '';

                            ajax.post('sign/signin', pramas,{'auth':token}).then(function(res){
                                if(res.data.msg == 'signin'){
                                    localStorage.setItem('huaUserToken',res.data.data);
                                    vm.$router.push({'path':'/my'});
                                }else if(res.data.msg == 'repeat'){
                                    vm.al1 = '此帐号已经登录';
                                }else if(res.data.msg == 'differ'){
                                    localStorage.setItem('huaUserToken',res.data.data);
                                    vm.$router.push({'path':'/my'});
                                }else if(res.data.msg == 'non'){
                                    vm.al1 = '此帐号未注册';
                                }else{
                                    vm.al1 = '请重新登录';
                                }
                            });
                        }
                    }
                }
            }
        }
    };
</script>

<style lang="scss">
    @import '../../style/base.css';
    @import '../../style/flower.css';

    .f_login{height:100%;}

    .lg_main{padding:0 0.213333rem;}

    .lg_tag{overflow:hidden;}
    .lg_tag span{display: block;float: right;line-height: 1.066667rem;color: #f60;font-size:0.373333rem}

    .lg_btn1{width: 100%;height:1.2rem;margin:0.133333rem 0;padding: 0.213333rem;border: 2px solid #e2e2e2;background-color: #F9F9F9;line-height: 1.28rem;font-size: 0.373333rem;outline: none;}
    .lg_btn2{width: 100%;height:1.2rem;margin:0.133333rem 0;padding: 0.213333rem;line-height: 1.28rem;font-size: 0.373333rem;}
    #lg_btn3{width:0.48rem;height:0.48rem;vertical-align:middle;}
    .lg_btn4{background-color: #F60;width: 100%;height: 1.066667rem;margin: 0.266667rem auto;line-height: 1.066667rem;border:0 none;color: #fff;font-size: 0.426667rem;outline: none;}

    .lg_btn5{width: 40%;height:1.2rem;margin:0.133333rem 2% 0.133333rem 0;padding: 0.213333rem;border: 2px solid #e2e2e2;background-color: #F9F9F9;line-height: 1.28rem;font-size: 0.373333rem;outline: none;vertical-align:middle;}
    .lg_btn6{width: 58%;height:1.2rem;margin:0.133333rem 0;background-color: #FFAD0D;line-height: 1.28rem;font-size: 0.373333rem;color:#fff;border:0 none;outline: none;vertical-align:middle;}
    .lg_btn7{width:24%;height:1.2rem;margin:0.133333rem 0;padding: 0.213333rem;border: 2px solid #e2e2e2;background-color: #F9F9F9;line-height: 1.28rem;font-size: 0.373333rem;outline: none;vertical-align:middle;}
    .lg_verify i{display:inline-block;width:2.666667rem;height:1.066667rem;margin:0 2%;border:2px solid #e2e2e2;vertical-align:middle;line-height:1.066667rem;font-size:0.426667rem;text-align:center;}
    .lg_verify span{font-size:0.373333rem;}

    .lg_help{overflow:hidden;}
    .lg_help p{height:1.2rem;line-height:1.2rem;font-size:0.373333rem;color: #666;}
    .lg_help i{display:inline-block;width:0.4rem;height:0.533333rem;margin-top:-0.08rem;background-position:center center;background-repeat:no-repeat;background-size:contain;vertical-align:middle;}

    .lg_else{position: relative;margin-top:0.533333rem;}
    .lg_else_line{position: absolute;z-index: 0;top: 0.533333rem;width: 80%;height: 2px;margin:0 10%;background-color: #ddd;}
    .lg_else_title{position: relative;z-index:2;width: 32%;height: 0.933333rem;margin: 0 auto;background: #fff;color: #333;font-size:0.4rem;line-height: 0.933333rem;text-align: center;}
    .lg_else_link{position:relative;top:0.4rem;height:1.866667rem;}
    .lg_else_link span{position:absolute;display:inline-block;width:1.2rem;height:0.533333rem;padding-top:90px;text-align:center;background-size:contain;background-position:top center;background-repeat:no-repeat;}
</style>

 <!-- <p style="width:1.333333rem;height:1.066667rem;background:#ddd;" @click="aaa">aaa</p> -->
<!-- ,
            'aaa':function(){
                var pramas = {
                    'token':localStorage.getItem('huaUserToken'),
                    'userlist':JSON.stringify([{'a':'a'},{'b':'b'}])
                };

                var token = localStorage.getItem('huaUserToken') || '';

                ajax.post('product/userlist', pramas,{'auth':token}).then(function(res){
                    console.log(res);
                });
            } -->