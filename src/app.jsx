import React, { useState } from 'react'
import Hero from './components/hero'
import NavBar from './components/navbar'

export default function App() {
  const [pageState, setPageState] = useState('Home')
  // handlers
  const handlePage = (target) => setPageState(target)
  return (
    <div>
      <NavBar state={pageState} handler={handlePage} />
      <Hero />
    </div>
  )
}
