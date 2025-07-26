"use client"


import React from 'react'

const Page = () => {
  return (
    <div className="w-4/5 h-full text-white bg-black  overflow-auto p-10 space-y-10">


      <div>
        <h1 className='text-4xl'>
        Personal Meeting Room
        </h1>
      </div>
      <div className='flex text-xl space-x-6 '>
        <ul className='space-y-7'>
          <li>Topic:</li>
          <li>Meeting ID:</li>
          <li>Invite Link:</li>
        </ul>
        <ul className='space-y-7'>
          <li>ishaans Meeting Room</li>
          <li>user_2wzV6wH68PfXheK4juvjBcVeMaj</li>
          <li>meet.vinucode.in/meeting/user_2wzV6wH68PfXheK4juvjBcVeMaj?personal=t</li>
        </ul>
      </div>
      <div className='flex gap-5 '>
        <button className='bg-blue-700 p-2 text-md rounded-md'>Start Meeting</button>
        <button className='bg-red-600 p-2 text-md rounded-md'>Copy Invitation</button>
      </div>
    </div>
  )
}

export default Page

