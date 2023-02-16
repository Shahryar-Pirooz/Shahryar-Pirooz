import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Home, Skills, Projects, AboutMe, GetInTouch } from './pages'

export default function Body() {
  const [dataState, setDataState] = useState([])
  useEffect(() => {
    axios
      .get('https://api.github.com/users/Shahryar-Pirooz/repos')
      .then((res) => setDataState(res.data))
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={Home()} />
        <Route path="/Skills" element={Skills()} />
        <Route path="/Projects" element={Projects(dataState)} />
        <Route path="/AboutMe" element={AboutMe()} />
        <Route path="/GetInTouch" element={GetInTouch()} />
      </Routes>
    </BrowserRouter>
  )
}
