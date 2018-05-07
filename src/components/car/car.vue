<template>
    <div id="car">
    <div class="header-bar">
        <a class="icon-arrow-left" @click="routerBack"><img src="//img02.hua.com/m/icon/headChevronLeft.png" /></a><p>购物车</p><router-link to=""></router-link>
    </div>
    <div class="main">
        <ul class="content">
        <li v-for="(item,idx) in data" :data-id="item.id">
        <label><input type="checkbox" @click="selectData(item)" class="selectcheck" /></label>
        <router-link to=""><img v-bind:src="item.imgurl"/></router-link>
        <div class="p-info">
            <p class="p-name">{{item.name}}</p>
            <div class="p-panel">
            <span class="p-price">￥{{item.price}}</span>
            <span class="p-del" @click="delData(idx)">删除</span>
            <div class="p-setNum"><span @click="reduce(idx)">-</span><input type="text" v-model="item.qty" v-on:input="changeQty($event,idx)" /><span @click="add(idx)">+</span></div>
            </div>
        </div>
        </li>
        </ul>

    </div>

    <div class="footer-bar">
        <span>合计:<em class="total">￥{{totalPrice()}}</em></span>
        <router-link to="/orderinfo" type="button" id="jieSuan">去结算<em class="total-num">{{totalQty()}}</em></router-link>
    </div>
    </div>
</template>

<script>
import ajax from '../../utils/httpclient'

  export default{
        data(){
            return{
                data:[],
                selectDatas:[],
            }
        },
        methods:{
            //删除
            delData(idx){
                if(confirm("你确定删除这个商品吗？")){
                        var that = this;
                        var token = localStorage.getItem('huaUserToken') || '';

                        var pramas = {
                            'token':token,
                            'id':that.data[idx]._id
                        }

                        ajax.post('product/userlistdelete',pramas,{'auth':token}).then(function(res){
                            that.data.splice(idx,1);
                            // console.log(res)
                        });
                }
            },
            //减
            reduce(idx){
                if(this.data[idx].qty>1){
                    this.data[idx].qty--;
                }
                var token = localStorage.getItem('huaUserToken') || '';

                        var pramas = {
                            'token':token,
                            'id':this.data[idx]._id,
                            'qty':this.data[idx].qty
                        }

                        ajax.post('product/userlistupdate',pramas,{'auth':token}).then(function(res){
                            // console.log(res)
                        });
                        
            },
            //加
            add(idx){
                this.data[idx].qty++;

                var token = localStorage.getItem('huaUserToken') || '';
                
                        var pramas = {
                            'token':token,
                            'id':this.data[idx]._id,
                            'qty':this.data[idx].qty
                        }

                        ajax.post('product/userlistupdate',pramas,{'auth':token}).then(function(res){
                            // console.log(res)
                        });
            },
            selectData(item){
                if(typeof item.checked == 'undefined'){
                    //当前data没创建checked这个属性
                    //局部注册属性
                    this.$set(item,'checked',true);
                }else{
                    item.checked = !item.checked;

                }
            },
            //总价
            totalPrice(){
                var total = 0
                this.data.forEach((item,idx)=>{
                    if(item.checked){
                        total += item.price*item.qty;
                    }
                })
                return total;
            },
            //总数量
            totalQty(){
                var total = 0
                this.data.forEach((item,idx)=>{
                    if(item.checked){
                        total += item.qty*1;
                    }
                })
                return total;
            },
            //输入数量
            changeQty(event,idx){
                this.data[idx].qty = event.target.value*1;

            },
            //返回上一页
            routerBack(){
                this.$router.go(-1);
            }

            
        },
        created(){
            var token = localStorage.getItem('huaUserToken') || '';

                        var pramas = {
                            'token':token
                        }

                        ajax.post('product/userlistget',pramas,{'auth':token}).then(function(res){
                            this.data = res.data.data
                            // console.log(this.data)
                        }.bind(this));
        }

  }  
</script>

<style lang="css" >
@import '../../style/base.css';
@import '../../style/car.css';
</style>