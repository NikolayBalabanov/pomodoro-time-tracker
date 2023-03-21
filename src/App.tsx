import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/statistics" element={<h1>статистику еще не завезли</h1>} />
      </Routes>
    </div>
  );
}

export default App;
