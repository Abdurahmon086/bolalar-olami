import request from '@/utility/request'

export function fetchTagsData(id) {
    return request({
        url: '/get-tag/' + id,
        method: 'get'
    })
}
