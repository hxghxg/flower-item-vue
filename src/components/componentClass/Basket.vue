<template>
    <div class="Basket">
        <h1>
            <img src="../../img/busket.jpg"/>
            <span>温情礼篮 让祝福常相伴 ￥338</span>
        </h1>
        <div class="product">
            <p class="title">礼篮</p>
            <ul>
                <li v-for="obj in Basket">
                    <a href="#" @click="$router.push({path:'/list'})"><img :src="obj.path"/><p>{{obj.text}}</p></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    import '../../style/componentScss/Basket.scss'
    export default{
        data:function(){
            return {
                Basket:[{path:'./src/img/baskets1.png',text:'礼篮'}]
            }
        }
    }
</script>