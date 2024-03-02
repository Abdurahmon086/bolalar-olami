import request from '@/utility/request'

export function fetchHomeData(id) {
    return request({
        url: '/home/get-news-home' ,
        method: 'get'
    })
}
