import { useState } from 'react'
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import SearchPage from './pages/SearchPage.jsx';
import SavesPage from './pages/SavesPage.jsx';
import MainPage from './pages/MainPage.jsx'
function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/saves" element={<SavesPage/>} />
            <Route path="/" element={<MainPage/>} />
        </Routes>
    </div>
  )
}

export default App
