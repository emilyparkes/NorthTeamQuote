import React from 'react'
import data from './data'
import EachPerson from './EachPerson'
import Quote from './Quote'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showQuote: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState = {
      showQuote: true
    }
  }

  render () {
    return (
      <div className='container'>
        {data.person.map((person) => {
          return (
            <div key={person.id}>
              <EachPerson person={person} />
              <Quote person={person.quote} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Home
