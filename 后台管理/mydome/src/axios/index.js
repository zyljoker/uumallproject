//引入重新封装的实例
import http from './axios'

//暴露接口
// 封装菜单添加接口
export function getMenuAdd(data) {
  return http.post('/menuadd', data)
}
//封装菜单列表接口
export function getMenuList(params) {
  return http.get('/menulist', {
    params
  })
}
// 菜单获取（一条）
export function getMenuInfo(params) {
  return http.get('/menuinfo', {
    params
  })
}
// 菜单修改
export function getMenuEdit(data) {
  return http.post('/menuedit', data)
}
// .菜单删除
export function getMenuDelete(data) {
  return http.post('/menudelete', data)
}


// rolt
/* 角色管理接口 */
//角色添加
export function getRoleAdd(data) {
  return http.post('/roleadd', data)
}
//角色列表
export function getRoleList() {
  return http.get('/rolelist')
}
//角色获取（一条）
export function getRoleInfo(params) {
  return http.get('/roleinfo', {
    params
  })
}
//角色修改
export function getRoleEdit(data) {
  return http.post('/roleedit', data)
}
//角色添加
export function getRoleDelete(data) {
  return http.post('/roledelete', data)
}




/* 管理员管理接口 */
//管理员添加
export function getUserAdd(data){
    return http.post('/useradd',data)
}
//管理员列表
export function getUserList(params){
    return http.get('/userlist',{
        params
    })
}
//管理员获取（一条）
export function getUserInfo(params){
    return http.get('/userinfo',{
        params
    })
}
//管理员修改
export function getUserEdit(data){
    return http.post('/useredit',data)
}
//管理员删除
export function getUserDelete(data){
    return http.post('/userdelete',data)
}
//管理员总数（用于计算分页)
export function getUserCount(){
    return http.get('/usercount')
}
//管理员登录
export function getUserLogin(data){
    return http.post('/userlogin',data)
}




/* 分类管理接口 */
//封装分类添加接口
export function getCateAdd(data){
  return http.post('/cateadd',data)
}
//封装分类列表接口
export function getCateList(params){
  return http.get('/catelist',{
      params
  })
}
//封装分类获取（一条）接口
export function getCateInfo(params){
  return http.get('/cateinfo',{
      params
  })
}
//封装分类修改接口
export function getCateEdit(data){
  return http.post('/cateedit',data)
}
//封装分类删除接口
export function getCateDelete(data){
  return http.post('/catedelete',data)
}

/* 商品规格管理接口 */
//商品规格添加
export function getSpecsAdd(data){
  return http.post('/specsadd',data)
}
//商品规格列表
export function getSpecsList(params){
  return http.get('/specslist',{
      params
  })
}
//商品规格获取（一条）
export function getSpecsInfo(params){
  return http.get('/specsinfo',{
      params
  })
}
//商品规格修改
export function getSpecsEdit(data){
  return http.post('/specsedit',data)
}
//商品规格删除
export function getSpecsDelete(data){
  return http.post('/specsdelete',data)
}
//商品规格总数（用于计算分页)
export function getSpecsCount(params){
  return http.get('/specscount',{
    params
  })
}

//商品管理
//商品添加
export function getGoodsAdd(data){
  return http.post('/goodsadd',data)
}
//商品总和
export function getGoodsCount(params){
  return http.get('/goodscount',{
    params
  })
}

//商品列表
export function getGoodsList(params){
  return http.get('/goodslist',{
    params
  })
}

//商品获取（一条）
export function getGoodsInfo(params){
  return http.get('/goodsinfo',{
    params
  })
}

//商品修改
export function getGoodsEdit(data){
    return http.post('/goodsedit',data)
}

//商品删除
export function getGoodsDelete(data){
  return http.post('/goodsdelete',data)
}



//会员管理
//会员列表

export function getMemberList(params){
  return http.get('/memberlist',{
    params
  })
}

//会员获取（一条）
export function getMemberInfo(params){
  return http.get('/memberlist',{
    params
  })
}

//会员修改
export function getMemberEdit(data){
    return http.post('/memberedit',data)
}



//轮播图

// 添加轮播图
export function getBannerAdd(data){
    return http.post('/banneradd',data)
}

//轮播图列表
export function getBannerList(params){
    return http.get('/bannerlist',{
      params
    })
}

//轮播图获取（一条）
export function getBannerInfo(params){
    return http.get('/bannerinfo',{
      params
    })
}

// 轮播图修改
export function getBannerEdit(data){
    return http.post('/banneredit',data)
}

//轮播删除
export function getBannerDelete(data){
  return http.post('/bannerdelete',data)
}


// 限时秒杀管理

// 限时秒杀添加** 
export function getSeckAdd(data){
  return http.post('/seckadd',data)
}

//限时秒杀列表** 
export function getSeckList(params){
  return http.get('/seckadd',{
    params
  })
}

// 限时秒杀获取（一条）
export function getSeckInfo(params){
    return http.get('/seckinfo',{
      params
    })
}

//限时秒杀修改
export function getSeckEdit(data){
    return http.post('/seckedit',data)
}

//限时秒杀删除
export function getSeckDelete(data){
    return http.post('/seckdelete',data)
}