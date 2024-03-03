import request from '@/utility/request'

export function fetchSearchData(value) {
    return request({
        url: '/get-search?search=' + value,
        method: 'get'
    })
}
