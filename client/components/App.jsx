import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Home from './Home'
import data from '../../data.js'

const App = () => {
  console.log(data)
  return (
    <div className='app'>
      <ErrorMessage />
      <WaitIndicator />
      <Home />
      <img alt='adam' src={data.person[0].image}/>
    </div>
  )
}

export default App
