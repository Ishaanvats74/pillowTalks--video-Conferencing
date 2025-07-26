"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900  h-[96px]">
      <div>
        <p className="text-white text-xl font-semibold">SassyTalks</p>
      </div>
      <div className="flex items-center gap-4 text-white">
        <p>Hello, {user?.firstName}</p>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
