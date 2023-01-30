import React from 'react'

export default function NavBar({ state, handler }) {
  const pages = ['Home', 'Skills', 'Projects', 'AboutMe', 'GetInTouch']
  return (
    <div className="flex flex-row justify-center items-center my-4">
      {pages.map((page) => {
        const pageStyle =
          ' text-head mx-3 cursor-pointer transition-all  duration-500 hover:bg-primary hover:rounded-xl hover:px-3'
        const selectedStyle =
          'text-primary transition-all  duration-500 hover:bg-background hover:px-0'
        if (page === state) {
          return (
            <p
              key={page}
              className={`${pageStyle} ${selectedStyle}`}
              onClick={() => handler(page)}
            >
              {page}
            </p>
          )
        } else {
          return (
            <p key={page} className={pageStyle} onClick={() => handler(page)}>
              {page}
            </p>
          )
        }
      })}
    </div>
  )
}
