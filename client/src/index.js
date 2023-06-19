import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './Pages/CreatePost';
import Posts from './Pages/Posts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/create/posts' element={<Posts />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

