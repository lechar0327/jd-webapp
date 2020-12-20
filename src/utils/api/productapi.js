
import fetch from './fetch'

//获取推荐商品
function getHotGoodList(data) {
    return fetch({
        method: "Get",
        url: "/jd/getHotGoodList",
        data
    });
}

//获取商品详情
function getGoodDetail(params) {
    return fetch({
        url: "/jd/getGoodDetail",
        method: "GET",
        params,
        
    });
}

export default {
    getHotGoodList,
    getGoodDetail,
}