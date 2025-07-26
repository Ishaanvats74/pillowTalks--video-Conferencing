"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 h-24">
      <div>
        <p className="text-white text-xl font-semibold">SassyTalks</p>
      </div>
      <div className="flex items-center gap-4 text-white">
        <p>Hello, {user?.firstName}</p>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="sm:hidden block">
          <Image
            width="24"
            height="24"
            src="/images/icons8-striped-patterns-50.png"
            alt="plus"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
