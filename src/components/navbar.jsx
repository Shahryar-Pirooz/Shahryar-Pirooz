import React from 'react'

export default function NavBar({ state, handler }) {
  const pages = ['Home', 'Skills', 'Projects', 'AboutMe', 'GetInTouch']
  return (
    <div className="flex flex-row justify-center items-center my-4 text-head">
      {pages.map((page) => {
        const pageStyle = 'mx-3 cursor-pointer transition-all'
        const selectedStyle = 'text-primary transition-all'
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
