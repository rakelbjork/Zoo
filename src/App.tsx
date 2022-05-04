import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Animals } from './components/Animals/Animals';
import { FeedButton } from './components/FeedButton';

function App() {
  return (
    <div className="App">
      <Animals></Animals>
      <FeedButton></FeedButton>
    </div>
  );
}

export default App;
