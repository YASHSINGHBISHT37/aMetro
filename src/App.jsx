import React from 'react'
import Nav from './Pages/Nav'
import MainNav from './Pages/MainNav'
import Details from './Pages/Details'
import Info from './Pages/Info'
import Home from './Pages/Home'
import metroData from '../public/Data/metroData.json'
import Footer from './Pages/Footer'
import MetroAni from './Pages/metroAni.jsx'

const App = () => {
  const metroLines = []
  return (
    <div className='w-screen min-h-screen max-h-auto relative pt-14 bg-[#161616] pb-16'>

      {/* <div className='w-full h-full flex flex-col justify-center items-center fixed top-0 left-0'>
        <img src="imgs/Metro.png" alt="" />


        <div className='flex justify-center items-center opacity-60 mt-3'>
          <span className='opacity-'>Developed By <span className=''> Yash Singh Bisht</span></span>
        </div>
      </div> */}

      <div className=''>

        <Nav />
        {/* <Home /> */}
        <Details />
        <MainNav />

        {/* <Info/> */}


        <MetroAni />
        <Footer />
      </div>
    </div>
  )
}

export default App
