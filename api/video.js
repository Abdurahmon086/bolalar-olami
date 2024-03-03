import request from '@/utility/request'

export function fetchVideoData() {
    return request({
        url: '/get-videos',
        method: 'get'
    })
}
