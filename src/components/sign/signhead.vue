<template>
    <header class="signhead">
        <div class="shback" @click="toback"></div>
        <div class="shtitle" v-changetitle :data-shtypes="$route.name"></div>
        <div class="shnav" @click="clicknav"></div>
        <ul class="shnavul" v-show="!shownav">
            <li @click="$router.push({path:'/'})">
                <p style="background-image:url(src/img/sign/sign_head_3.png)"></p>
                <span>首页</span>
            </li>
            <li @click="$router.push({path:'/classify'})">
                <p style="background-image:url(src/img/sign/sign_head_4.png)"></p>
                <span>分类</span>
            </li>
            <li @click="$router.push({path:'../car'})">
                <p style="background-image:url(src/img/sign/sign_head_5.png)"></p>
                <span>购物车</span>
            </li>
            <li @click="$router.push({path:'../my'})">
                <p style="background-image:url(src/img/sign/sign_head_6.png)"></p>
                <span>我的</span>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        directives:{
            'changetitle':function(e){
                if(e.dataset.shtypes == 'login'){
                    e.innerText = '会员登录';
                }else if(e.dataset.shtypes == 'register'){
                    e.innerText = '注册新用户';
                };
            }
        },
        data:function(){
            return {
                'shownav': true
            }
        },
        methods:{
            'clicknav':function(){
                this.shownav = !this.shownav;
            },
            'toback':function(){
                window.history.back();
            }
        }
    };
</script>

<style lang="scss">
    .signhead{position:relative;background:rgba(250,250,250,0.9);border-bottom: 2px solid #e4e4e4;}

    .shtitle{margin:0 auto;width:30%;line-height:1.2rem;text-align:center;color:#232323;font-size:0.533333rem;}

    .shback{position:absolute;left:0.32rem;top:0.28rem;width:0.64rem;height:0.64rem;background:url(../../img/sign/sign_head_1.png) center center no-repeat;background-size:contain;}

    .shnav{position:absolute;right:0.426667rem;top:0.28rem;width:0.64rem;height:0.64rem;background:url(../../img/sign/sign_head_2.png) center center no-repeat;background-size:contain;}

    .shnavul{overflow: hidden;border-top: 2px solid #e4e4e4;background:#fff;}
    .shnavul li{float:left;width:25%;height:1.333333rem;text-align:center;font-size:0.32rem;}
    .shnavul p{width:0.533333rem;height:0.533333rem;margin:0.16rem auto 0.106667rem auto;background-position:top center;background-repeat:no-repeat;background-size:contain;}
</style>
