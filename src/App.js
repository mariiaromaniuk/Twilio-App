import React from 'react';
import './styles/App.css';
import VideoChat from './components/VideoChat';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <VideoChat />
      </main>
    </div>
  );
};

export default App;