<template>
<div class="sidebar">
    <ul class="icon-list">
        <li>
            <div class="icon home"></div>
            <span>首页</span>
        </li>
        <li>
            <div class="icon home"></div>
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
                padding: 10px 0;
                transition: all .3s;
                background-color: #f5f5f5;
                margin-left: -1px;
                &:hover{
                    background-color: #fff;
                }
            }
            .icon{
                width: 40px;
                height: 40px;
                margin: 0 15px 2px 15px;
                &.home{
                    background: url('../../../assets/images/sprites/home.png') no-repeat;
                }
            }
        }
    }
</style>
