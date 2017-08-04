import React, { Component } from  'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
   render() {
        const { fields: { title, categories, content } , handleSubmit } = this.props;

     return (
        <form onSubmit={handleSubmit}>
            <h3> Create a New Post </h3>
            <div className="form-group">
              <label>Title</lable>
              <input type="text" className="form-control" {...title} />
            </div>

            <div className="form-group">
               <label>Categories</label>
               <input type="text" className="form-control" {...categories} />
            </div>

            <div className="form-control">
               <label>Content</label>
               <textarea className="form-control" {...content} />
           </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     );
   }
}

function validate(values) {
   const errors = {};

   if(!values.title) {
       errors.title = 'Enter a username';
   }

   return errors;
}


//connect: first argument is mapStateToProps,  2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
