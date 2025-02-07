import { useState } from 'react'
import './App.css'
import Youtube from './Youtube'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Basic react vite app</h1>
     <h1> create vite@latest viteapp</h1>
       <Youtube/>
    </>
  )
}

export default App
