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
      open: false,
      name: ' '
    }
    this.handleClick = this.handleClick.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onCloseModal () {
    this.setState({ open: false })
  }

  handleClick (isShowing, quote, name) {
    // console.log(isShowing, quote)
    this.setState({
      showQuote: isShowing,
      quote: quote,
      open: true,
      name: name
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
          })
          }
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
          <div>
            {this.state.showQuote && <Quote name={this.state.name} quote={this.state.quote} />}
          </div>
        </Modal>
      </div>

    )
  }
}

export default Home
