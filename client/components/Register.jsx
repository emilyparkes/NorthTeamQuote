import React from 'react'
import request from 'superagent'



class Register extends React.Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

   handleChange (e) {
     this.setState({
       [e.target.name]: e.target.value
     })

   }

   handleSubmit () {
    const data = this.state
    this.newUser(data)


  }

   newUser (data, test) {
     request
       .post('http://localhost:3000/api/v1/auth/register')
       .set('Content-Type', 'application/json')
       .send(data)
       .then(test)
   }

   test () {
     console.log('working')
   }

  render() {
  return (
    <div className="Register">
      User Name: <input name="username" onChange={this.handleChange}/>
      User Password: <input name="password" onChange={this.handleChange} />  
      <button onClick={this.handleSubmit}>Submit</button>    
    </div>
  )
}
}

export default Register
