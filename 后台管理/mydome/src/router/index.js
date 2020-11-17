import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export let indexRoutes = [{
  path: '/menu',
  component: () => import('@/views/menu/menu.vue'),
  name: '菜单管理'
}, {
  path: '/role',
  component: () => import('@/views/role/role.vue'),
  name: '角色管理'
}, {
  path: '/user',
  component: () => import('@/views/user/user.vue'),
  name: '管理员管理'
},{
  path: "/cate",
  component: () => import("@/views/cate/cate"),
  name: "商品分类"
},
{
  path: "/specs",
  component: () => import("@/views/specs/specs"),
  name: "商品规格"
},{
  path:'/goods',
  component:()=>import('@/views/goods/goods'),
  name:'商品管理'
},{
  path:'/vip',
  component:()=>import('@/views/vip/member'),
  name:'会员管理'
},{
  path:'/banner',
  component:()=>import('../views/banner/banner.vue'),
  name:'轮播图管理'
},{
  path:'/seck',
  component:()=>import('../views/seck/seck.vue'),
  name:'秒杀活动管理'
}]

const router = new Router({
  routes: [{
    path: '/login',
    component: () => import('../pages/login.vue')
  }, {
    path: '/index',
    component: () => import('../pages/index.vue'),
    children: [{
        path: "/home",
        component: () => import("@/views/home")
      },
      ...indexRoutes,
      {
        //二级路由重定向
        path: "",
        redirect: "/menu"
      }
    ]
  }, {
    path: '*',
    redirect: '/login'
  }]
});

//全局导航守卫之登陆拦截
/* 
如果你去的是登录，那么就next
如果去的不是登录，那么就判断你是否登录过。登录过，next
否则全部跳转到登录页
*/

// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login'){
//     next()
//     return
//   }
//   if(sessionStorage.getItem('userInfo')){
//     next()
//     return
//   }
//   next('/login')
// })

// 导出路由
export default router



