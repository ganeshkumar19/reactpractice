import React from 'react'

const isAuth = true

const WithAuth = (Component) => {
  return function(){
    if(!isAuth){
        return <div>user not authenicated</div>
    }
    return <Component/>
  }
}

export default WithAuth