<template>
    <div id="app">
        <top-nav></top-nav>
        <router-view> </router-view>
    </div>
</template>

<script>
import topNav from 'components/common/nav/nav';
export default {
    name: 'app',
    components: {
      topNav
    }
}
</script>

<style>
    @import 'assets/css/reset.css';
</style>
