<template>
    <div class="home">
        <div >
            <header class="head">
                <div class="logo"></div>
                <div class="search">
                    <input type="text" value="母亲节鲜花" class="input"/>
                    <span></span>
                    <div class="login" @click="$router.push({path:'/login'})">登录</div>
                </div>
            </header>
            <div class="carousel-wrap banner">
                <transition-group tag="ul" class='slide-ul' name="list">
                    <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
                        <a :href="list.clickUrl" >
                            <img :src="list.image" :alt="list.desc">
                        </a>
                    </li>
                </transition-group>
                <div class="carousel-items">
                    <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
                </div>
            </div>
            <div class="conpany">
                <ul class="conpanys">
                    <li class="conpany_item"><span></span>认证龙头企业</li>
                    <li class="conpany_item"><span></span>13年品牌</li>
                    <li class="conpany_item"><span></span>3小时送花</li>
                    <li class="conpany_item"><span></span>最近248945条评论</li>
                </ul>
            </div>
            <div @click="$router.push({path:'/list'})">
                <ul class="procate">
                    <li v-for="obj in items"><img :src="obj.path"/>{{obj.name}}</li>
                </ul>
            </div>
            <div class="flowercate" @click="$router.push({path:'/list'})">
                <div v-for="obj in item">
                    <span>{{obj.name}}</span>
                    <img :src="obj.path"/>
                </div>
            </div>
            <div @click="$router.push({path:'/list'})" >   
                <ul class="purpose">
                    <li v-for="obj in purpose"><a href="#" :style="obj.color">{{obj.text}}</a></li>
                </ul>
            </div>
            <div @click="$router.push({path:'/list'})">
                <ul class="recommend">
                    <li v-for="obj in recommend">
                        <h3>{{obj.name}}</h3>
                        <span>{{obj.text}}</span>
                        <a href="#"><img :src="obj.path"/></a>
                    </li>
                </ul>
            </div>
            <div class="product" @click="$router.push({path:'/list'})">
                <div class="title">
                    <h3><span>爱情鲜花热销单品</span></h3>
                </div>
                <div class="product_list">
                    <a href="#" v-for="obj in product">
                        <img :src="obj.path"/>
                        <p>{{obj.text}}<span class="dian"></span><span class="label">{{obj.label}}</span></p>
                        <p>{{obj.name}}</p>
                        <p>￥ {{obj.price}}</p>
                    </a>
                </div>
                <div class="list_f">更多的爱情花 >></div>
            </div>
            <div class="product" @click="$router.push({path:'/list'})">
                <div class="title">
                    <h3><span>送长辈的鲜花热销单品</span></h3>
                </div>
                <div class="product_list">
                    <a href="#" v-for="obj in products">
                        <img :src="obj.path"/>
                        <p>{{obj.text}}<span class="dian"></span><span class="label">{{obj.label}}</span></p>
                        <p>{{obj.name}}</p>
                        <p>￥ {{obj.price}}</p>
                    </a>
                </div>
                 <div class="list_f">更多的亲情花 >></div>
            </div>
            <div class="product" @click="$router.push({path:'/list'})">
                <div class="title">
                    <h3><span>永生花热销单品</span></h3>
                </div>
                <div class="product_list">
                    <a href="#" v-for="obj in product_ys">
                        <img :src="obj.path"/>
                        <p>{{obj.text}}<span class="dian"></span><span class="label">{{obj.label}}</span></p>
                        <p>{{obj.name}}</p>
                        <p>￥ {{obj.price}}</p>
                    </a>
                </div>
                 <div class="list_f">更多的永生花 >></div>
            </div>
             <div class="product" @click="$router.push({path:'/list'})">
                <div class="title">
                    <h3><span>礼品热销单品</span></h3>
                </div>
                <div class="product_list">
                    <a href="#" v-for="obj in present">
                        <img :src="obj.path" width="360" height="393"/>
                        <p>{{obj.text}}</p>
                        <p>{{obj.name}}</p>
                        <p>￥ {{obj.price}}</p>
                    </a>
                </div>
                 <div class="list_f">更多的礼品 >></div>
            </div>
             <div class="product" @click="$router.push({path:'/list'})">
                <div class="title">
                    <h3><span>巧克力热销单品</span></h3>
                </div>
                <div class="product_list">
                    <a href="#" v-for="obj in chocolate">
                        <img :src="obj.path" width="360" height="393"/>
                        <p>{{obj.text}}</p>
                        <p>{{obj.name}}</p>
                        <p>￥ {{obj.price}}</p>
                    </a>
                </div>
                 <div class="list_f">更多的巧克力 >></div>
            </div>
            <div class="state" @click="$router.push({path:'/list'})">
                <img src="../../img/m-brand.png" height="586" width="750">
            </div>
            <div class="footer">
                <div class="aboutUs">
                    <a href="#">花语大全</a>
                    <a href="#">查单</a>
                    <a href="#">关于我们</a>
                </div>
                <div class="entrance">
                    <a href="#"><img src="../../img/kehuduan.svg" alt="" />客户端</a>
                    <a href="#"><img src="../../img/kehu.svg" alt="" />客服</a>
                </div>
                <p class="copyringt">
                    Copyright © 2005~2018 花礼网(中国鲜花礼品网) 版权所有<br />
                    中国鲜花网领先品牌，鲜花速递专家！
                </p>
            </div>
        </div>
        <!-- <mainfoot></mainfoot> -->
    </div>
