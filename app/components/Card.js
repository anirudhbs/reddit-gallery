import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-title'>
          {this.props.title}
        </div>
        <div className='card-image-container'>
          <img src={this.props.url} className='image-card' />
        </div>
        <div className='post-footer'>
          <a href={`https://redd.it/${this.props.id}`} target='blank'>Comments</a>
        </div>
      </div>
    )
  }
}

export default Card
