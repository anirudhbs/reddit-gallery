import React, { Component } from 'react'
import Cards from './Cards'
import Search from './Search'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.getImages = this.getImages.bind(this)
  }

  getImages () {
    fetch('https://www.reddit.com/r/memes.json')
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

  componentDidMount () {
    this.getImages()
  }

  render () {
    return (
      <div className='main'>
        <Search />
        <Cards posts={this.state.posts} />
      </div>
    )
  }
}

export default Main
