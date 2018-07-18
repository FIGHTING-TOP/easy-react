import * as actionTypes from 'store/actions-types/userInfo'

export function login(data){
    return{
        type:actionTypes.USERINFO_LOGIN,
        data
    }
}

export function updateCityName(data){
    return {
        type:actionTypes.UPDATE_CITYNAME,
        data
    }
}