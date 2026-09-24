import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header';
import Logo from './components/Logo';
import ReactLogo from './assets/react.svg';
import Button from './components/Button';

function App() {
const showAlert = () =>{
  alert("button clicked");
};
const showSubmit = () =>{
  console.log("submit button clicked");
};

  return (
    <>
    <Header heading_text=" react" name="sreedevi" age={25}/>
    <Logo logo="favicon.svg"/>
    <Logo logo={ReactLogo}/>
    <Button className="btn" text="click me" handleClick={showAlert}/>
    <Button className="btn" text="Submit" handleClick={showSubmit}/>

    </>
  )
}

export default App
