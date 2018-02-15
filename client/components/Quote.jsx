import React from 'react'

class Quote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='quote-container'>
        <p>{this.props.quote}</p>

      </div>
    )
  }
}

export default Quote

