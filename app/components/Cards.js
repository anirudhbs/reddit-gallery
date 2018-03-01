import React, { Component } from 'react'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroller'

class Cards extends Component {
  render () {
    const loader = <div className='loader'>Loading...</div>
    return (
      <div className='cards-container'>
        <InfiniteScroll loadMore={this.props.getPosts} className='cards'
          hasMore={this.props.hasMore} loader={loader}>
          {
            this.props.posts.map(cur =>
              <Card url={cur.url} key={cur.id} title={cur.title}
                id={cur.id} thumbnail={cur.thumbnail} />
            )
          }
        </InfiniteScroll>
      </div>
    )
  }
}

export default Cards
