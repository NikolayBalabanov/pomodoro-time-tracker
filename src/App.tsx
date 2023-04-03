import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Stat from './pages/Stat';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/statistics" element={<Stat />} />
      </Routes>
    </div>
  );
}

export default App;
