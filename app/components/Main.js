import React, { Component } from 'react'
import Cards from './Cards'
import Search from './Search'
import InfiniteScroller from './InfiniteScroller'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit: '',
      posts: []
    }
    this.getImages = this.getImages.bind(this)
  }

  getImages () {
    const url = `https://www.reddit.com/r/${this.state.subreddit}/rising/.json?limit=4`
    fetch(url)
    .then(data => data.json())
    .then(data => {
      const posts = data.data.children.map(cur => {
        return {
          url: cur.data.url,
          subreddit: cur.data.subreddit,
          id: cur.data.id
        }
      })
      this.setState({posts})
    }
    )
  }

  getSubreddit (subreddit) {
    this.setState({ subreddit }, () => {
      this.getImages()
    })
  }

  render () {
    return (
      <div className='main'>
        <Search getSubreddit={this.getSubreddit.bind(this)} />
        {/* <Cards posts={this.state.posts} /> */}
        <InfiniteScroller posts={this.state.posts} />
      </div>
    )
  }
}

export default Main
