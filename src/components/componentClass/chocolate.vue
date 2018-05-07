<template>
    <div class="chocolate">
        <h1>
            <img src="../../img/allchoclate.jpg"/>
            <span>巧克巧蔲定制16粒装纯手工巧克力 ￥258</span>
        </h1>
        <div class="product">
            <p class="title">永生花<a href="#">永生花排行榜>></a></p>
            <ul>
                <li v-for="obj in chocolate">
                    <a href="#" @click="$router.push({path:'/list'})"><img :src="obj.path"/><p>{{obj.text}}</p></a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script type="text/javascript">
    import '../../style/componentScss/chocolate.scss';
    export default{
        data:function(){
            return {
                chocolate:[
                    {path:'./src/img/more.png',text:'全部'},
                    {path:'./src/img/qkl1.png',text:'进口巧克力'},
                    {path:'./src/img/qkl2.png',text:'巧罗巧克力'},
                    {path:'./src/img/qkl3.png',text:'瑞士莲巧克力'},
                    {path:'./src/img/qkl4.png',text:'巧蔲巧克力'},
                    {path:'./src/img/qkl3.png',text:'爱你巧克力'},                    
                ]
            }
        }            
    }
</script>