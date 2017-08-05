import React, { Component } from 'react';

class PostsView extends Component {
  render() {
     return <div>Show post {this.props.params.id}</div>;
  }
}

export default PostsView;
