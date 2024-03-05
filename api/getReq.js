import request from '@/utility/request'

export function fetchGetReqData(url, id = '') {
    return request({
        url: url + id,
        method: 'get'
    })
}
