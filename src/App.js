import React from 'react'
import Navbar from './components/Navbar';
import "./App.css";
import BookContainer from './components/BookContainer';
import Shimmer from './components/Shimmer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <BookContainer/>
      <Shimmer/>
    </div>
  )
}

export default App;
