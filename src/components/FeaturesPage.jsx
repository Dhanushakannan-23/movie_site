import React from "react";
import backgroundImage from "../assets/image/mediaimage.jpg";
import vedio from "../assets/image/vedio2.mp4";
import signup from "../assets/image/sign-up-1.png";
import download from "../assets/image/download-1.png";
import addmedia from "../assets/image/add-media-1.png";
import startstreaming from "../assets/image/start-streaming-2.png";
import image from "../assets/image/tvimage1.jpg";
import music from "../assets/image/music1.png"
export default function FeaturesPage() {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center h-96 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="flex-grow flex items-center justify-center text-center">
          {/* Display content for Free Movies & TV */}

          <div>
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              Your Media
            </h1>
            <p className="text-white text-center text-xl mt-5">
              Control your media destiny! Organize, beautify, stream, and share
              your personal collection of movies, TV, music, and photos
              anywhere, on all your devices.
            </p>
            <button className="bg-yellow-500 text-black font-bold mt-5 px-6 py-2 rounded-full">
             Organize and Stream
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-10 md:px-20">
        <h1 className="text-black text-3xl font-bold mt-14">How it Works</h1>
        <div className="flex flex-col md:flex-row  w-full">
          <p className="text-black text-s mt-2 w-2/4">
            Plex is the key to personal media bliss. Once you download our free
            and easy-to-use software where you store your files (usually a
            computer or external hard drive), it takes care of the rest. Plex
            magically scans and organizes your files, automatically sorting your
            media beautifully and intuitively in your Plex library. Once you've
            downloaded our app on your favorite devices, you'll be up and
            streaming everything in minutes.
          </p>
          <div className=" md:ml-28 w-96 md:w-96 ">
            <video
              className="w-full h-40"
              controls
              src={vedio}
              alt="How Plex Works"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center text-center mt-36">
        {/* Display content for Free Movies & TV */}

        <div>
          <h1 className="text-4xl md:text-6xl text-black font-bold">
            Get Started
          </h1>
          <p className="text-black text-center text-xl mt-5">
            Setup is easy with our step-by-step wizard, you’ll be streaming your
            media in no time.
          </p>
          <div className="py-10 px-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {/* Movie Card */}
              {[
                {
                  title: "Sign Up",
                  desc: "Get a FREE Plex account.",
                  img: signup,
                },
                {
                  title: "Get Plex Media Server",
                  desc: "Download Plex on the device where you store your media.",
                  img: download,
                },
                {
                  title: "Add media",
                  desc: "We support tons of different file types.",
                  img: addmedia,
                },
                {
                  title: "Start streaming",
                  desc: "Enjoy your media on all of your devices!",
                  img: startstreaming,
                },

                // Add more movies as needed
              ].map((movie, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-60 h-64 object-cover rounded-lg mb-2"
                  />
                  <p className="text-black text-center text-lg font-semibold">
                    {movie.title}
                  </p>
                  <p className="text-gray-900 text-center">{movie.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 h-full flex flex-col md:flex-row  justify-center px-10 md:px-20 bg-gray-100">
        <div className="mb-4 md:mb-0 md:mr-60 ">
          <img src={image} className="w-full h-80 object-cover rounded-lg mb-2 mt-14" />
        </div>
        <div className="w-2/4 mt-20">
          <h1 className="text-black text-6xl font-bold ">Movies & TV</h1>
          <p className="text-black text-lg mt-4">
            Whether you're jonesing for your favorite episode or you want to
            binge on your collection of movies, Plex beautifully organizes all
            the videosyou own AND makes it easy to find what you want to watch,
            on any device.
          </p>
        </div>
      </div>
      <div className="relative z-10 h-full flex flex-col md:flex-row  justify-center px-10 md:px-20 bg-gray-50">
        <div className="mb-4 md:mb-0 md:mr-60 ">
          <img src={music} className="w-full h-ful object-cover rounded-lg mb-2 mt-14" />
        </div>
        <div className="w-2/4 mt-20">
          <h1 className="text-black text-6xl font-bold ">Music</h1>
          <p className="text-black text-lg mt-4">
          Whether you call yourself an audiophile, music-lover, 
          or your group’s designated DJ, Plex makes it easy to 
          access all of your tracks and stream to any device.
          </p>
          <button className="bg-yellow-500 text-white font-bold mt-5 px-6 py-2 rounded-full">
              Learn More
            </button>
        </div>
      </div>
    </div>
  );
}
