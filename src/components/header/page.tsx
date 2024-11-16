'use client'
import Link from 'next/link'

import React, { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    console.log('Running on client-side')
  }, [])

  if (typeof window !== 'undefined') {
    console.log('This is the client')
  }
  const navbarContext = [
    {
      id: 1,
      href: '/about',
      text: 'about',
    },
    {
      id: 2,
      href: '/adventures',
      text: 'adventures',
    },
    {
      id: 3,
      href: '/features',
      text: 'features',
    },
    {
      id: 4,
      href: '/reports',
      text: 'reports',
    },
    {
      id: 5,
      href: '/blog',
      text: 'blog',
    },
  ]
  return (
    <header className="flex container mx-auto py-3 items-center justify-between">
      <h2 className="text-[72px] font-extrabold">211</h2>
      <nav className="flex items-center gap-5 text-[20px]">
        {navbarContext.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="font-bold text-[20px]"
            prefetch={false}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
