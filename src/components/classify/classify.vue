<template>
    <div class="classify">
        <h1 class="header"><span></span><input type="text" value="搜索鲜花、蛋糕、礼品" /></h1>
        <div class="main">
            <ul class="navs">
                <li v-for="obj in navs">
                    <router-link :to="obj.path">{{obj.content}}</router-link>
                </li>
            </ul>
            <div class="right_main">
                <router-view></router-view>
            </div>            
        </div>
       <!--  <mainfoot></mainfoot> -->
    </div>
</template>

<script type="text/javascript">
    import '../../style/classify.scss';
    // import mainfoot from '../main/mainfoot.vue';
    // import '../../style/flower.css';
    export default{
        data:function(){
            return {
                
                    navs:[
                        {path:'/classify/remen',content:'热门推荐'},
                        {path:'/classify/xianhua',content:'鲜花'},
                        {path:'/classify/yongsheng',content:'永生花'},
                        {path:'/classify/cake',content:'蛋糕'},
                        {path:'/classify/chocolate',content:'巧克力'},
                        {path:'/classify/present',content:'特色礼品'},
                        {path:'/classify/Doll',content:'品牌公仔'},
                        {path:'/classify/Basket',content:'礼篮'},
                        {path:'/classify/florVerde',content:'绿色花卉'},
                    ]
                
            }
        },
        // components:{
        //     mainfoot
        // },
    }
</script>