import request from '@/utility/request'

export function fetchCategoryData(id) {
    return request({
        url: '/get-category/' + id,
        method: 'get'
    })
}
