import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export default function NavBar({ state, handler }) {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false)
  const pages = ['Home', 'Skills', 'Projects', 'AboutMe', 'GetInTouch']
  return (
    <div>
      <div className="my-4 hidden flex-row items-center justify-center md:flex">
        {pages.map((page, index) => {
          const pageStyle =
            ' text-head mx-3 cursor-pointer transition-all  duration-500 hover:bg-primary hover:rounded-xl hover:px-3'
          const selectedStyle =
            'text-lg text-primary transition-all  duration-500 hover:bg-background hover:px-0'
          if (page === state) {
            return (
              <p
                key={index}
                className={`${pageStyle} ${selectedStyle}`}
                onClick={() => handler(page)}
              >
                {page}
              </p>
            )
          } else {
            return (
              <p
                key={index}
                className={pageStyle}
                onClick={() => handler(page)}
              >
                {page}
              </p>
            )
          }
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
            const selectedStyle = 'text-primary transition-all  duration-500'
            if (page === state) {
              return (
                <p
                  key={index}
                  className={`${pageStyle} ${selectedStyle}`}
                  onClick={() => handler(page)}
                >
                  {page}
                </p>
              )
            } else {
              return (
                <p
                  key={index}
                  className={pageStyle}
                  onClick={() => handler(page)}
                >
                  {page}
                </p>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
