import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='header'>
        <h1>r/{this.props.subreddit}</h1>
      </div>
    )
  }
}

export default Header
