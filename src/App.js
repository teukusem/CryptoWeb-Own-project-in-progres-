import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Page/Home';
import Market from './Page/Market';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Market />
    </div>
  );
}

export default App;
