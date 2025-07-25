"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [Hour,setHour] =useState("");
  const [date , setDate] = useState("");
  const [Weekend,setWeekend] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const hour = currentTime.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit'})
      const day = currentTime.toLocaleDateString([],{year:'numeric',month:'long',day:'numeric'})
      const weekend = currentTime.toLocaleDateString([],{weekday:'long'})
      setHour(hour)
      setDate(day)
      setWeekend(weekend)
    }, 1000);
    
    return () => clearInterval(interval);
  },);

  return (
    <div className="w-4/5 h-full text-white bg-gray-100 p-6 overflow-auto space-y-10">
      <div className="relative w-full h-[45vh]">
        <Image
          fill
          className="object-cover w-full h-full "
          src={"/hero.png"}
          alt="background"
        />
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <p className="text-white text-4xl font-bold drop-shadow-xl">
            Welcome to SassyTalks
          </p>
        </div>

        {/* "hi" at Center Left */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <p className="text-white text-7xl">{Hour}</p>
          <p className="text-white text-xl">{Weekend},{date}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        <button className="bg-orange-400 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
          <div>New Meeting</div>
        </button>

        <button className="bg-blue-500 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
          <div>Schedule Meeting</div>
        </button>

        <button className="bg-purple-500 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
          <div>View Recordings</div>
        </button>

        <button className="bg-yellow-500 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
          <div>Join Meeting</div>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
