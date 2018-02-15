import React from 'react'

import data from '../../data.js'
import EachPerson from './EachPerson'
import Quote from './Quote'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showQuote: false,
      quote: ' '
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (isShowing, quote) {
    // console.log(isShowing, quote)
    this.setState({
      showQuote: isShowing,
      quote: quote
    })
  }

  render () {
    console.log(this.state)
    return (
      <div className='container'>
        <div className='main'>
          {data.person.map((person) => {
            return (
              <div key={person.id}>
                <EachPerson person={person} handleClick={this.handleClick} />
              </div>
            )
          })}
        </div>
        {this.state.showQuote && <Quote quote={this.state.quote} />}
      </div>
    )
  }
}

export default Home
