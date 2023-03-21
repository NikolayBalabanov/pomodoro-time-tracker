import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<h1>в разработке</h1>} />
        <Route path="/statistics" element={<h1>статистику еще не завезли</h1>} />
      </Routes>
    </div>
  );
}

export default App;
