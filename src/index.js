import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/Header'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'


import { renderRoutes } from 'react-router-config'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import routes from './Routes/Routes'

import ConnectedRouter, {  routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers


import './index.css';
import App from './App';
import About from './components/About/About'
import registerServiceWorker from './registerServiceWorker';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            {renderRoutes(routes)}
        </BrowserRouter>
        {/*<App/>*/}
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
