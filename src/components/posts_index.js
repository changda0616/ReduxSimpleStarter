import _ from 'lodash'
import React, { Component } from 'react'
import { fetchPosts } from '../actions/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }
  renderPost () {
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      )
    })
  }

  render () {
    console.log(this.props.posts)
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Write new Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPost()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
