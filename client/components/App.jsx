import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Post from './Post'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <WaitIndicator />
    <Post />
  </div>
)

export default App
