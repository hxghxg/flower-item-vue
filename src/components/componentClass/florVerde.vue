<template>
    <div class="plant">
        <h1>
            <img src="../../img/plant.png"/>
            <span>绿色花卉-为你的生活增加一点绿色 ￥109</span>
        </h1>
        <div class="product">
            <p class="title">绿色花卉</p>
            <ul>
                <li v-for="obj in plant">
                    <a href="#" @click="$router.push({path:'/list'})"><img :src="obj.path"/><p>{{obj.text}}</p></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import '../../style/componentScss/florVerde.scss';
    export default{

        data:function(){
            return {
                plant:[
                    {path:'./src/img/more.png',text:'全部'},
                    {path:'./src/img/lv1.png',text:'绿色植物'},
                    {path:'./src/img/lv2.png',text:'盆栽花卉'}

                ]
            }
        }
        
    }
</script>