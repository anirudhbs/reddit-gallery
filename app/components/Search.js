import React, { Component } from 'react'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({subreddit: event.target.value})
  }

  handleSubmit (event) {
    this.props.getSubreddit(this.state.subreddit)
    event.preventDefault()
  }

  render () {
    return (
      <div className='search'>
        <input type='text' value={this.state.subreddit} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Go</button>
      </div>
    )
  }
}

export default Search
