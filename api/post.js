import request from '@/utility/request'

export function fetchSingleData(id) {
    return request({
        url: '/get-post/' + id,
        method: 'get'
    })
}
