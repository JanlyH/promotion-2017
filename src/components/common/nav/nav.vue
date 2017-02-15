<template>
    <div class="nav">

        <!-- 顶部小导航条 -->
        <seller-nav></seller-nav>

        <!--  顶部主导航条 -->
        <div class="top-nav">
            <div class="main-nav">
                <div class="logo">

                </div>
                <el-popover  placement="bottom-end" width="360" trigger="hover" ref="seller">

                    <!-- 用户信息 -->
                    <div class="seller-warp">
                        <div class="seller-info">
                            <div class="seller-logo">
                                <img src="https://img.alicdn.com/imgextra/i2/17157061/TB2F929tVXXXXcLXXXXXXXXXXXX-17157061.jpg">
                            </div>
                            <div class="base-info">
                                <div class="seller-nick">宝贝团公司<i class="seller-tag">全能版</i></div>
                                <div class="due-time">
                                    软件到期时间：2017-01-11<el-button type="primary" size="mini" class="renew-btn">续费</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="btn-warp">
                            <div class="btn-bar">
                                <el-button size="small">推荐朋友</el-button>
                                <el-button size="small">我的积分</el-button>
                                <el-button size="small">短信充值</el-button>
                            </div>
                            <div class="btn-bar">
                                <el-button size="small">软件设置</el-button>
                                <el-button size="small">子账号管理</el-button>
                                <el-button size="small">卖家学堂</el-button>
                            </div>
                        </div>
                        <div class="sign-out">退出登录</div>
                    </div>
                </el-popover>
                <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">卖家中心</el-menu-item>
                    <el-menu-item index="2">进入店铺</el-menu-item>
                    <el-submenu index="3" v-popover:seller >
                        <template slot="title">宝贝团公司</template>
                    </el-submenu>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Menu, MenuItem, Submenu, Popover, Button} from 'element-ui';
    import sellerNav from 'components/common/nav/sellerNav';
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(Submenu);
    Vue.use(Popover);
    Vue.use(Button);
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
            .el-menu-item.is-active {
                color: #bfcbd9;
            }
        }
    }
    .seller-warp{
        .seller-info{
            height: 90px;
            width: 100%;
            margin-bottom: 10px;
        }
        .seller-logo{
            width: 90px;
            height: 90px;
            padding: 10px;
            float: left;
            margin-right: 20px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .base-info{
            float: left;
            font-size: 14px;
            .seller-tag{
                padding: 2px 4px;
                margin-left: 12px;
                // border-radius: 2px;
                font-size: 12px;
                background-color: #ff4949;
                color: #fff;
            }
            .seller-nick{
                margin: 16px 0 10px 0;
            }
            .renew-btn{
                margin-left: 12px;
            }
        }
        .btn-warp{
            margin-bottom: 20px;
            text-align: center;
            .btn-bar{
                margin-bottom: 8px;
                button{
                    width: 100px;
                }
            }
        }
        .sign-out{
            float: right;
            padding: 8px 10px;
            background-color: #fff;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            transition: all .3s;
            &:hover{
                background-color: #f5f5f5;
                transition: all .3s;
            }
        }
    }
</style>
