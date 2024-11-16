'use client'
import { useState } from 'react'
import Features from '@/components/features/Features'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/page'
import Slide from '@/components/slide/slide'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Page = () => {
  const [showVideo, setShowVideo] = useState(false)
  const handlePlayClick = () => {
    setShowVideo(true)
  }

  return (
    <main>
      <section className="flex flex-col text-white relative justify-between min-h-screen">
        <video
          src={'/assets/test.mp4'}
          className="absolute -z-10 w-full h-full object-cover"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black/70"></div>
        <Header />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center px-4">
          <div className="col-span-1 flex flex-col gap-6 md:gap-10 px-5 md:px-0">
            <h2 className="text-2xl md:text-4xl font-bold w-full md:w-[400px]">
              Personal adventures around the world
            </h2>
            <p className="text-base md:text-lg text-white font-medium">
              We build the route so that in a week we can show the most
              interesting places in the region. We include only the best in our
              program: accommodation, transportation, food, people and
              attractions. We work with groups of up to 10 people and personally
              accompany them.
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <div
              onClick={handlePlayClick}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-black/20 border-4 hover:border-transparent hover:bg-white duration-300 cursor-pointer border-gray-500"
            >
              <FaPlay className="text-3xl text-primary" />
            </div>
          </div>
        </div>
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-3/4 h-3/4 md:w-1/2">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white bg-[#AA1233] p-2 rounded-full"
              >
                X
              </button>
            </div>
          </div>
        )}
        <div className="container mx-auto bg-slate-200 text-black text-center py-5 w-full">
          <p className="font-bold text-2xl">Best Tours</p>
        </div>
      </section>

      <section className="w-full h-screen overflow-y-auto">
        <div>
          <Slide />
          <Features />
        </div>
        <Footer />
      </section>
    </main>
  )
}

export default Page