</template>

<script type="text/javascript">
    // import mainfoot from '../main/mainfoot.vue';
    // import '../../style/flower.css';
    import '../../style/home.scss'
    export default{
        data:function(){
            return {
                items:[
                {path:"./src/img/p1.png",name:'鲜花'},
                {path:"./src/img/p2.png",name:'永生花'},
                {path:"./src/img/p3.png",name:'蛋糕'},
                {path:"./src/img/p4.png",name:'礼品'},
                {path:"./src/img/p5.png",name:'巧克力'}                
                ],
                item:[
                {path:'./src/img/b1.jpg',name:'送恋人'},
                {path:'./src/img/b2.jpg',name:'送父母长辈'},
                {path:'./src/img/b3.jpg',name:'送朋友'}
                ],
                purpose:[
                {color:'background:#FEB4C3',text:'生日祝贺'},
                {color:'background:#C99787',text:'表白求婚'},
                {color:'background:#AFCBF2',text:'开业商务'},
                {color:'background:#FFA76B',text:'周年纪念'}
                ],
                recommend:[
                {path:'./src/img/m1.jpg',name:'热销排行榜',text:'集万千宠爱'},
                {path:'./src/img/m2.jpg',name:'新品来袭',text:'新品有创意'},
                {path:'./src/img/m3.jpg',name:'特价专区',text:'超值好货'},
                {path:'./src/img/m4.jpg',name:'品味之选',text:'精致优雅'},
                {path:'./src/img/m5.jpg',name:'设计师甄选',text:'稀有花材 高端鲜花'}
                ],
                product:[
                        {
                        path:'./src/img/l1.jpg',
                        text:'忘情巴黎',
                        label:'名师设计 限时特价',
                        name:'33支红玫瑰 三生三世深情挚爱',
                        price:'298'
                    },
                    {
                        path:'./src/img/l2.jpg',
                        text:'一心一意',
                        label:'经典款式 简约设计',
                        name:'11支红玫瑰 一生一世爱你一人',
                        price:'139'
                    },
                    {
                        path:'./src/img/l3.jpg',
                        text:'一往情深',
                        label:'高档礼盒 低调奢华',
                        name:'19支红玫瑰 永远爱你永久爱意',
                        price:'245'
                    },
                    {
                        path:'./src/img/l4.jpg',
                        text:'甜美公主',
                        label:'清新脱俗 色彩明亮',
                        name:'36支玫瑰 喜欢你没道理',
                        price:'245'
                    },
                    {
                        path:'./src/img/l1.jpg',
                        text:'忘情巴黎',
                        label:'名师设计 限时特价',
                        name:'33支红玫瑰 三生三世深情挚爱',
                        price:'298'
                    },
                    {
                        path:'./src/img/l2.jpg',
                        text:'一心一意',
                        label:'经典款式 简约设计',
                        name:'11支红玫瑰 一生一世爱你一人',
                        price:'139'
                    },
                    {
                        path:'./src/img/l3.jpg',
                        text:'一往情深',
                        label:'高档礼盒 低调奢华',
                        name:'19支红玫瑰 永远爱你永久爱意',
                        price:'245'
                    },
                    {
                        path:'./src/img/l4.jpg',
                        text:'甜美公主',
                        label:'清新脱俗 色彩明亮',
                        name:'36支玫瑰 喜欢你没道理',
                        price:'245'
                    },
                    {
                        path:'./src/img/l1.jpg',
                        text:'忘情巴黎',
                        label:'名师设计 限时特价',
                        name:'33支红玫瑰 三生三世深情挚爱',
                        price:'298'
                    },
                    {
                        path:'./src/img/l2.jpg',
                        text:'我钟情你',
                        label:'特价',
                        name:'11支红玫瑰 一生一世爱你一人',
                        price:'139'
                    },
                    {
                        path:'./src/img/l3.jpg',
                        text:'一往情深',
                        label:'高档礼盒 低调奢华',
                        name:'19支红玫瑰 永远爱你永久爱意',
                        price:'245'
                    },
                    {
                        path:'./src/img/l4.jpg',
                        text:'甜美公主',
                        label:'清新脱俗 色彩明亮',
                        name:'36支玫瑰 喜欢你没道理',
                        price:'245'
                    },
                ],
                products:[
                        {
                        path:'./src/img/z1.jpg',
                        text:'罄情无限',
                        label:'精心搭配 高贵优雅',
                        name:'戴安娜玫瑰11支 红色康乃馨...',
                        price:'246'
                    },
                    {
                        path:'./src/img/z2.jpg',
                        text:'伟大母爱',
                        label:'送最亲 的妈妈',
                        name:'紫色康乃馨9支 温馨十足',
                        price:'178'
                    },
                    {
                        path:'./src/img/z3.jpg',
                        text:' 圆圆满满',
                        label:'高档礼盒 低调奢华',
                        name:'康乃馨6支红玫瑰7支 粉色...',
                        price:'245'
                    },
                    {
                        path:'./src/img/z4.jpg',
                        text:'满园春色',
                        label:'清新脱俗 色彩明亮',
                        name:'粉色康乃馨 爱意浓浓',
                        price:'439'
                    },
                ],
                product_ys:[
                    {
                        path:'./src/img/y1.jpg',
                        text:'烈焰魅惑',
                        label:'优选搭配 女神挚爱',
                        name:'Dior 迪奥999口红+进口永生...',
                        price:'520'
                    },
                    {
                        path:'./src/img/y2.jpg',
                        text:'一生一世',
                        label:'爆款特惠',
                        name:'厄瓜多尔进口永生红玫一枚',
                        price:'198'
                    },
                    {
                        path:'./src/img/y3.jpg',
                        text:' 温暖你心',
                        label:'爆款特惠',
                        name:'苔藓小兔+永生玫瑰+粉色...',
                        price:'288'
                    },
                    {
                        path:'./src/img/y4.jpg',
                        text:'一路有你',
                        label:'清新脱俗 色泽饱满',
                        name:'真空玫瑰 红玫瑰系列',
                        price:'338'
                    },
                ],
                present:[
                     {
                        path:'./src/img/n1.jpg',
                        text:'999纯金箔玫瑰+陶瓷花瓶',
                        name:'千足金箔玫瑰，最佳送女友爱..',
                        price:'138'
                    },
                    {
                        path:'./src/img/n2.jpg',
                        text:'星期耳钉G款 畅销第一',
                        name:'s925银个性耳钉',
                        price:'199'
                    },
                    {
                        path:'./src/img/n3.jpg',
                        text:' 十八音水晶钢琴',
                        name:'水晶音乐盒 韵升精品机芯...',
                        price:'228'
                    },
                    {
                        path:'./src/img/n4.jpg',
                        text:'音乐旋转木马',
                        name:'音乐盒畅销款 送女友表白最佳',
                        price:'338'
                    },
                ],
                chocolate:[
                    {
                        path:'./src/img/q1.jpg',
                        text:'巧克巧蔻定制十六粒装夹心.',
                        name:'手工夹心巧克力',
                        price:'258'
                    },
                    {
                        path:'./src/img/q2.jpg',
                        text:'玫瑰之约手工巧克力礼盒',
                        name:'手工巧克力',
                        price:'99'
                    },
                    {
                        path:'./src/img/q3.jpg',
                        text:'Felchlin妃亭18粒装巧克力',
                        name:'德国进口手工夹心巧克力',
                        price:'348'
                    },
                    {
                        path:'./src/img/q4.jpg',
                        text:'巧克巧蔻定制十六粒装夹心',
                        name:'手工夹心巧克力',
                        price:'148'
                    },   
                ],
                slideList: [
                        {
                            "clickUrl": "#",
                            "desc": "nhwc",
                            "image": "./src/img/banner1.jpg"
                        },
                        {
                            "clickUrl": "#",
                            "desc": "hxrj",
                            "image": "./src/img/banner.jpg"
                        },
                        {
                            "clickUrl": "#",
                            "desc": "rsdh",
                            "image": "./src/img/banner3.jpg"
                        }
                    ],
                    currentIndex: 0,
                    timer: ''
            }
        },
        // components:{
        //     mainfoot
        // },
        methods: {
            go() {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 4000)
            },
            stop() {
                clearInterval(this.timer)
                this.timer = null
            },
            change(index) {
                this.currentIndex = index
            },
            autoPlay() {
                this.currentIndex++
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            }
        },
        created() {
            this.$nextTick(() => {
                this.timer = setInterval(() => {
                this.autoPlay()
                }, 4000)
            })
       }
    }
</script>