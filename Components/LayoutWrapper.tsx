"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

  const isFullScreenPage = ["/", "/sign-in", "/sign-up"].includes(pathname);

  if (isFullScreenPage) {
    return <>{children}</>; 
  }
  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100vh-96px)]">
        <div className="min-w-[250px] max-w-full md:w-1/5 bg-gray-900 hidden  sm:block md:block lg:block xl:block">
          <SideBar />
        </div>
        <div className="md:w-4/5 overflow-y-auto w-full bg-black text-white p-4">
          {children}
        </div>
      </div>
    </>
  );
}