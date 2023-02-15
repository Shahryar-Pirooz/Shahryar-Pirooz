export default function Skills() {
  window.addEventListener('scroll', (e) => console.log(e))
  const skills = [
    {
      head: 'MERN',
      url: 'https://www.mongodb.com/mern-stack',
      body: 'I build a website using MongoDB, ExpressJS, React and NodeJS. I’m currently trying to become a full-stack developer.',
    },
    {
      head: 'Linux',
      url: 'https://www.linux.com/what-is-linux/',
      body: 'I am familiar with many Linux distributions (Ubuntu, Fedora, Manjaro, ... ) and I have worked with them as my operating system. I know how to configure and how to troubleshooting. Also, I wrote some scripts for my OS.',
    },
    {
      head: 'Android',
      url: 'https://www.toptal.com/android/job-description',
      body: 'I use Java , Dart(Flutter) to build an Android application. Since Android development was my first choice, I am more experienced in it.',
    },
  ]
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-items-center gap-5 pt-10 md:grid md:grid-cols-3 md:px-5 md:pt-0">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className="mx-3 flex min-w-fit flex-col justify-center rounded-2xl bg-background-shade p-5 transition-all duration-1000 hover:shadow-md hover:shadow-primary md:h-1/2 md:w-full md:hover:scale-105"
          >
            <h3 className="txt-head2 basis-1/3 text-center">{skill.head}</h3>
            <p className="txt-body basis-2/3 text-center">{skill.body}</p>
            <a href={skill.url} className="text-center text-primary">
              What is that?
            </a>
          </div>
        )
      })}
    </div>
  )
}
