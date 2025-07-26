"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [Hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [Weekend, setWeekend] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const hour = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const day = currentTime.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const weekend = currentTime.toLocaleDateString([], { weekday: "long" });
      setHour(hour);
      setDate(day);
      setWeekend(weekend);
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="space-y-10">
      <div className="relative w-full h-[45vh] ">
        <Image
          fill
          className="object-cover w-full h-full rounded-2xl "
          src={"/hero.png"}
          alt="background"
        />
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <p className="text-white xl:text-4xl lg:text-4xl md:text-2xl sm:text-xl text-xl font-bold drop-shadow-xl">
            Welcome to SassyTalks
          </p>
        </div>

        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <p className="text-white xl:text-7xl lg:text-7xl md:text-4xl sm:text-3xl text-3xl">{Hour}</p>
          <p className="text-white xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
            {Weekend},{date}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        <button className="bg-orange-400 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer flex flex-col items-start justify-between py-5 px-5">
          <div className="bg-white/30 rounded-md p-2">
            <Image
              width="24"
              height="24"
              src="/images/icons8-plus.svg"
              alt="plus"
            />
          </div>
          <div className="flex flex-col items-start">
            <div>New Meeting</div>
            <div>Start an Instant Meeting</div>
          </div>
        </button>

        <button className="bg-blue-500 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer flex flex-col items-start justify-between py-5 px-5">
          <div className="bg-white/30 rounded-md p-2">
            <Image
              width="24"
              height="24"
              src="/images/icons8-calendar-24.png"
              alt="plus"
            />
          </div>
          <div className="flex flex-col items-start">
            <div>Schedule Meeting</div>
            <div>plan your meeting</div>
          </div>
        </button>

        <button className="bg-purple-500 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer flex flex-col items-start justify-between py-5 px-5">
          <div className="bg-white/30 rounded-md p-2">
            <Image
              width="24"
              height="24"
              src="/images/icons8-video-24.png"
              alt="plus"
            />
          </div>
          <div className="flex flex-col items-start">
            <div>View Recordings</div>
            <div>Check out your recordings</div>
          </div>
        </button>

        <button className="bg-yellow-500 h-52 w-full rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer flex flex-col items-start justify-between py-5 px-5">
          <div className="bg-white/30 rounded-md p-2">
            <Image
              width="24"
              height="24"
              src="/images/icons8-add-contact-24.png"
              alt="plus"
            />
          </div>
          <div className="flex flex-col items-start">
            <div>Join Meeting</div>
            <div>via invitation link</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Page;
