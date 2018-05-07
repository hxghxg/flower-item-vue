<template>
   
    <div id="f_list">
       <ul class="header-bar">
            <li><img src="../../svg/左箭头.svg" alt="" class="aa" @click="routerBack"/></li>
            <li><img src="../../img/logo.png" alt="" class="cc"/></li>
            <li><img src="../../svg/sfq.svg" alt="" class="bb"/></li>
        </ul>
       <ul class="list_t">
            <li>综合</li>
            <li>销量</li>
           <li class="li3"><span @click="list" class="jiage">价格</span></li>
            <li>最新</li>
       </ul>
       <ul class="shoping" >

            <li class="list" v-for="(item,index) in goodslist" :data-id="item._id" >
                <router-link :to="{path:'/detail',query:{id:item._id} }">
                    <img :src="item.imgurl"/>
                    <p class="content">{{item.content}}</p>
                    <p class="price">￥{{item. price}}.00</p> 
                 </router-link>   
            </li>
        </ul>
    </div>
</template>
<script >
import ajax from '../../utils/httpclient.js';
// import list from './list.js'
   export default {
        data(){
            return {
                goodslist:[],
                n:0,
            }
        },
        methods:{
            list(){
                let lis = this.goodslist;
                function list_t(li){
                    return function(a,b){
                        let val1 = a[li];
                        let val2 = b[li];
                        return val1-val2;
                    }
                }
                this.n++;
           
                if(this.n%2 != 0){
                    lis.sort(list_t("price"));
                }else{
                    lis.sort(list_t("price")).reverse();
                } 
            },
            //返回上一页
            routerBack(){
                this.$router.go(-1);
            },  
        },
        mounted(){
            var vm = this;
            ajax.get('list?types=xianhua').then(function(res){
                // console.log(res.data.data);
                let list = res.data.data;
                vm.goodslist = list;
            })
            
        }
      
    }

</script>

<style lang="css" >
@import '../../style/list.css';
@import '../../style/base.css';

</style>
