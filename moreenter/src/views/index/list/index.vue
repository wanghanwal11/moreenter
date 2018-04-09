<template>
    <div>
        <swiper loop auto :list="ppt" style="width:100%;margin:0 auto;" height="130px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
</template>

<script>

    import { Swiper } from 'vux'
    const imgList = [
        require( 'assets/image/t1.jpg'),
        require( 'assets/image/t2.jpg'),
        require( 'assets/image/t3.jpg')
    ]
    const ppt = imgList.map((one, index) => ({
        img: one
    }))
    export default {
        components: {
            Swiper
        },
        methods: {
        },
        data(){
            return {
                ppt:ppt
            }
        }
    }
</script>

<style lang="less">
    .weui-grid__icon{
        width: 36px!important;
        height: 36px!important;
    }
</style>
