import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import BlogPosts from 'BlogPosts';

require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('style!css!sass!applicationStyles');

ReactDOM.render (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={BlogPosts} />
            <Route path="/posts/:id" component={BlogPosts} />
        </Route>
    </Router>, 
    document.getElementById('app')
);