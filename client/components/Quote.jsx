import React from 'react'

class Quote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    console.log(this.props.name)
    return (
      <div className='quote-container'>
        <h3>{this.props.name}</h3>
        <p>&quot;{this.props.quote}&quot;</p>

      </div>
    )
  }
}

export default Quote
