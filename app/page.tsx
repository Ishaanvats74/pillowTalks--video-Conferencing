"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      router.push("/sign-in");
    } else {
      setTimeout(() => {
        router.push("/pages/Home"); // or wherever your main home is
      }, 2000);
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white flex-col gap-6">
      <div className="text-4xl font-bold tracking-wide text-white/90 animate-fade-in">
        SassyTalks
      </div>
      <Loader2 className="animate-spin w-12 h-12 text-white/80" />
      <p className="text-xs text-gray-600 absolute bottom-6">
        © 2025 SassyTalks Inc.
      </p>
    </div>
  );
}
