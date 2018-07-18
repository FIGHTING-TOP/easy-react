import React from 'react'
import './style.scss'

import Header from 'component/Header'

class Favorite extends React.PureComponent{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div id="Favorite">
               <Header/>
            </div>
        )
    }
}

export default Favorite
