import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div className='card'>
        <img src={this.props.url} />
        {/* {this.props.url} */}
      </div>
    )
  }
}

export default Card
