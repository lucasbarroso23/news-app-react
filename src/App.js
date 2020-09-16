import React from 'react';
import { NewsContextProvider } from './NewsContext';
import News from './components/News';

import './App.css';

function App() {
  return (
    <NewsContextProvider>
      <div className="App">
        <News></News>
      </div>
    </NewsContextProvider>

  );
}

export default App;
