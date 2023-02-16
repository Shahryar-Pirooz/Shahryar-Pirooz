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
    <div className="skill-page">
      {skills.map((skill, index) => {
        return (
          <div key={index} className="skill-card">
            <div className="basis-1/4">
              <h3 className="txt-head2">{skill.head}</h3>
            </div>
            <div className="flex basis-2/4 place-items-center justify-center overflow-y-auto">
              <p className="txt-body m-auto">{skill.body}</p>
            </div>
            <div className="flex basis-1/4 items-end justify-center">
              <a href={skill.url} className="text-primary ">
                What is that?
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
