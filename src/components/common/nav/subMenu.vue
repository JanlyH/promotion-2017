<template>
     <div class="sub-menu">
         <div class="title" v-text="title"></div>
         <div class="sub-menu-warp">
            <div class="sub-mune-item" v-for="(item, index) in items">
                <div class="icon"></div>
            </div>
         </div>
         <div class="fn-preview"></div>
     </div>
</template>

<script>
export default {
    props: ['title', 'items']
}
</script>

<style lang="scss" scoped>
    .sub-menu{
        width: 100%;
        .title{
            font-size: 16px;
        }
        .sub-menu-warp{
            width: 50%;
        }
        .fn-preview{
            width: 50%;
        }
        .sub-mune-item{
            width: 36px;
            height: 36px;
            margin: 10px;
            .icon{
                background-size: 100% 100%;
            }
        }
    }
</style>
