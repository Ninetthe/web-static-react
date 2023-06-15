import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from "./pages/Features";
import Description from './pages/Description';
import Extra from "./pages/Extra";
import Screens from "./pages/Screens"
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
        <Navbar/>
            <Routes>
                
                <Route path='/' element={<Home/>} />
                <Route path='/description' element={<Description/>} />
                <Route path='/features' element={<Features/>} />
                <Route path='/screens' element={<Screens/>} />
                <Route path='/extra' element={<Extra/>} />
            </Routes>




    </>
  )
}

export default App
