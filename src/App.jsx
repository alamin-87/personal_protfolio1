import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Services from './pages/Services'
import Protfolio from './pages/Protfolio'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)
  // const router = createBrowserRouter( createRoutesFromElements (
  //   <Route>
  //     <Route path='/' element={<Home />}></Route>
  //     <Route path='/about' element={<About />}></Route>
  //   </Route>

  // ))
  

  return (
    <>
   {/* <div className=' relative'>
   <div className=' flex z-10 fixed'>
     <Navbar/>
     </div>
      <div className=' absolute flex flex-col top-0 right-0 -z-10'>
      <Home />
      </div>
   </div> */}
   <Home/>
   <About/>
   <Services/>
   <Protfolio/>
   <News/>
   <Contact/>
   {/* <div className=' absolute mt-0 z-0'>
   <About/>
   <Services/>
   <Protfolio/>
   </div> */}
   {/* <RouterProvider router={router}></RouterProvider> */}
     
    </>
  )
}

export default App
