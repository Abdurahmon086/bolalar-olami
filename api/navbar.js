import request from '@/utility/request'

export function fetchNavbarData() {
    return request({
        url: '/resources/get-sections',
        method: 'get'
    })
}
