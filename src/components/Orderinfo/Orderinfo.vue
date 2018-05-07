<template>
    <div id="orderinfo">
        <div class="header-bar">
        <router-link to="/car" class="icon-arrow-left"><img src="//img02.hua.com/m/icon/headChevronLeft.png" /></router-link><p>填写订单</p><router-link to=""></router-link>
        </div>
        <div class="main">
            <div class="shopping_box">
            <div class="sh_name">
                <p>
                    收货人姓名：<input type="text" name="to_name" class="to_name" id="to_name" value="">
                </p>
            </div>
            <div class="sh_phone">
                <p>
                    收货人手机：<input type="tel" maxlength="11" class="to_mobile" name="to_mobile" id="to_mobile" value="">
                </p>
            </div>
            <input type="hidden" name="delivery_prov" id="delivery_prov" value="">
            <input type="hidden" name="delivery_city" id="delivery_city" value="">
            <input type="hidden" name="delivery_area" id="delivery_area" value="">
            <input type="hidden" name="delivery_area_code" id="delivery_area_code" value="">
            <div class="city" id="showCityPicker">
                <div>
                    <span style="float:left;line-height:43px;">配送地区：</span>
                    <div class="city_data">
                        <div id="cityResult" class="ui-alert" style="width:86%"></div>
                    </div>
                    <span class="go_into" style="margin-top:13px;"></span>
                </div>
            </div>
            <div class="address">
                <div>
                    <span style="float:left;">详细地址：</span><textarea maxlength="41" name="to_address" id="to_address" style="resize: none; ; overflow-y: hidden;"></textarea>
                </div>
            </div>
            <div class="date" style="float:none;margin:0px;">
                <p>
                    送达日期：<span class="date_num" id="riqiText"></span>
<span class="go_into"></span>                </p>
                <p class="tip_text" style="display:none" id="dateInfo"></p>
            </div>
            <input type="hidden" name="cRiqi" id="cRiqi" value="">
    
    <div class="porduct">
                    <div class="single">
                        <img src="//img01.hua.com/uploadpic/newpic/9010966.jpg_80x87.jpg">
                        <div class="price_num">
                            <p class="pro_price">￥<span id="p9010966">245</span></p>
                            <p class="order_pro_num">x<span id="s9010966">1</span></p>
                        </div>
                        <p class="detail_text"></p>
                    </div>

            </div>


    <div class="order_person">
        <div class="op_name">
            <p>
                <span class="name_key" style="float:left">您的姓名：</span>
                <input type="text" name="realname" id="realname" value="～whyuge、" style="width:54%;padding-left:14px" class="name_box">
            </p>
        </div>
        <input type="hidden" name="isChooseMobile" id="isChooseMobile" value="1">
        <input type="hidden" name="isJumpMobile" id="isJumpMobile" value="0">
        <input type="hidden" name="isJumpEmail" id="isJumpEmail" value="0">
        <div class="op_email">
            <div>
                <span class="email_key" style="float:left">您的手机：</span>
                <span class="switch_btn">无手机</span>
                <input type="tel" name="mobile" id="mobile" value="" style="width:54%;padding-left:14px" class="phone_box" maxlength="11">
                <div class="email_autocomplete">
                    <input type="text" name="Email" id="Email" value="" style="width:83%;display:none;padding-left:14px" class="email_box" autocomplete="off" nodetype="email" config="{width:245,height:35}">
                </div>
            </div>
        </div>
        <div class="op_password" style="display:none;">
            <p>
                <span>您的密码：</span>
                <input type="password" name="userPass" id="userPass" placeholder="填写密码完成注册" style="font-size:12px;padding-left:14px;" onclick="DoValidEmail()">
            </p>
        </div>
        <div class="op_phone" style="display:none;">
            <p>
                <span>您的电话：</span>
                <input type="tel" name="userTel" id="userTel" value="" placeholder="请填写完整区号" style="font-size:12px;padding-left:14px;">
            </p>
        </div>
    </div>

            
                <div class="message">
                    <div>
                        <p>
                            贺卡留言：<span style="color:#999;" class="fill">（选填）</span>
                            <span style="overflow:hidden;float:right">
                                <span class="go_into"></span>
                            </span>
                        </p>
                        <p class="message_text" style="display:none" id="msgInfo"></p>
                    </div>
                </div>
                        <div class="tip">
                <div class="tip_box">
                    <p>
                        备注／发票／优惠券<span style="color:#999;" class="fill">（选填）</span>
                        <span class="go_into"></span>
                    </p>

                    <p class="tip_text" style="display:none" id="fpInfo">

                </p>
            </div>
           </div>
            </div>
        </div>

        <div class="footer-bar">
        <p>实付款：￥<span></span><button @click="accounts">去结算</button></p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            accounts(){
                alert('客官不要急，功能有待开发')
            }
        }
    }
</script>

<style lang="css" >
@import '../../style/base.css';
@import '../../style/Orderinfo.css';
</style>