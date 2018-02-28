import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='title'>
          {this.props.title}
        </div>
        <div className='image-container'>
          <img src={this.props.url} />
        </div>
        <div className='post-footer'>
          <a href={`https://redd.it/${this.props.id}`} target='blank'>Comments</a>
        </div>
      </div>
    )
  }
}

export default Card
