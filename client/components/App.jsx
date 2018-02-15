import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Quote from './Quote'
import data from '../../data.js'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Home} />
        <Router path='/:id' component={Quote} />
        <img alt='adam' src={data.person[0].image}/>
      </div>
    </Router>
  )
}

export default App
