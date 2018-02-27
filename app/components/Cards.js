import React, { Component } from 'react'
import Card from './Card'

class Cards extends Component {
  render () {
    return (
      this.props.posts.map(cur =>
        <Card url={cur.url} key={cur.id} />
      )
    )
  }
}

export default Cards
