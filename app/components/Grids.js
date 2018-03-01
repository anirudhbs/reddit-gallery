import React, { Component } from 'react'
import GridItem from './GridItem'
import InfiniteScroll from 'react-infinite-scroller'

class Grids extends Component {
  render () {
    const loader = <div className='loader'>Loading...</div>
    return (
      <InfiniteScroll loadMore={this.props.getPosts} className='grids'
        hasMore={this.props.hasMore} loader={loader}>
        {
          this.props.posts.map(cur =>
            <GridItem url={cur.url} key={cur.id} title={cur.title}
              id={cur.id} />
          )
        }
      </InfiniteScroll>
    )
  }
}

export default Grids
