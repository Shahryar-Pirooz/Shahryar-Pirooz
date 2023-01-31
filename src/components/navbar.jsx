import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export default function NavBar({ state, handler }) {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false)
  const pages = ['Home', 'Skills', 'Projects', 'AboutMe', 'GetInTouch']
  return (
    <div>
      <div className="hidden md:flex flex-row justify-center items-center my-4">
        {pages.map((page, index) => {
          const pageStyle =
            ' text-head mx-3 cursor-pointer transition-all  duration-500 hover:bg-primary hover:rounded-xl hover:px-3'
          const selectedStyle =
            'text-primary transition-all  duration-500 hover:bg-background hover:px-0'
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
      <div className="flex justify-end md:hidden mt-4 mx-4">
        <Icon
          icon={
            isMenuOpenState ? 'material-symbols:close' : 'material-symbols:menu'
          }
          className="absolute text-head text-3xl transition-all duration-1000"
          onClick={() => setIsMenuOpenState(isMenuOpenState ? false : true)}
        />
        <div
          className={`${
            isMenuOpenState ? 'h-60' : 'h-0'
          } flex overflow-hidden w-full transition-all duration-1000 flex-col px-20 bg-background-shade rounded-md`}
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
