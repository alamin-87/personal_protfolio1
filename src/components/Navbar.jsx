import React from 'react'
import mylogo from '../assets/logo.svg'
import myfacebook from '../assets/facebook.svg'
import myinstagram from '../assets/instagram.svg'
import mytwitter from '../assets/twitter.svg'
import mywhattsapp from '../assets/whattsapp.svg'
import { Link ,animateScrool as scrool } from 'react-scroll'

const Navbar = () => {
  return (
    <>
        <nav className='w-[400px] h-screen bg-[#1E2A5E] relative '>
            <div className="container">
                <div className="nav_col flex flex-col items-center justify-center">
                    <div className="Nav-logo w-[120px] h-[120px] mt-[62px]">
                        <img src={mylogo} alt="logo" />
                        <span className=' inline-block w-[390px] h-[1px] bg-[#fff] absolute left-0 top-[210px]'></span>
                    </div>
                    <div className="content top-[279px] left-[85px] absolute">
                        <ul className=' flex flex-col gap-[30px]'>
                           <li><Link  className='uppercase w-[60px] inline-block font-sans font-medium text-white text-lg hover:font-bold hover:text-[#00712D]' to="Home" smooth={true} duration={400} spy={true} activeClass=' active'>Home</Link></li>
                           <li><Link className='uppercase w-[60px] inline-block font-sans font-medium text-white text-lg hover:font-bold hover:text-[#00712D]' to="About" smooth={true} duration={400} spy={true} activeClass=' active'>About</Link></li>
                           <li><Link className='uppercase w-[80px] inline-block font-sans font-medium text-white text-lg hover:font-bold hover:text-[#00712D]' to="services" smooth={true} duration={400} spy={true} activeClass=' active'>Services</Link></li>
                           <li><Link className='uppercase w-[98px] inline-block font-sans font-medium text-white text-lg hover:font-bold hover:text-[#00712D]' to="protfolio"  smooth={true} duration={400} spy={true} activeClass=' active'>Protfolio</Link></li>
                           <li><Link className='uppercase w-[60px] inline-block font-sans font-medium text-white text-lg hover:font-bold hover:text-[#00712D]' to="section_page"  smooth={true} duration={400} spy={true} activeClass=' active'>News</Link></li>
                           <li><Link className='uppercase w-[82px] inline-block font-sans font-medium text-white text-lg hover:font-bold hover:text-[#00712D]' to="contact_page" smooth={true} duration={400} spy={true} activeClass=' active'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="link flex gap-[20px] absolute left-[84px] top-[650px]">
                        <a className='w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] transition-[.3s]' href="https://www.facebook.com/alaminhossain.momenul?mibextid=ZbWKwL" target='-blank' rel='MyFacebook'><img src={myfacebook} alt="facebook" /></a>
                        <a className='w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] transition-[.3s]' href="https://www.instagram.com/alaminhossainmomenul?igsh=MWVjaXRnZ3E0MHhmZA==" target='-blank' rel='myinsta'> <img src={myinstagram} alt="instagram" /></a>
                        <a className='w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] transition-[.3s]' href="https://x.com/MdAlaminHo21126?t=xb-Ayy37DEjxU-fxUvvnYA&s=09" target='-blank' rel='mytwitter'><img src={mytwitter} alt="twitter" /></a>
                        <a className='w-[40px] h-[40px] hover:w-[50px] hover:h-[50px] transition-[.3s]' href="https://wa.me/qr/7EF2AGVPJUDCA1" target='-blank' rel='mywhattsapp'><img src={mywhattsapp} alt="whattsapp" /></a>
                    </div>
                </div>
            </div>
    </nav>


    </>
  )
}

export default Navbar