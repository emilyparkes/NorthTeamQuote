import React from 'react'
import request from 'superagent'

import Register from './Register'

class Header extends React.Component {
  constructor () {
    super ()
    this.state = {
     
    }
    
    
  }

     render() {
  return (
    <div className="header">
      <div className="title">
        <h1>You Can Do It!</h1>
      </div>
      <div className="sub-header">
        <h2>Motivate yourself when things get tough <br /> <i>— with harakeke inspirational quotes!</i></h2>
      </div>
      <Register />   
    </div>
  )
}
}

export default Header
