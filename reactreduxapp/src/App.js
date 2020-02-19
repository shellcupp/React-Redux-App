import React from 'react';
import logo from './logo.svg';
import './App.css';

// Build a React Redux app
//  Fetch data inside an async action creator from an API of your choosing
//  Add the data from the API to the Redux store
//  Display the data from the store in a component
//  Some styling must be applied. It can be basic, but the app must not only use browser default stylings

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
