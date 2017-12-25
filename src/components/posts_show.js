import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'
import { Link } from 'react-router-dom'

class PostShow extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    console.log(id)
    this.props.fetchPost(id)
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
      </div>
    )
  }
}

function mapStateToProps ({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostShow)
