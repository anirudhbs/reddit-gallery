import React, { Component } from 'react'
import Cards from './Cards'
import Search from './Search'
import Header from './Header'
import Grids from './Grids'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit: 'me_irl',
      posts: [],
      hasMore: true,
      after: null,
      displayStyle: true
    }
    this.getPosts = this.getPosts.bind(this)
    this.toggleDisplayMode = this.toggleDisplayMode.bind(this)
  }

  getPosts () {
    const domain = 'https://www.reddit.com'
    const url = `/r/${this.state.subreddit}/top/.json?limit=4&after=${this.state.after}`
    fetch(domain + url)
    .then(data => data.json())
    .then(data => {
      const postsArray = data.data.children.map(cur => {
        return {
          url: cur.data.url,
          id: cur.data.id,
          title: cur.data.title
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
        console.log(this.state.after, posts.length)
      }
    })
  }

  getSubreddit (subreddit) {
    this.setState({ subreddit, after: null, posts: [] }, () => {
      this.getPosts()
    })
  }

  toggleDisplayMode () {
    this.setState({ displayStyle: !this.state.displayStyle })
  }

  render () {
    return (
      <div className='main'>
        <Header subreddit={this.state.subreddit} />
        <Search getSubreddit={this.getSubreddit.bind(this)} />
        <button className='display-type-button' onClick={this.toggleDisplayMode}>Toggle</button>
        {
          this.state.displayStyle
          ? <Grids posts={this.state.posts} getPosts={this.getPosts} hasMore={this.state.hasMore} />
          : <Cards posts={this.state.posts} getPosts={this.getPosts} hasMore={this.state.hasMore} />
        }
      </div>
    )
  }
}

export default Main
