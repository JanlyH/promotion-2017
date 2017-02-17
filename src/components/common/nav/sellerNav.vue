<template>
    <div class="seller-nav">
        <el-popover ref="sellerMap" placement="bottom-start" width="600" trigger="hover" :visible-arrow="false" popper-class="seller-map-warp"  @show="showSellerMap" @hide="hideSellerMap">
            <seller-map></seller-map>
        </el-popover>
        <div class="seller-warp">
            <div class="btn-bar">
                <div class="btn"><span class="text">续费/升级</span></div>
                <div class="btn"><span class="text">版本区别</span></div>
                <div class="btn seller-map-btn" v-popover:sellerMap><span class="text">网站导航</span></div>
                <div class="btn"><span class="text">签到送贝币</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import sellerMap from 'components/common/nav/sellerMap'
    export default {
        name: 'seller-nav',
        data() {
            return {
                isShowSellerMap: false
            }
        },
        methods: {
            showSellerMap() {
                this.isShowSellerMap = true;
            },

            hideSellerMap() {
                this.isShowSellerMap = false;
            }
        },
        components: {
            sellerMap
        }
    }
</script>

<style lang="scss">
    .seller-nav{
        width: 100%;
        background-color: #f5f5f5;
        .seller-warp{
            width: 1200px;
            height: 24px;
            margin: 0 auto;
            .btn-bar{
                float: left;;
                .btn{
                    float: left;
                    width: 90px;
                    height: 24px;
                    text-align: center;
                    cursor: pointer;
                    transition: all .3s;
                    background-color: #f5f5f5;
                    &:hover{
                        position: relative;
                        background-color: #fff;
                        z-index: 2002;
                        border-bottom: 1px solid #fff;
                    }
                    &+.btn{
                        .text{
                            border-left: 1px solid #ddd;
                        }
                    }
                    .text{
                        display: block;
                        height: 20px;
                        line-height: 20px;
                        margin: 2px 0;
                    }
                }
            }
        }
    }
    .el-popover.seller-map-warp{
        margin-top: -1px;
    }
</style>
