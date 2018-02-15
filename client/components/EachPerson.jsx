import React from 'react'

class EachPerson extends React.Component {
  constructor (props) {
    super(props)
    this.callsHandleClick = this.callsHandleClick.bind(this)
  }

  callsHandleClick () {
    this.props.handleClick(true, this.props.person.quote)
  }

  render () {
    return (
      <div className = 'person' >
        <img className='person-image' onClick={this.callsHandleClick} src={this.props.person.image} />
        <h3 className='person-name'>{this.props.person.name}</h3>
      </div>
    )
  }
}

export default EachPerson
