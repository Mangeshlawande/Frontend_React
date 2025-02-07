import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold bg-green-500 rounded-md p-3">
      Vite with Tailwind 
    </h1>
    <Card username='mangesh'post='Software Engineer'/>
    <Card username='kartik'/>
    <Card />
    
    </>
  )
}

export default App
