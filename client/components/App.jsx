import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Home from './Home'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <WaitIndicator />
    <Home />
  </div>
)

export default App
