<template>
<div class="sidebar" :style="sidebar">
    <ul class="icon-list">
        <li>
            <div class="icon"></div>
            <span>促销管理</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        sidebar() {
            var height = window.innerHeight;
            return {
                height: height - 84 + 'px'
            }
        }
    }
}
</script>

<style lang="scss" scope>
    .sidebar{
        position: fixed;
        top: 84px;
        left: 0;
        height: 100%;
        width: 80px;
        background-color: #f5f5f5;
        border-right: 1px solid #ddd;
        z-index: 2;
        .icon-list{
            text-align: center;
            .icon{
                width: 60px;
                height: 60px;
                margin: 10px;
            }
        }
    }
</style>
