import React from 'react'

const EachPerson = (props) => {
  return (
    <div>
      <div className='person'>
        <img className='person-image' src={props.person.img} />
        <h3 className='person-name'>{props.person.name}</h3>
      </div>
    </div>
  )
}

export default EachPerson
