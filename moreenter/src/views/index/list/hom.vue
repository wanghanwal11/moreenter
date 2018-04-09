<template>
    <div>
        <grid :rows="3">
            <grid-item v-for="i in 10" :key="i">
                <div class="weui-grid__icon">
                    <img slot="icon" src="../../../assets/image/dm.jpg">
                </div>
                <p class="weui-grid__label">{{i}}</p>
            </grid-item>
        </grid>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import { Grid, GridItem} from 'vux'

    export default {
        components: {
            Grid,
            GridItem,
        },
        methods: {
        }
    }
</script>

<style lang="less">
    .weui-grid__icon{
        width: 36px!important;
        height: 36px!important;
    }
</style>
