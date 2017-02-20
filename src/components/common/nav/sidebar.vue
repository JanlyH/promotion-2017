<template>
<div class="sidebar">
    <el-popover ref="promotion" placement="right-start" width="600" trigger="hover">
        <sub-menu title="促销管理" :items="subMenuItems.promotion"></sub-menu>
    </el-popover>
    <el-popover ref="SMSPromotioin" placement="right-start" width="600" trigger="hover">
        <sub-menu title="短信推广"></sub-menu>
    </el-popover>
    <ul class="icon-list">
        <li>
            <div  class="icon home"></div>
            <span>首页</span>
        </li>
        <li v-popover:promotion>
            <div class="icon discount"></div>
            <span>促销管理</span>
        </li>
        <li v-popover:SMSPromotioin>
            <div class="icon home"></div>
            <span>短信推广</span>
        </li>
    </ul>
</div>
</template>

<script>
import {Popover} from 'element-ui';
import subMenu from 'components/common/nav/subMenu';
import subMenuItems from 'assets/js/common/nav/subMenuItems'
import Vue from 'vue';
Vue.use(Popover);
export default {
    data() {
        return {
            subMenuItems: subMenuItems
        }
    },
    methods: {

    },
    components: {
        subMenu
    }
}
</script>

<style lang="scss" scoped>
    .sidebar{
        position: fixed;
        top: 84px;
        left: 0;
        height: 100%;
        width: 70px;
        background-color: #f5f5f5;
        border-right: 1px solid #ddd;
        z-index: 2;
        .icon-list{
            text-align: center;
            float: left;
            li{
                cursor: pointer;
                float: left;
                padding: 8px 0;
                transition: all .3s;
                background-color: #f5f5f5;
                margin-left: -1px;
                &:hover{
                    background-color: #fff;
                }
            }
            .icon{
                width: 36px;
                height: 36px;
                margin: 0 17px 2px 17px;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                &.home{
                    background-image: url('../../../assets/images/sprites/home.png');
                }
                &.discount{
                    background: url('../../../assets/images/sprites/discount.png');
                }
            }
        }
    }
</style>
