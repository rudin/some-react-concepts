import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

import * as pages from 'components/pages';

console.log(pages);

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={pages.Home}/>
    <Route path='classnames' component={pages.ClassNames}/>
    <Route path='cssmodules' component={pages.CSSModules}/>
    <Route path='reactcssmodules' component={pages.ReactCSSModules}/>
    <Route path='es6' component={pages.ES6}/>
    <Route path='composition' component={pages.Composition}/>
  </Router>,
  document.getElementById('root')
);