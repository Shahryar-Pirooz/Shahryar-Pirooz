import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Home, Skills, Projects, About, Contact } from './pages'

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
        <Route path="/home" element={Home()} />
        <Route path="/skills" element={Skills()} />
        <Route path="/projects" element={Projects(dataState)} />
        <Route path="/about" element={About()} />
        <Route path="/contact" element={Contact()} />
      </Routes>
    </BrowserRouter>
  )
}
