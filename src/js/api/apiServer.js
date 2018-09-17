import fetchUrl from './startRequest.js'

const baseUrl = 'http://1.1.1.1/api'

//获取已发表的博客列表信息
export function getBlogAll(data) {
    url = baseUrl + 'all'
    params = {
        url: url,
        methdo: 'GET',
        data:data
    }
    return fetchUrl(params)
}

//获取详细博客信息
export function getExactBlog(data) {
    url = baseUrl + 'blogDetail'
    params = {
        url: url,
        methdo: 'GET',
        data:data
    }
    return fetchUrl(params)
}

//增加一篇文章
export function addBlog(data) {
    url = baseUrl + 'add'
    params = {
        url: url,
        methdo: 'POST',
        data:data
    }
    return fetchUrl(params)
}

//编辑文章
export function editBlog(data) {
    url = baseUrl + 'edit'
    params = {
        url: url,
        methdo: 'POST',
        data:data
    }
    return fetchUrl(params)
}

