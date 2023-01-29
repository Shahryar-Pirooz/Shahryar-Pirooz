import axios from 'axios'
import React from 'react'
export default function Projects(data) {
  // console.log(data)
  const w = window.innerWidth / 3 - 30
  return (
    <div className="px-3 w-screen h-screen grid grid-cols-3 gap-10 content-start justify-items-center place-items-center overflow-auto">
      {data.map((project) => {
        return (
          <a href={project.url}>
            <div
              key={project.id}
              className="py-2 px-5 min-w-full  rounded-lg text-center bg-background-shade"
            >
              <p className="text-xl text-head">{project.name}</p>
              <p className="text-base text-body">{project.description}</p>
              <div>
                <p className="text-sm text-primary">{project.language}</p>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
