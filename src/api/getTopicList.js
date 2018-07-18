import axios from './http'

export default function (params) {
    let baseParams = {
        limit:20
    }
    params = Object.assign({},baseParams,params)
    return axios.get('/topics', {
        params: params
    })
}