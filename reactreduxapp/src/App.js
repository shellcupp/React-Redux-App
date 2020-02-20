import React from 'react';
//import thunk from 'redux-thunk';
import Joke from './components/Joke';
// Build a React Redux app
//  Fetch data inside an async action creator from an API of your choosing
//  Add the data from the API to the Redux store
//  Display the data from the store in a component
//  Some styling must be applied. It can be basic, but the app must not only use browser default stylings

function App() {
  return (
    <div className="App">
    <h1>Something Funny</h1>
    <Joke/>
    </div>
  );
}

export default App;