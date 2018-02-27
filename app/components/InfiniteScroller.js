import React, { Component } from 'react'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroller'

class InfiniteScroller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      after: null,
      subreddit: 'memes',
      hasMore: true
    }
    this.getPosts = this.getPosts.bind(this)
  }

  getPosts () {
    const domain = 'https://www.reddit.com'
    const url = `/r/${this.state.subreddit}/top/.json?limit=5&after=${this.state.after}`
    fetch(domain + url)
    .then(data => data.json())
    .then(data => {
      if (data.data.after === null) {
        // do something about it
        this.setState({ hasMore: false })
      } else {
        this.setState({ after: data.data.after })
      }
      const postsArray = data.data.children.map(cur => {
        return {
          url: cur.data.url,
          id: cur.data.id
        }
      })
      const filteredPosts = postsArray.filter(cur => cur.url.endsWith('.jpg') || cur.url.endsWith('.png'))
      const posts = this.state.posts
      posts.push(...filteredPosts)
      this.setState({ posts })
      console.log(this.state.after, posts.length)
    })
  }

  render () {
    const loader = <div className='loader'>Loading...</div>
    return (
      <InfiniteScroll loadMore={this.getPosts}
        hasMore={this.state.hasMore} loader={loader}>
        {
          this.state.posts.map(cur =>
            <Card url={cur.url} key={cur.id} />
          )
        }
      </InfiniteScroll>
    )
  }
}

export default InfiniteScroller
