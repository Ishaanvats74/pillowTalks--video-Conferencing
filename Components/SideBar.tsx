"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type linkType = { Name: string; Path: string };
const link: linkType[] = [
  { Name: "Home", Path: "/pages/Home" },
  { Name: "Upcoming", Path: "/pages/Upcoming" },
  { Name: "Previous", Path: "/pages/Previous" },
  { Name: "Recording", Path: "/pages/Recordings" },
  { Name: "PersonalRoom", Path: "/pages/PresonalRoom" },
];

const SideBar = () => {
  const pathname = usePathname()

  return (

      <div className="flex flex-col space-y-4 pt-2  ">
        {link.map((item) => (
          <Link
            href={item.Path}
            key={item.Name}
            className={`p-4 mx-5 rounded-xl text-white font-medium text-xl bg-amber-950 ${pathname === item.Path?'bg-blue-700':"bg-gray-900 "}`}>
            {item.Name}
          </Link>
        ))}
      </div>

  );
};

export default SideBar;
