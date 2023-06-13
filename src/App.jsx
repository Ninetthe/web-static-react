import { useState } from 'react'


import './App.css'
import Buttons from './components/atoms/Buttons';
import Navbar from './components/atoms/Navbar';
import Router from './configurations/Router';



function App() {

  return (
    <>
    <Router>

    </Router>
    <Buttons buttonDownload={"Hola"}></Buttons>
    <Navbar></Navbar>
    

    </>
  )
}

export default App
