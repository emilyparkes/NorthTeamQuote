import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Quote from './Quote'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Home} />
        <Router path='/:id' component={Quote} />
      </div>
    </Router>
  )
}

export default App
