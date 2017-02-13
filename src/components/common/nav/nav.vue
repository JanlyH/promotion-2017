<template>
    <div class="nav">
        <seller-nav></seller-nav>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Menu, MenuItem, Submenu} from 'element-ui';
    import sellerNav from 'components/common/nav/sellerNav';
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);
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