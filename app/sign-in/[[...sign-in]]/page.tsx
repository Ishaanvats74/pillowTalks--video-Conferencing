"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter()
  const {isSignedIn} = useAuth();
  if (isSignedIn) {
    router.push("/")
  }
  return (
    <SignIn.Root>
      <SignIn.Step
        name="start"
        className="min-h-screen flex flex-col justify-center items-center "
      >
        <div className=" p-6 rounded-xl shadow-xl shadow-black/15 space-y-10 ">
            <div>
                <p className="text-2xl font-semibold">Sign In</p>
                <p>to continue to Sassy Talks</p>
            </div>
          <div className="">
            <Clerk.Connection name="google" className="px-3 py-3 flex justify-start items-center w-full gap-3 border border-gray-200 hover:bg-gray-200 transition-all duration-150 ease-in-out rounded-lg">
              <Clerk.Icon className="size-4" />
              Google
            </Clerk.Connection>
          </div>
          <hr className="bg-gray-200"/>
          <Clerk.Field name="identifier" className="flex flex-col w-full space-y-2">
            <Clerk.Label className="text-sm font-sans font-semibold">Email address or username</Clerk.Label>
            <Clerk.Input className="border border-gray-200 focus:outline-none px-3 py-2 w-90 focus:ring-1 focus:ring-purple-400 rounded-lg text-sm transition-all duration-150 ease-in-out" />
            <Clerk.FieldError className="" />
          </Clerk.Field>
          <SignIn.Action submit className=" bg-blue-500 text-white w-full py-2 hover:bg-blue-600 rounded-lg transition-all duration-100 ease-in-out">
            Continue
          </SignIn.Action>
          <div>
            <p>No account? <Link href={'/sign-up/page.tsx'}>Sign up </Link></p>
          </div>
        </div>
      </SignIn.Step>
    </SignIn.Root>
  );
}
