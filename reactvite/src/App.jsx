import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
import Gallery from './component/Gallery'
import ReactHook from './component/ReactHook'
import Imagemanipulation from './component/Imagemanipulation'
import UseEffect from './component/UseEffect'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashbaord from './component/Dashbaord'
function App() {



  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/login' element={<Login />}></Route>
<Route path='/register' element={<Registration />}></Route>
<Route path='/dashboard' element={<Dashbaord />}></Route>

</Routes>

</BrowserRouter>

     
    </div>
  )
}

export default App
