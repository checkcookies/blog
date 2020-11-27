import service from '../utils/request'

export function getArticleList(params) {
  return service({
    method: 'get',
    url: 'koa/articleList',
    params
  })
}

export function getArticleDetail(params) {
  return service({
    method: 'get',
    url: 'koa/articleDetail',
    params
  })
}