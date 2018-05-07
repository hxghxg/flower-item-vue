<template>
    <div class="cake">
    <div>
        <h1>
            <img src="../../img/all_cake.jpg"/>
            <div class="layer"><span>美味蛋糕让生活充满甜蜜</span></div>
        </h1>
        <div class="product">
            <p class="title">精选品牌蛋糕</p>
            <ul>
                <li v-for="obj in cakes">
                    <a href="#" @click="$router.push({path:'/list'})">
                        <img :src="obj.path" alt="" />
                        <p>{{obj.text}}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="city">
            <p class="title">按城市选购</p>
            <ul>
                <li v-for="item in city"><a href="#">{{item}}</a></li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import '../../style/componentScss/cake.scss';
    export default{
        data:function(){
            return {
                cakes:[
                    {path:'./src/img/more.png',text:'全部'},
                    {path:'./src/img/d1.png',text:'元祖'},
                    {path:'./src/img/d2.jpg',text:'廿十一客'},
                    {path:'./src/img/d3.png',text:'诺心'},
                    {path:'./src/img/d4.png',text:'INCAKE'},
                    {path:'./src/img/d5.jpg',text:'贝思客'},
                    {path:'./src/img/d6.png',text:'BONCAKE'},
                    {path:'./src/img/d7.png',text:'Mcake'},
                    {path:'./src/img/d8.png',text:'窝夫小子'},
                    {path:'./src/img/d9.png',text:'米卡米卡'},
                    {path:'./src/img/d10.png',text:'法西妮蛋糕'},
                    {path:'./src/img/d11.png',text:'幸福西饼'},
                    {path:'./src/img/d12.png',text:'Vcake'},
                    {path:'./src/img/d13.png',text:'一品轩'},
                    {path:'./src/img/d14.jpg',text:'心之和蛋糕'}

                ],
                city:['北京','上海','广州','深圳','杭州','武汉','重庆','成都','东莞','南京','青岛','大连','天津','长沙','合肥','南昌','贵阳','长春',' 沈阳','济南','更多',]
            }
        }
        
    }
</script>