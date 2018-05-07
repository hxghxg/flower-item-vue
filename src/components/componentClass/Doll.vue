<template>
    <div class="doll">
        <h1>
            <img src="../../img/doll.jpg"/>
            <span>公仔创意花束 兔纸小姐 ￥138</span>
        </h1> 
        <div class="product">
            <p class="title">品牌公仔分类<a href="#">品牌公仔排行榜>></a></p>
            <ul>
                <li v-for="obj in doll">
                    <a href="#" @click="$router.push({path:'/list'})"><img :src="obj.path"/><p>{{obj.text}}</p></a>
                </li>
            </ul>
        </div>       
    </div>
</template>

<script type="text/javascript">
    import '../../style/componentScss/Doll.scss';
    export default{
        data:function(){
            return {
                doll:[
                {path:'./src/img/more.png',text:'全部'},
                {path:'./src/img/doll1.png',text:'Hello Kitty'},
                {path:'./src/img/doll2.png',text:'Doge神烦狗'},
                {path:'./src/img/doll3.png',text:'bestlife'},
                {path:'./src/img/doll4.jpg',text:'卡通花束'}

                ]
            }
        }
        
    }
</script>