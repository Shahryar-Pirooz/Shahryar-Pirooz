import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pages = ['home', 'skills', 'projects', 'about', 'contact']
  const isSamePath = (page) => {
    const location =
      window.location.pathname === '/' ? '/home' : window.location.pathname
    return location === `/${page}`
  }
  return (
    <div>
      <div className="my-4 hidden flex-row items-center justify-center md:flex">
        {pages.map((page, index) => {
          return (
            <a
              key={index}
              href={page}
              className={
                isSamePath(page) ? 'selected-navbar-item' : 'navbar-items'
              }
            >
              {page}
            </a>
          )
        })}
      </div>
      <div className="mx-4 mt-4 flex justify-end md:hidden">
        <Icon
          icon={isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'}
          className="absolute text-3xl text-head transition-all duration-1000"
          onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
        />
        <div
          className={`${
            isMenuOpen ? 'h-60' : 'h-0'
          } flex w-full flex-col overflow-hidden rounded-md bg-background-shade px-20 transition-all duration-1000`}
        >
          {pages.map((page, index) => {
            return (
              <a
                key={index}
                href={page}
                className={
                  isSamePath(page)
                    ? 'selected-navbar-item-sm'
                    : 'navbar-items-sm'
                }
              >
                {page}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
