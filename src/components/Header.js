import React, { Component } from 'react'
import { Test2 } from './Test'

export default class Header extends Component {

  componentDidMount() {
    Test2()
  }

  render() {
    return (
      <>
        <div className="header">
          <h1>Todo List</h1>
        </div>

        <Test2 />
      </>
    )
  }
}