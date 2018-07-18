import{createStore} from 'redux'
import {combineReducers} from 'redux'
//引入reducer
import userInfo from './reducers/userInfo'

//组合reducer
const rootReducer = combineReducers({
    userInfo
})
//初始化状态
export default function storeInit(initialState){
    const store = createStore(rootReducer,initialState,
        window.devToolsExtension ? window.devToolsExtension() :undefined
    )
    return store
}