import React from 'react'
import myhomepic from '../assets/homepic.jpg'
import myme from '../assets/me.svg'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
   <div className=' Home flex relative'>
  <div className=' z-10 fixed '>
     <Navbar />
  </div>
   <div>
   <section className=' home_main absolute w-screen h-screen'>
     <div className="container">
         <img src= {myhomepic} alt="homepic" />
         <div className="home_bg">
         <div className='home_col1 absolute flex justify-center items-center'>
            <div className="home_img w-[160px] h-[160px] absolute flex top-[-853px] left-[827px] z-10">
                <img src= {myme} alt="me" />
            </div>
            <div className=" home_col2 text z-10">
                <div className='home_col2_row1'>
                <h1 className=' w-[364px] text-white text-6xl font-sans font-semibold  absolute flex top-[-682px] left-[727px]'>MD.AL-AMIN</h1>
                </div>
                <div className='home_col2_row2 absolute flex top-[-616px] left-[721px]'>
                 <div className='w-[62px]'><p className='head_p text-white text-2xl font-sans font-semibold'>I'm a</p></div>
                 <div className='w-[323px]'>
                     <ul className='flex gap-[12px]'>
                         <li className='text-[#fff] text-2xl font-sans font-semibold'><span>Web Developer</span></li>
                         <li className='text-[#fff] text-2xl font-sans font-semibold'><span>& Freelancer</span></li>
                     </ul>
                 </div>
                </div>
                {/* <div className="home_col2_row2_span absolute flex top-[-616px] left-[792px]">
                    <ul>
                        <li className=' text-[#F9E400] text-2xl font-sans font-semibold'><span className='spann'>Web Developer</span></li>
                        <li className=' text-[#F9E400] text-2xl font-sans font-semibold'><span className='spann'>Freelancer</span></li>
                    </ul>
                </div> */}
                
            </div>

        </div>
         </div>
     </div>
     </section>
   </div>
   </div>


    </>
  )
}

export default Home