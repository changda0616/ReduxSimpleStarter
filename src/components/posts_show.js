import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions/index'
import { Link } from 'react-router-dom'

class PostShow extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    console.log(id)
    this.props.fetchPost(id)
  }
  onDeleteClick () {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }
  render () {
    const {post} = this.props
    if (!post) {
      return <div>Loading</div>
    }
    return (
      <div>
        <Link to='/'>Back to index.</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>Contents: {post.content}</p>
        <button className='btn btn-danger' onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </div>
    )
  }
}

function mapStateToProps ({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow)
