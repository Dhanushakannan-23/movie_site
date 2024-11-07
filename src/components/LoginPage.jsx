
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/image/bckimg3.jpg";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (index === 0) {
      navigate('/movies'); // Navigate to MoviesPage when Free Movies & TV is clicked
    } else if (index === 1) {
      navigate('/live-tv'); // Navigate to LiveTvPage when Live TV is clicked
    } else if (index === 2) {
      navigate('/features')
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >      <div className="absolute inset-0 bg-black opacity-20"></div>
      {/* Tabs Section */}
      <div className="absolute top-4 w-full flex justify-center">
        {['Free Movies & Tv', 'Live Tv', 'Features', 'Sign In'].map((tab, index) => (
          <button
            key={index}
            className={`px-20 py-4 mx-4 text-lg font-medium ${
              activeTab === index
                ? 'border-b-4 border-white text-white'
                : 'text-yellow-500'
            } hover:text-white`}
            onClick={() => handleTabClick(index)}
            style={{
              backgroundColor: activeTab === index ? 'rgba(14, 15, 16, 0.59)' : 'transparent',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center text-center">
        {/* Display content for Free Movies & TV */}
        {activeTab === 0 && (
          <div>
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              Free Movies to Watch, Anytime, Anywhere
            </h1>
            <p className="text-white text-center text-xl mt-5">
              The search is over! Let Plex help you find the perfect movie to watch tonight for free.
            </p>
            <button className='bg-yellow-500 text-black font-bold mt-5 px-6 py-2 rounded-full'>Watch Free</button>
          </div>
        )}

        {/* Conditionally render the login form if "Sign In" tab is active */}
        {activeTab === 3 && (
          <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-sm w-full">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="text-lg text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                className="mt-2 mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />

              <label className="text-lg text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="mt-2 mb-6 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />

              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

