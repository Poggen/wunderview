import React, { Component } from 'react';
import logo from './logo.svg';
import {loadLists} from './lib/getTaskService';
import './App.css';


class App extends Component {
  state = {
    lists: []
  }

componentDidMount() {
  loadLists()
    .then(lists => this.setState({lists}))
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {this.state.lists.map(lists => <li>{lists.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
