<template>
    <div class="f_register">
        <signhead></signhead>
        <div class="rg_main">
            <div class="rg_tag" :data-tagtypes="tagtypes" @click="rgchange">
                <span data-tagtypes="rg_phone" :class="{'rg_tagsp':classtag}">手机注册</span><span data-tagtypes="rg_email" :class="{'rg_tagsp':!classtag}">邮箱注册</span>
            </div>
            <cmpform :is="tagtypes"></cmpform>
            <div class="rg_help">找回密码</div>
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
                'tagtypes':'rg_phone',
                'classtag':true
            }
        },
        methods:{
            'rgchange':function(e){
                var t = e.target;
                if(t.dataset.tagtypes == 'rg_phone'){
                    this.tagtypes = 'rg_phone';
                    this.classtag = true;
                }else if(t.dataset.tagtypes == 'rg_email'){
                    this.tagtypes = 'rg_email';
                    this.classtag = false;
                };
            }
        },
        components:{
            signhead,
            'rg_phone':{
                template:
                `<form class="rg_form">
                    <input class="rg_btn" type="text" maxlength="11" placeholder="请输入手机号码" v-model="uname"/>
                    <p style="color:red;">{{al1}}</p>
                    <label>
                        <input class="rg_btn" type="text" maxlength="4" placeholder="请输入验证码" v-model="num4"/><span class="rg_verify" @click="ran4">{{sm4}}</span>
                    </label>
                    <p style="color:red;">{{al2}}</p>
                    <input class="rg_btn rg_btn2" type="text" maxlength="6" placeholder="请输入短信验证码" v-model="num6"/><input class="rg_btn3" type="button" value="获取短信验证码" @click="ran6"/>
                    <p style="color:red;"><span style="padding:0 2%;color:#888;">{{sm6}}</span><span>{{al4}}</span></p>
                    <input class="rg_btn4" type="button" value="注册" @click="rgphone">
                </form>`,
                data:function(){
                    return {
                        'sm4':cmrannum(4),
                        'num6':'',
                        'uname':'',
                        'num4':'',
                        'sm6':'短信验证码',
                        'al1':'',
                        'al2':'',
                        'al4':''
                    };
                },
                methods:{
                    'ran4':function(){
                        this.sm4 = cmrannum(4);
                    },
                    'ran6':function(){
                        this.sm6 = cmrannum(6);
                    },
                    'rgphone':function(){
                        var vm = this;
                        var regphone = /^[1][3,4,5,7,8][0-9]{9}$/;
                        this.al1 = regphone.test(this.uname) ? '' : '请输入正确手机号';
                        this.al2 = (this.num4 == this.sm4) ? '' : '验证码不正确';
                        this.al4 = (this.num6 == this.sm6) ? '' : '短信验证码不正确';
                        if(regphone.test(this.uname) && (this.num4 == this.sm4) && (this.num6 == this.sm6)){
                            var pramas = {
                                'rgtype':'phone',
                                'uname':this.uname
                            };
                            ajax.post('sign/signup',pramas).then(function(res){
                                if(res.data.status){
                                    localStorage.setItem('huaUserToken',res.data.data);
                                    vm.$router.push({path:'/my'});
                                }else{
                                    vm.al1 = '此手机号已经被注册';
                                }
                            });
                        };
                    }
                }
            },
            'rg_email':{
                template:
                `<form class="rg_form">
                    <label>
                        <input class="rg_btn" type="text" maxlength="4" placeholder="请输入验证码" v-model="num4"/><span class="rg_verify" @click="ran4">{{sm4}}</span>
                    </label>
                    <p style="color:red;">{{al2}}</p>
                    <input class="rg_btn" type="text" placeholder="请输入邮箱" v-model="uname"/>
                    <p style="color:red;">{{al1}}</p>
                    <label>
                        <input class="rg_btn" :type="pswtype" maxlength="20" placeholder="请设置6-20位字母和数字登录密码" v-model="upsw"/><i class="rg_showpsw" :style="stylepsw" v-bind:showpsw="showpsw" @click="clickpsw"></i>
                    </label>
                    <p style="color:red;">{{al3}}</p>
                    <input class="rg_btn4" type="button" value="注册" @click="rgemail">
                </form>`,
                data:function(){
                    return {
                        'sm4':cmrannum(4),
                        'num4':'',
                        'uname':'',
                        'upsw':'',
                        'al1':'',
                        'al2':'',
                        'al3':'',
                        'showpsw':'hide',
                        'pswtype':'password'
                    };
                },
                computed:{
                    'stylepsw':function(){
                        if(this.showpsw == 'show'){
                            return {'background':'#fb3','border':'2px solid #f60'};
                        }else{
                            return {'background':'#eee','border':'2px solid #ccc'};
                        };
                    }
                },
                methods:{
                    'clickpsw':function(){
                        if(this.showpsw == 'show'){
                            this.showpsw = 'hide';
                            this.pswtype = 'password';
                        }else{
                            this.showpsw = 'show';
                            this.pswtype = 'text';
                        };
                    },
                    'ran4':function(){
                        this.sm4 = cmrannum(4);
                    },
                    'rgemail':function(){
                        var vm = this;
                        var regemail = /^[a-z0-9]+([._\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
                        var regpsw = /^[a-zA-Z0-9]{6,20}$/;
                        this.al1 = regemail.test(this.uname) ? '' : '请输入正确邮箱';
                        this.al2 = (this.num4 == this.sm4) ? '' : '验证码不正确';
                        this.al3 = regpsw.test(this.upsw) ? '' : '密码需要6~20位字母和数字组合,无特殊符号';
                        if(regemail.test(this.uname) && (this.num4 == this.sm4) && regpsw.test(this.upsw)){
                            var pramas = {
                                'rgtype':'email',
                                'uname':this.uname,
                                'upsw':this.upsw
                            };
                            ajax.post('sign/signup',pramas).then(function(res){
                                if(res.data.status){
                                    vm.$router.push({path:'/my'});
                                }else{
                                    vm.al1 = '此帐号已经被注册';
                                }
                            });
                        };
                    }
                }
            }
        }
    };
</script>

<style lang="scss">
    @import '../../style/base.css';
    @import '../../style/flower.css';

    .f_register{height:100%;}

    .rg_tag{margin:0.186667rem;border: 2px solid rgb(254,108,108);color: rgb(51,51,51);font-size: 0.4rem;}
    .rg_tag span{display: inline-block;width:50%;height:0.933333rem;line-height::0.933333rem;text-align: center;}
    .rg_tagsp{background:rgb(254,108,108);color:#fff;}

    .rg_form{padding:0.186667rem;}
    .rg_btn{width: 100%;height:1.333333rem;margin:0.133333rem 0;padding: 0.213333rem;border: 2px solid #e2e2e2;background-color: #F9F9F9;line-height:1.333333rem;font-size:0.4rem;outline: none;}
    .rg_form label{position:relative;display:block;}
    .rg_showpsw{display:block;position:absolute;top:0.293333rem;right:0.4rem;width:1rem;height:1rem;background:#ddd;border-radius:50%;}
    .rg_verify{position:absolute;top:0.32rem;right:0.186667rem;display:block;width:2.133333rem;height:0.933333rem;background:#fff;border-left:2px solid #e2e2e2;text-align:center;line-height:0.933333rem;font-size:0.426667rem;}
    .rg_btn2{width:50%;margin-right:2%;vertical-align:middle;}
    .rg_btn3{width:48%;height:1.333333rem;border: 1px solid #f60;color: #f60;text-align:center;background-color: #fff;line-height:1.333333rem;font-size:0.4rem;outline: none;vertical-align:middle;}
    .rg_btn4{width: 100%;height:1.333333rem;margin:0.533333rem 0;background-color: #f60;color:#fff;font-size:0.533333rem;outline: none;border:0 none;}

    .rg_help{margin-left:0.186667rem;color: #666;font-size:0.4rem;}
</style>