<template>
    <div id="f_flower">
        <main id="f_main">
            <router-view></router-view>
        </main>
        <mainfoot></mainfoot>
    </div>
</template>

<script>
      import mainfoot from '../main/mainfoot.vue';

    export default {
        components:{mainfoot}
    };
</script>
 
<style lang="scss">
    @import '../../style/base.css';
    @import '../../style/flower.css';
</style>  



