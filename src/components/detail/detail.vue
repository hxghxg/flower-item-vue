<template>

        <div id="details">
        <div class="head">
        <div class="bar">
            <a class="icon-arrow-left" @click="routerBack"><img src="//img02.hua.com/m/icon/headChevronLeft.png" alt=""></a>
            <router-link to="/"><img src="//img02.hua.com/m/pro_detail/backhome.png" alt=""></router-link>
        </div>
        <div class="swiper-container">
            <div class="figure swiper-wrapper">
            <div class="swiper-slide">
                <img :src="data.imgurl"/>
            </div>
            <div class="swiper-slide">
                <img src="//img01.hua.com/uploadpic/newpic/201505222016219843.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="//img01.hua.com/uploadpic/newpic/201505222016353906.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="//img01.hua.com/uploadpic/newpic/201512091752561250.jpg"/>
            </div>
            </div>
            <div class="swiper-pagination swiper-pagination-clickable">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            </div>
            <div class="main">
                <div class="title">
                <div class="collect">
                <i>
                <img src="//img02.hua.com/m/pro_detail/icon_collect.png"/>
                </i>
                </div>
                <p class="info">用心爱你用心爱你用心爱你用心爱你用心爱你用心爱你用心爱你用心爱你用心爱你用心</p>
                <p class="price">
                <span class="now_price">￥{{data.price}}</span><del>￥{{data.price*1.1}}</del>
                </p>
                </div>
                <div class="info_huayu_box" style="padding-top:12px;">
            <span style="float:left">花语</span>
            <p class="info_huayu">合计99朵玫瑰，寓意想和你相守，直到天荒地老......<br>33枝粉色玫瑰组成的心形居中，你是我三生三世的爱恋； <br>66枝红玫瑰环绕，周围满天星点缀，我的爱永远不变！</p>
            </div>
            <div class="info_huayu_box">
            <span style="float:left">材料</span>

            <p class="info_huayu cailiao down active">99枝精品玫瑰花束：33枝粉色玫瑰组成的心形居中，66枝红玫瑰环绕，周围满天星点缀 里层粉色纸，外层粉色珠光纱，粉色丝带花结</p>
            </div>
            <div class="info_huayu_box">
            <span class="info_huayu_tip">配送</span>
                <p>
                全国
                </p>
            </div>
            <div class="info_huayu_box">
            <span class="info_huayu_tip">附送</span>
            <p class="info_huayu">下单填写留言，即免费赠送精美贺卡！</p>
            </div>
            <div class="info_huayu_box">
                    <span style="float:left">说明</span>
                    <p class="info_huayu">张杰演唱会纪念款，限期特惠</p>
            </div>

        </div>
        <div class="date_part deliver_select" id="deliver_select">
            <div class="area_select">
                <p class="">
                    配送至<img class="date_icon" src="//img02.hua.com/m/pro_detail/deliver_area_icon.png" alt="">
                    <span id="chooseItem"><span id="psColor">请选择配送地区</span></span>
                    <span class="data_icon_box">
                        <img src="//img02.hua.com/m/pro_detail/more_point.png" alt="">
                    </span>
                </p>
                <p class="xiadan_time" style="color:#fe6600;display:none;" id="showTips1"></p>
            </div>
        </div>
        <div class="deliver_date_area">
        <div class="time_date_box">
            <div class="open_app_box">
                <div class="open_app_arrow">
                    <p class="oppen_app" id="downApp" >App下单再减12元，立即打开</p>
                </div>
            </div>
        </div>
        </div>
        <div class="maidian_box">
            <img src="//img02.hua.com/m/home/img/m_special_flowers.png" alt="卖点">
        </div>
        <div class="bottom_section">
    <!-- 商品信息 -->
    <div class="pro_detail_info">
        <div class="tab_box">
            <div class="img_list">
                <div class="img_box">
                <img class="lazyimg" src="//img01.hua.com/uploadpic/images/2015351622375486239.jpg" before-src="//img01.hua.com/uploadpic/images/2015351622375486239.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/20135141754472204211.jpg" before-src="//img01.hua.com/uploadpic/images/20135141754472204211.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/2013941746108139850.jpg" before-src="//img01.hua.com/uploadpic/images/2013941746108139850.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/20135231754505854419.jpg" before-src="//img01.hua.com/uploadpic/images/20135231754505854419.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/2013514180435128497.jpg" before-src="//img01.hua.com/uploadpic/images/2013514180435128497.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/201417145750534152.jpg" before-src="//img01.hua.com/uploadpic/images/201417145750534152.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/201212251829598951327.jpg" before-src="//img01.hua.com/uploadpic/images/201212251829598951327.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/201212252237588212359.jpg" before-src="//img01.hua.com/uploadpic/images/201212252237588212359.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/201212292355358684909.jpg" before-src="//img01.hua.com/uploadpic/images/201212292355358684909.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/201212252238125874194.jpg" before-src="//img01.hua.com/uploadpic/images/201212252238125874194.jpg"><img class="lazyimg" src="//img01.hua.com/uploadpic/images/2013514182281061358.jpg" before-src="//img01.hua.com/uploadpic/images/2013514182281061358.jpg"><a href="/shopping/soonbuy?pp=9010855&amp;type="><img class="lazyimg" src="//img01.hua.com/uploadpic/images/201415178517704242.jpg" before-src="//img01.hua.com/uploadpic/images/201415178517704242.jpg"></a><img src="//img02.hua.com/pc/images/xianhua_cardstyle.jpg"></div>
                <div class="open_more"><span class="active"></span></div>
            </div>
            </div>
        </div>
        <!-- 商品信息end -->
        </div>
        </div>
    <div class="footer_cart">
    <div class="cart_md">
        <ul>
            <li>
                <a id="kefu">
                    <i class="middle_line"></i>
                    <img src="//img02.hua.com/m/pro_detail/icon_custom_service.png">
                    <span>客服</span>
                </a>
            </li>
            <li class="call_phone">
                <a href="tel:400-889-8188">
                    <i class="middle_line"></i>
                    <img src="//img02.hua.com/m/pro_detail/icon_phone.png" alt="">
                    <span>电话</span>
                </a>
            </li>
            <li>
                <router-link to="car" id="userCart" style="position:relative">
                    <img src="//img02.hua.com/m/icon/bottonmIcon_CartDefault.png" alt="">
                    <span>购物车</span>
                    <span id="cartCount" style="">0</span>
                </router-link to="car">
            </li>
        </ul>
        <router-link to="car" class="go_buy" id="soonBuy" >立即购买</router-link>
        <a class="add_cart" id="addCart"  @click="addCart">加入购物车</a>
        <a href="javascript:void(0);" class="sale_out">售罄/下架</a>
        </div>
        </div>


        </div>

