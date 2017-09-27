import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import NavbarComponent from './components/navbar';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
    </div>
    </BrowserRouter>
  </div>
  </Provider>
  ,
  document.getElementById('root'));
//registerServiceWorker();
