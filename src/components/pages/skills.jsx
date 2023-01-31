export default function Skills() {
  window.addEventListener('scroll', (e) => console.log(e))
  const skills = [
    {
      head: 'MERN',
      body: 'I build a website using MongoDB, ExpressJS, React and NodeJS. I’m currently trying to become a full-stack developer.',
    },
    {
      head: 'Linux',
      body: 'I am familiar with many Linux distributions (Ubuntu, Fedora, Manjaro, ... ) and I have worked with them as my operating system. I know how to configure and how to troubleshooting. Also, I wrote some scripts for my OS.',
    },
    {
      head: 'Android',
      body: 'I use Java , Dart(Flutter) to build an Android application. Since Android development was my first choice, I am more experienced in it.',
    },
  ]
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-5 items-center justify-items-center w-screen h-screen pt-10 md:pt-0 md:px-5">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center min-w-fit md:w-full md:h-1/2 p-5 mx-3 rounded-2xl transition-all duration-1000 bg-background-shade md:hover:scale-105 hover:shadow-md hover:shadow-primary"
          >
            <h3 className="font-bold basis-1/3 text-3xl text-center text-head">
              {skill.head}
            </h3>
            <p className="basis-2/3 text-center text-body">{skill.body}</p>
          </div>
        )
      })}
    </div>
  )
}