</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import ajax from '../../utils/httpclient.js';


    export default {
        data(){
            return{
                data:{
                    
                },
                id:this.$route.query.id
            }
        },
        //实例创建完成后执行钩子
        created(){
            console.log(this.id)
        },
        mounted(){
            
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationType: 'custom',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 3000,
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                paginationCustomRender: function(swiper, current, total) { 
                      var customPaginationHtml = ""; 
                      for(var i = 0; i < total; i++) { 
                       //判断哪个分页器此刻应该被激活 
                       if(i == (current - 1)) { 
                       customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'; 
                       } else { 
                       customPaginationHtml += '<span class="swiper-pagination-customs"></span>'; 
                    } 
                } 
                      return customPaginationHtml; 
                } 
                
            });
        },
        methods:{
            //返回上一页
            routerBack(){
                this.$router.go(-1);
            },
            addCart(){
                console.log(666)
                var token = localStorage.getItem('huaUserToken') || '';

                        var pramas = {
                            'token':token,
                            'id':this.id,
                            'name':this.data.name,
                            'qty':1,
                            'price':this.data.price,
                        }

                        ajax.post('product/userlistupdate',pramas,{'auth':token}).then(function(res){
                            console.log(res)

                        });
            }

        },
        //$route发生变化时再次赋值id
        watch: {
            '$route':function(){
                this.id=this.$route.query.id;
            }
        },
        
        created(){
            ajax.get('product?id='+this.id).then((res)=>{
                this.data = res.data.data[0];
                console.log(this.data)
            });

        },
        
    }
</script>

<style lang="css" >
@import '../../style/detail.css';
@import '../../style/base.css';
</style>

