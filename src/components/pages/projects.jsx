import React from 'react'

function Card({ header, description, language, url }) {
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
    <a href={url} target="_blank" rel="noreferrer" className="m-4">
      <div className="project-card">
        <h3 className="txt-head2 my-5 text-center">{header}</h3>
        <p className="txt-body my-2 text-center">{description}</p>
        <p
          className="text-md my-2 text-center"
          style={{ color: colors[language.toLowerCase()] }}
        >
          {language}
        </p>
        <div className="h-1 w-full" style={progressStyle}></div>
      </div>
    </a>
  )
}
export default function Projects(data) {
  return (
    <div className="project-page">
      {data.map((project) => {
        return (
          <Card
            key={project.id}
            header={project.name}
            description={project.description}
            language={project.language ?? 'other'}
            url={project.html_url}
          />
        )
      })}
    </div>
  )
}
