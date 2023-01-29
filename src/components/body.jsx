import Hero from './pages/hero'
import Skills from './pages/skills'
import Projects from './pages/projects'
import AboutMe from './pages/aboutMe'
import GetInTouch from './pages/getInTouch'

export default function Body({ state }) {
  if (state === 'Home') return Hero()
  if (state === 'Skills') return Skills()
  if (state === 'Projects') return Projects()
  if (state === 'AboutMe') return AboutMe()
  if (state === 'GetInTouch') return GetInTouch()
}
