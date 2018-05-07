<template>
    <div class="remen">
        <h1><img src="../../img/mothersday.jpg"/></h1>
        <p class="title">大家都在找</p>
        <ul class="goods">
            <li v-for="obj in items">
                <a href="#" @click="$router.push({path:'/list'})">
                    <img :src="obj.path" />
                    <p>{{obj.text}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import '../../style/componentScss/remen.scss';
    export default{
        data:function(){
            return {
                items:[
                    {path:'./src/img/g1.png',text:'鲜花'},
                    {path:'./src/img/g2.png',text:'商务鲜花'},
                    {path:'./src/img/g3.png',text:'永生花'},
                    {path:'./src/img/g4.png',text:'蛋糕'},
                    {path:'./src/img/g5.png',text:'巧克力'},
                    {path:'./src/img/g6.png',text:'特色礼品'},
                    {path:'./src/img/g7.png',text:'品牌公仔'},
                    {path:'./src/img/g8.png',text:'礼蓝'},
                    {path:'./src/img/g9.png',text:'植物花卉'},
                    {path:'./src/img/g10.png',text:'设计师鲜花'},
                ]
            }
        }       
    }
</script>