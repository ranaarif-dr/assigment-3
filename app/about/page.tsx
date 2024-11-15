import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center gap-5">
        <h1 className='text-2xl font-bold'>About Page</h1>
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/about"}
      >
        About
      </Link>
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/contact"}
      >
        go to contact
      </Link>
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/navbar"}
      >
        go to navbar
      </Link>
      <Link
        className="bg-emerald-500 px-4 py-2 rounded-md text-white capitalize"
        href={"/footer"}
      >
        {" "}
        go to footer
      </Link>
    </div>
  )
}

export default About