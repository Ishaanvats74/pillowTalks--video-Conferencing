"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const interval = setInterval(() => setLoading(false), 4000);
    return () => clearInterval(interval);
  });

  if (!isSignedIn) {
    router.push("/sign-in/[[...sign-in]]/page.tsx");
  }

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden ">
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black text-white flex-col gap-6">
          <div className="text-4xl font-bold tracking-wide text-white/90 animate-fade-in">
            SassyTalks
          </div>
          <Loader2 className="animate-spin w-12 h-12 text-white/80" />

          <p className="text-xs text-gray-600 absolute bottom-6">
            © 2025 SassyTalks Inc.
          </p>
        </div>
      ) : (
        <div>
          <div>
            {/* Navbar */}
            <nav className="flex justify-between items-center p-6 bg-blue-800 h-[96px]">
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

            <div className="flex w-full h-[calc(100vh-96px)] overflow-hidden">
              {/* Sidebar */}
              <div className="w-1/5 flex flex-col bg-blue-600 h-full space-y-4 pt-2">
                <Link href={"/"} className="p-4 text-white font-medium text-xl bg-amber-950">Home</Link>
                <Link href={"/"} className="p-4 text-white font-medium text-xl bg-amber-950">Upcoming</Link>
                <Link href={"/"} className="p-4 text-white font-medium text-xl bg-amber-950">Previous</Link>
                <Link href={"/"} className="p-4 text-white font-medium text-xl bg-amber-950">Recordings</Link>
                <Link href={"/"} className="p-4 text-white font-medium text-xl bg-amber-950">Persnol Room</Link>
              </div>

              {/* Main content */}
              <div className="w-4/5 h-full text-black bg-gray-100 p-6 overflow-auto">
                <div>
                  <Image width={1200} height={100} src={"/hero.png"} alt="background"></Image>
                </div>
                <div>
                  <button className="bg-orange-400">
                    <div>
                      New Meeting
                    </div>
                  </button>

                  <button className="bg-blue-500">
                    <div>Schedule Meeting</div>
                  </button>

                  <button className="bg-purple-500">
                    <div>View Recordings</div>
                  </button>

                  <button className="bg-yellow-500">
                    <div>Join Meeting</div>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
