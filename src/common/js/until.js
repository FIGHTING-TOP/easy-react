export default {
    getItem:function(key){
        let value
        try{
            value = localStorage.getItem(key)
        }catch(e){
            //开发环境下提示error
            if(__DEV__){
                console.error('localStorage.getItem 报错！')
            }
        }finally{
            return value
        }
    },
    setItem:function(key,value){
        try{
            //ios safari无痕模式下直接使用报错
            localStorage.setItem(key,value)
        }catch(e){
            //开发环境下提示error
            if(__DEV__){
                console.error('localStorage.setItem 报错！')
            }
        }
    }
}