'use client'
import Header from '@/components/header/page'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Page = () => {
  return (
    <section className="flex flex-col text-white relative justify-between h-screen">
      <video
        src={'/assets/test.mp4'}
        className="absolute -z-10 w-full h-screen object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/70"></div>
      <Header />
      <div className="container mx-auto grid grid-cols-2 place-items-center">
        <div className="col-span-1">
          <h2>Personal adventures around the world</h2>
          <p>
            We build the route so that in a week we can show the most
            interesting places in the region. We include only the best in our
            program: accommodation, transportation, food, people and
            attractions. We work with groups of up to 10 people and personally
            accompany them.
          </p>
        </div>
        <div className="col-span-1">
          <div className='size-[100px] flex items-center justify-center rounded-full bg-black/20 border-4 hover:border-transparent hover:bg-white duration-300 cursor-pointer border-gray-500'>
            <FaPlay className='text-[30px] text-primary' />
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-white text-black text-center py-5 w-full">
        <p className="font-bold">best tour</p>
      </div>
    </section>
  )
}

export default Page
