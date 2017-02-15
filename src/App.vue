<template>
<div id="app">
    <top-nav></top-nav>
    <sidebar></sidebar>
    <router-view> </router-view>
</div>
</template>

<script>
import topNav from 'components/common/nav/nav'
import sidebar from 'components/common/nav/sidebar'
export default {
    name: 'app',
    components: {
        topNav,
        sidebar
    }
}
</script>

<style>
@import 'assets/css/reset.css';
</style>
