import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {
    // const { meta: { touched, error }} = field;
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{ field.label }</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    //console.log(values);
    this.props.createPost(values, () => {
        this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <h3>Posts New</h3>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
          <Field name="title"
                label="Title"
                component={this.renderField} />
          <Field name="categories"
                label="Categories"
                component={this.renderField} />
          <Field name="content"
                label="Post Content"
                component={this.renderField}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log('values ', values);
  const errors = {};
  // validate the inputs from 'values'
  // if (values.title.length < 3) {
  //   errors.title = "Enter a title that is at least 3 characters!";
  // }
  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  return errors;


}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
