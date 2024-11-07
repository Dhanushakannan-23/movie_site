import React, { useState } from 'react';
import myImage from "../src/assets/image/star.png"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NextPage from "../src/components/NextPage.jsx"
import LoginPage from './components/LoginPage.jsx';
import MoviesPage from './components/MoviesPage.jsx';
import LiveTv from './components/LiveTv.jsx';
import FeaturesPage from './components/FeaturesPage.jsx';
export default function App() {
  const [name, setName] = useState('');
  const [subject,setSubject] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <Router>
    <Routes>
      {/* Home Page Route */}
      <Route
        path="/"
        element={
          <div className='p-32 border border-red-600 mx-10 my-10 flex flex-col items-center'>
            <img src={myImage} className='w-32 h-32' alt="Star" />
            <h1 className='text-3xl text-red-900 text-center'>App</h1>
            <h1 className='p-11 text-xl text-center text-blue-700'>subject</h1>

            <div className="container">
              <p className='text-center'>subject with all grades</p>
            </div>
            <div className="container_body">
              <label>Name :</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                className="mt-4 p-2 border border-gray-300 rounded mx-3"
              />
              <br />
              <label>Subject :</label>
              <input
                type="text"
                placeholder="Enter your subject"
                value={subject}
                onChange={handleSubjectChange}
                className="mt-4 p-2 border border-gray-300 rounded mx-1"
              />
            </div>
            <button className='border bg-cyan-600 my-5 h-8 w-36 text-white'>Save</button>

            {/* Link to Next Page */}
            <Link to="/next">
              <button className='border bg-green-600 h-8 w-36 text-white'>Next Page</button>
            </Link>
             {/* Login Button */}
             <Link to="/login">
             <button
                className="border bg-blue-600 h-8 w-36 text-white mt-5"
              >
                Login
              </button>
             </Link>
          
          </div>
        }
      />
      {/* Next Page Route */}
      <Route path="/next" element={<NextPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/live-tv" element={<LiveTv />} />
      <Route path="/features" element={<FeaturesPage />} />
      
   
    </Routes>
  </Router>

  )
}
