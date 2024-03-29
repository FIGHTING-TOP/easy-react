//定义规则，类比vuex中的state

import * as actionTypes from 'store/actions-types/userInfo'

const initialState = {}

export default function userInfo(state=initialState,action){
    switch (action.type){
        //登录
        case actionTypes.USERINFO_LOGIN:
            return action.data
        //修改城市
        case actionTypes.UPDATE_CITYNAME:
            return action.data

        default:
            return state
    }
}