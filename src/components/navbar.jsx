import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export default function NavBar() {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false)
  const pages = ['Home', 'Skills', 'Projects', 'AboutMe', 'GetInTouch']
  const isSamePath = (page) => {
    const location =
      window.location.pathname === '/' ? '/Home' : window.location.pathname
    return location === `/${page}`
  }
  return (
    <div>
      <div className="my-4 hidden flex-row items-center justify-center md:flex">
        {pages.map((page, index) => {
          const pageStyle =
            ' text-head mx-3 cursor-pointer transition-all  duration-500 hover:bg-primary hover:rounded-xl hover:px-3'
          const selectedStyle =
            'text-lg text-primary transition-all  duration-500 hover:bg-background hover:px-0'
          return (
            <a
              key={index}
              href={page}
              className={isSamePath(page) ? selectedStyle : pageStyle}
            >
              {page}
            </a>
          )
        })}
      </div>
      <div className="mx-4 mt-4 flex justify-end md:hidden">
        <Icon
          icon={
            isMenuOpenState ? 'material-symbols:close' : 'material-symbols:menu'
          }
          className="absolute text-3xl text-head transition-all duration-1000"
          onClick={() => setIsMenuOpenState(isMenuOpenState ? false : true)}
        />
        <div
          className={`${
            isMenuOpenState ? 'h-60' : 'h-0'
          } flex w-full flex-col overflow-hidden rounded-md bg-background-shade px-20 transition-all duration-1000`}
        >
          {pages.map((page, index) => {
            const pageStyle =
              'text-center text-head my-3 transition-all  duration-500 active:bg-primary active:rounded-md'
            const selectedStyle =
              'text-center text-primary transition-all  duration-500'
            return (
              <a
                key={index}
                href={page}
                className={isSamePath(page) ? selectedStyle : pageStyle}
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
