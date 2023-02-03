import React from 'react'

function Card({ header, description, language }) {
  const colors = {
    html: '#E34C26',
    css: '#3F51B5',
    javascript: '#F0DB4F',
    dart: '#0769AD',
    java: '#F89820',
    kotlin: '#D710B5',
    other: '#2CB67D',
  }

  const progressStyle = {
    background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${
      colors[language.toLowerCase()]
    } 50%, rgba(0,0,0,0) 100%)`,
  }
  // console.log(ProgLang)
  return (
    <div className="my-5 flex h-full w-full flex-col flex-nowrap justify-end rounded-lg bg-background-shade p-5 transition-all duration-1000 hover:scale-105 hover:shadow-md hover:shadow-body">
      <h3 className="my-5 text-center text-3xl text-head">{header}</h3>
      <p className="my-2 text-center text-lg text-body">{description}</p>
      <p
        className="text-md my-2 text-center"
        style={{ color: colors[language.toLowerCase()] }}
      >
        {language}
      </p>
      <div className="h-1 w-full" style={progressStyle}></div>
    </div>
  )
}
export default function Projects(data) {
  return (
    <div className="grid h-screen w-screen grid-cols-1 gap-4 overflow-y-scroll px-2 md:grid-cols-3">
      {data.map((project, index) => {
        return (
          <Card
            key={project.id}
            header={project.name}
            description={project.description}
            language={project.language ?? 'other'}
          />
        )
      })}
    </div>
  )
}
