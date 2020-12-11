import React, { useState } from 'react'
import Trail from './Trail'
import Transition from './Transition'
export default function Home() {
    const [open, set] = useState(true)
    const [tagline, setTagline] = useState('Matric, Inter, B.S')
    return (
      <div className="margin">
        <Trail open={open} onClick={() => set((state) => !state)}>
        <span>Kulsoom</span>
        <span>Ansari</span>
        <span>Portfolio</span>
        <span>Site</span>
      </Trail>
      <h1 className="underline">My Skills</h1>
      <Transition />
      <h1 className="underline">My Qualification</h1>
    <h4>{tagline}</h4>
      </div>
      
      
    )
  }
