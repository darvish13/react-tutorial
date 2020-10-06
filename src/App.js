import React, { Component } from 'react'
import './App.css'
import Api from 'axios'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    Api.get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        console.log('***** Result from Api *******', result.data)

        this.setState({
          users: result.data
        })
      })
  }

  render() {
    return (
      <>
        <div className="wrapper">
          {
            this.state.users.map(user => {
              return (
                <div className="card">
                  <p>{user.name}</p>
                  <p>street: {user.address.street} city: {user.address.city}</p>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}

export default App