import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Header from './components/Header'
import LibraryList from './components/LibraryList'


class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <div className="App">
            <Header/>
              <LibraryList/>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Provider>
    );
  }
}

export default App;
