import service from '../utils/request'

export function getCategoryList(params) {
  return service({
    method: 'get',
    url: 'koa/categoryList',
    params
  })
}

export function getArticleByCategory(params) {
  return service({
    method: 'get',
    url: 'koa/getArticleListByCategory',
    params
  })
}
