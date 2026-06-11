import { useState } from 'react'
import logoCombi from '../public/assets/logo/logo-combi.png'
import Header from "./components/Header.jsx"
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
