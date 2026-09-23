import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
function App() {
 

  return (
    <>
    <Header heading_text=" react" name="sreedevi" age={25}/>
    <Logo logo="favicon.svg"/>
    </>
  )
}

export default App
