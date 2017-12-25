import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { createPost } from '../actions/index'
import { connect } from 'react-redux'

class PostsNew extends Component {
  renderField (field) {
    const {meta: {touched, error}} = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.title}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
         />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  onSubmit (values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }
  render () {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          title='Title For Post'
          name='title'
          component={this.renderField}
        />
        <Field
          title='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          title='Content For Post'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn-primary btn'>Submit</button>
        <Link to='/' className='btn btn-danger'>
          Cancel
        </Link>
      </form>
    )
  }
}
function validate (values) {
  const error = {}
  if (!values.title) {
    error.title = 'TITLE CAN\'T EMPTY'
  }
  if (!values.categories) {
    error.categories = 'CATEGORIES CAN\'T EMPTY'
  }
  if (!values.content) {
    error.content = 'CONTENT CAN\'T EMPTY'
  }
  return error
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
)
