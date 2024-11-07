import React from 'react'
import vediosource from "../assets/image/vedio1.mp4"

export default function LiveTv() {
  return (
    <div 
    className="relative h-screen w-full bg-cover bg-center" 
  
  >
        {/* Video background */}
        <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={vediosource}
        autoPlay
        loop
        muted
      />
    {/* Overlay to darken the background */}
    <div className="absolute inset-0 bg-black opacity-70"></div>

    {/* Content section */}
    <div className="relative z-10 h-full flex flex-col items-start justify-center px-10 md:px-20">
      <h1 className="text-white text-4xl md:text-6xl font-bold">
       Watch Entertainment Movies & Shows
      </h1>
      <p className="text-white text-lg md:text-2xl mt-4 max-w-md">
      Plex delivers some of the best movies and tv shows around absolutely free right here.
       Settle in and find the perfect show for you and enjoy it on us right now
      </p>
      <button className="bg-yellow-500 text-black mt-6 px-8 py-3 rounded-full font-semibold text-lg">
        Tune In Free
      </button>
    </div>



  </div>
  )
}
