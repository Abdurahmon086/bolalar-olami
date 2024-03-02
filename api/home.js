import request from '@/utility/request'

export function fetchHomeData() {
    return request({
        url: '/home/get-news-home',
        method: 'get'
    })
}
