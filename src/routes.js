import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsIndex  from './components/posts_index';

import App from './components/app';


export default (
  <Route path="/" component={App} >
     <IndexRoute component={PostsIndex} />
     <Route path="greet" component={Greeting} />
     <Route path="greet2" component={Greeting} />
     <Route path="greet3" component={Greeting} />
  </Route>
);

//google.com   =>