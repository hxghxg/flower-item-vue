<template>
    <div class="my_m">
        <div class="my_t">
            <div class="my_tt">
                <img src="../../svg/左箭头.svg" alt="" @click="routerBack"/>
            </div>
            <p>Hi,欢迎来到花礼网</p>
            <a href="#" @click="$router.push({path:'/login'})">{{userstatus}}</a>
            </div>
        <div>
           <ul class="my_nav">
                <li><i><img src="../../svg/dfk.svg" alt="" /></i>待付款</li>
                <li><i><img src="../../svg/配送.svg" alt="" /></i>今日配送</li>
                <li><i><img src="../../svg/待评价.svg" alt="" /></i>待评价</li>
                <li><i><img src="../../svg/全部订单.svg" alt="" /></i>全部订单</li>
            </ul> 

            <ul class="my_nav2">
                <li><i><img src="../../svg/优惠券.svg" alt="" /></i>优惠券</li>
                <li><i><img src="../../svg/积分.svg" alt="" /></i>积分</li>
                <li><i><img src="../../svg/提醒.svg" alt="" /></i>提醒</li>
                <li><i><img src="../../svg/收藏.svg" alt="" /></i>我的收藏</li>
                <li><i><img src="../../svg/付款方式.svg" alt="" /></i>在线付款</li>
                <li><i><img src="../../svg/联系客服.svg" alt="" /></i>联系客服</li>
                <li><i><img src="../../svg/帮助.svg" alt="" /></i>帮助</li>
                <li><i><img src="../../svg/关于.svg" alt="" /></i>关于花礼</li>
            </ul>
            <div class="my_nav3">
                <span class="fl">账户管理</span><span class="fr">管理收货地址等<i><img src="../../svg/右箭头.svg" alt="" /></i></span>
            </div>
            <div class="zhuanye"><img src="../../img/banner.png" alt="" /></div>
        </div>
    </div>
</template>

<script>
    import ajax from '../../utils/httpclient.js';

  export default{
    data:function(){
        return {
            'userstatus':'登录/注册'
        }
    },
    mounted:function(){
        var vm = this;

        var pramas = {
            'token':localStorage.getItem('huaUserToken')
        };

        var token = localStorage.getItem('huaUserToken') || '';

        if(token){
            ajax.post('mine/userstatus',pramas).then(function(res){
                if(res.data.status){
                    vm.userstatus = res.data.data;
                }else{
                    vm.userstatus = '登录/注册';
                };
            });
        }else{
            vm.userstatus = '登录/注册';
        };

    },
    methods :{
      //返回上一页
        routerBack(){
            this.$router.go(-1);
        }

    }
  }  
</script>

<style lang="scss" >
@import '../../style/my.css';
@import '../../style/base.css';
</style>