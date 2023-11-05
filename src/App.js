import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Data from './pages/Data';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
      <Routes>
        <Route path="about-rr1"     element={<About />} />
        <Route path="data"          element={<Data />} />
        <Route path="/"             element={<HomePage />} />
        <Route path="about"         element={<AboutPage/>} />
        <Route path="articles"      element={<ArticlesListPage />} />
        <Route path="articles/:articleId" element={<ArticlePage />} />
        <Route path="*"  element={<NotFoundPage />} /> 
        <Route path="articles/:*"  element={<NotFoundPage />} />             
      </Routes>
      </div>
    </div>
  );
}

export default App;

// const response = await axios.get("http://localhost:8000/api/articles/learn-react");
// const data = response.data;
