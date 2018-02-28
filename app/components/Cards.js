import React, { Component } from 'react'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroller'

class InfiniteScroller extends Component {
  render () {
    const loader = <div className='loader'>Loading...</div>
    return (
      <InfiniteScroll loadMore={this.props.getPosts} className='infiniteScroll'
        hasMore={this.props.hasMore} loader={loader}>
        {
          this.props.posts.map(cur =>
            <Card url={cur.url} key={cur.id} title={cur.title}
              id={cur.id} />
          )
        }
      </InfiniteScroll>
    )
  }
}

export default InfiniteScroller
