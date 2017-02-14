<template>
    <div class="nav">

        <!-- 顶部小导航条 -->
        <seller-nav></seller-nav>

        <!--  顶部主导航条 -->
        <div class="top-nav">
            <div class="main-nav">
                <div class="logo">

                </div>
                <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">卖家中心</el-menu-item>
                    <el-menu-item index="2">进入店铺</el-menu-item>
                    <el-submenu index="3" >
                        <template slot="title" >宝贝团公司</template>
                    </el-submenu>
                </el-menu>
                <div v-popover:sellerInfo>
                    阿大声道
                </div>
                <el-popover ref="sellerInfo" placement="bottom" width="160" trigger="hover">
                    <p>这是一段内容这是一段内容确定删除吗？</p>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Menu, MenuItem, Submenu, Popover} from 'element-ui';
    import sellerNav from 'components/common/nav/sellerNav';
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);
    Vue.use(Popover);
    export default {
        name: 'nav',
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {
            sellerNav
        }
    }
</script>

<style lang="scss" scope>
    .top-nav{
        background-color: #324157;
        .main-nav{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
            .logo{
                float: left;
                width: 200px;
            }
            .el-menu-demo{
                float: right;
            }
        }
    }
</style>
