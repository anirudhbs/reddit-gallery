import React, { Component } from 'react'
import Cards from './Cards'
import Search from './Search'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit: 'me_irl',
      posts: [],
      hasMore: true,
      after: null
    }
    this.getPosts = this.getPosts.bind(this)
  }

  getPosts () {
    const domain = 'https://www.reddit.com'
    const url = `/r/${this.state.subreddit}/top/.json?limit=5&after=${this.state.after}`
    fetch(domain + url)
    .then(data => data.json())
    .then(data => {
      const postsArray = data.data.children.map(cur => {
        return {
          url: cur.data.url,
          id: cur.data.id
        }
      })
      const filteredPosts = postsArray.filter(cur => cur.url.endsWith('.jpg') || cur.url.endsWith('.png'))
      const posts = this.state.posts

      if (data.data.after === null) {
        this.setState({ hasMore: false })
      } else if (data.data.after === this.state.after) {
        // same API call
        console.log('repost')
      } else {
        this.setState({ after: data.data.after })
        posts.push(...filteredPosts)
        this.setState({ posts })
      }
      console.log(this.state.after, posts.length)
    })
  }

  getSubreddit (subreddit) {
    this.setState({ subreddit, after: null, posts: [] }, () => {
      this.getPosts()
    })
  }

  render () {
    return (
      <div className='main'>
        <Search getSubreddit={this.getSubreddit.bind(this)} />
        <Cards posts={this.state.posts} getPosts={this.getPosts} hasMore={this.state.hasMore} />
      </div>
    )
  }
}

export default Main
