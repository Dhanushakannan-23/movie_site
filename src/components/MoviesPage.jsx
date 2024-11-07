import React from 'react';
import image from "../assets/image/action.jpg";
import image1 from "../assets/image/img1.png";
import image2 from "../assets/image/img2.png";
import image3 from "../assets/image/img3.png";
import image4 from "../assets/image/img4.png";
import image5 from "../assets/image/img5.png";
import image6 from "../assets/image/img6.png";
export default function MoviesPage() {
  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center" 
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content section */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-10 md:px-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Action Movies & TV Shows
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4 max-w-md">
          Welcome to the edge of your seat, because it's time to dive into the action. 
          From classic westerns and war films to modern action hero adventures, it's all 
          right here on Plex.
        </p>
        <button className="bg-yellow-500 text-black mt-6 px-8 py-3 rounded-full font-semibold text-lg">
          Sign Up
        </button>
      </div>


      {/* Movie Grid Section */}
      <div className="bg-black py-10 px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Movie Card */}
          {[
            { title: 'InTo Darkness', year: '1926', img: image1 },
            { title: 'TOPGUN MAVERICK', year: '2002', img: image2 },
            { title: 'AVENGERS2', year: '1964', img: image3 },
            { title: 'LIFE OUTSIDE', year: '5 seasons', img:image4 },
            { title: 'ONCE UPON A TIME', year: '1972', img: image5 },
            { title: 'BAT MAN', year: '1972', img: image6 },
            // Add more movies as needed
          ].map((movie, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={movie.img} 
                alt={movie.title} 
                className="w-full h-64 object-cover rounded-lg mb-2" 
              />
              <p className="text-white text-center text-lg font-semibold">
                {movie.title}
              </p>
              <p className="text-gray-400 text-center">
                {movie.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}