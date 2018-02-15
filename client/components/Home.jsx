import React from 'react'
import Modal from 'react-responsive-modal'

import data from '../../data.js'
import EachPerson from './EachPerson'
import Quote from './Quote'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showQuote: false,
      quote: ' ',
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  onCloseModal () {
    this.setState({ open: false })
  }

  handleClick (isShowing, quote) {
    // console.log(isShowing, quote)
    this.setState({
      showQuote: isShowing,
      quote: quote,
      open: true
    })
  }

  render () {
    const { open } = this.state
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
        <Modal open={open} onClose={this.onCloseModal} little>
          {this.state.showQuote && <Quote quote={this.state.quote} />}
        </Modal>
      </div>
    )
  }
}

export default Home
