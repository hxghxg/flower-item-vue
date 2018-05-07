<template>
    <div class="xianhua">
        <h1><img src="../../img/flower.jpg"/></h1>
        <div>
            <p class="title">用途<a href="#">鲜花排行榜>></a></p>
            <ul class="goods">
                <li v-for="obj in items">
                    <a href="#" @click="$router.push({path:'/list'})">
                    <!-- <router-link to='/list'> -->
                        <img :src="obj.path" />
                        <p>{{obj.text}}</p>
                   <!--  </router-link> -->
                    </a>
                </li>
            </ul>
        <div>
            <p class="title">花材</p>
            <ul class="goods">
                <li v-for="obj in huacai">
                    <a href="#">
                        <img :src="obj.path" />
                        <p>{{obj.text}}</p>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        <p style="color:#868686;font-size:24px;margin:30px 0px;">颜色</p>
        <ul class="color">
            <li v-for="item in color">{{item}}</li>
        </ul>
    </div>
    <!-- <mainfoot></mainfoot> -->
</template>

<script type="text/javascript">
    import '../../style/componentScss/xianhua.scss';
    export default{
        data:function(){
            return {
                items:[
                    {path:'./src/img/more.png',text:'全部'},
                    {path:'./src/img/a1.png',text:'爱情鲜花'},
                    {path:'./src/img/a2.png',text:'友情鲜花'},
                    {path:'./src/img/a3.png',text:'生日鲜花'},
                    {path:'./src/img/a4.png',text:'问候长辈'},
                    {path:'./src/img/a5.png',text:'问候老师'},
                    {path:'./src/img/a6.png',text:'品牌公仔'},
                    {path:'./src/img/a7.png',text:'祝福庆贺'},
                    {path:'./src/img/a8.png',text:'婚庆鲜花'},
                    {path:'./src/img/a9.png',text:'探病慰问'},
                    {path:'./src/img/a2.png',text:'生子祝贺'},
                    {path:'./src/img/a3.png',text:'道歉鲜花'},
                    {path:'./src/img/a4.png',text:'家居鲜花'},
                    {path:'./src/img/a5.png',text:'精品鲜花'},
                ],
                huacai:[
                    {path:'./src/img/hc1.png',text:'玫瑰'},
                    {path:'./src/img/hc2.png',text:'红玫瑰'},
                    {path:'./src/img/hc3.png',text:'粉玫瑰'},
                    {path:'./src/img/hc4.png',text:'白玫瑰'},
                    {path:'./src/img/hc5.png',text:'香槟玫瑰'},
                    {path:'./src/img/hc6.png',text:'紫玫瑰'},
                    {path:'./src/img/hc7.png',text:'蓝玫瑰'},
                    {path:'./src/img/hc8.png',text:'黄玫瑰'},
                    {path:'./src/img/hc9.png',text:'康乃馨'},
                    {path:'./src/img/hc10.png',text:'郁金香'},
                    {path:'./src/img/hc7.png',text:'百合'},
                ],
                color:['红色','黄色','紫色','白色','粉色','粉红','金黄']
            }   
        }               
    }
</script>