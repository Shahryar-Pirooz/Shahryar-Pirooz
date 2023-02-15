import { useEffect, useState } from 'react'
import axios from 'axios'
import { Hero, Skills, Projects, AboutMe, GetInTouch } from './pages'

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
