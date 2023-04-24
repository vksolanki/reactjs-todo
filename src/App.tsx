import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Items from './components/Items'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("app")
  return (
    <Items></Items>
  )
}

export default App
