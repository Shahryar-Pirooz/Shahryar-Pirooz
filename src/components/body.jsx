import { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from './pages/hero'
import Skills from './pages/skills'
import Projects from './pages/projects'
import AboutMe from './pages/aboutMe'
import GetInTouch from './pages/getInTouch'

export default function Body({ state }) {
  const [dataState, setDataState] = useState([])
  useEffect(() => {
    axios
      .get('https://api.github.com/users/Shahryar-Pirooz/repos')
      .then((res) => setDataState(res.data))
  }, [])
  if (state === 'Home') return Hero()
  if (state === 'Skills') return Skills()
  if (state === 'Projects') return Projects(dataState)
  if (state === 'AboutMe') return AboutMe()
  if (state === 'GetInTouch') return GetInTouch()
}
