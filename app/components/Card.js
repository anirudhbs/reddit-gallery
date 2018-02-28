import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='title'>
          {this.props.title}
        </div>
        <img src={this.props.url} />
      </div>
    )
  }
}

export default Card
