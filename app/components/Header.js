import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div class='header'>
        <h1>{this.props.subreddit}</h1>
      </div>
    )
  }
}

export default Header
