<template>
    <div class="forever">
        <h1>
            <img src="../../img/ysfreflowers.jpg"/>
            <span>永生花礼盒 维多利亚花园 ￥329</span>
        </h1>
        <div class="product">
            <p class="title">永生花<a href="#">永生花排行榜>></a></p>
            <ul>
                <li v-for="obj in forever">
                    <a href="#" @click="$router.push({path:'/list'})"><img :src="obj.path"/><p>{{obj.text}}</p></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import '../../style/componentScss/yongsheng.scss';
    export default{
        data:function(){
            return {
                forever:[
                    {path:'./src/img/more.png',text:'全部'},
                    {path:'./src/img/y1.png',text:'经典花盒'},
                    {path:'./src/img/y2.png',text:'巨型玫瑰'},
                    {path:'./src/img/y3.png',text:'薰衣草'},
                    {path:'./src/img/y4.png',text:'永生瓶花'},
                    {path:'./src/img/y5.png',text:'特色永生花'},                    
                ]
            }
        }    
    }
</script>