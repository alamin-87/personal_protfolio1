import React from 'react'
import mephoto from '../assets/myphoto.jpg'
import mycv from '../assets/cv.pdf'


const About = () => {
  return (
   <>
     <aside className=' About absolute about_page w-screen h-screen bg-[#fff] mt-[715px]'>
     <div className="container">
       <div className="about_row">
        <div className="about_col1">
            <div className="about_col1_span w-[6px] h-[75px] bg-green-600 absolute left-[512px] top-[44px]"></div>
            <div className="about_col1_text absolute left-[522px] top-[40px] ml-[12px]">
                <h1 className=' font-sans font-bold text-black text-5xl'>About Me</h1>
                <p className=' font-sans font-normal text-black text-lg mt-[6px]'>Main Informatin About Me</p>
            </div>
            <div className="about_col1_img w-[272px] h-[200px] absolute left-[512px] top-[200px]">
            <img src={mephoto} alt="mephoto" />
            </div>
        </div>
        <div className="about_col2">
            <div className="about_col2_heading flex absolute left-[880px] top-[192px]">
                <div><h2 className=' font-sans font-normal text-black text-2xl'>I'm MD.AL-AMIN also</h2></div>
                <div>
                <ul className=' about_col2_heading_span flex flex-col gap-[6px] ml-[4px]'>
                         <li className=' text-green-700 text-2xl font-sans font-semibold'><span>Web Developer</span></li>
                         <li className=' text-green-700 text-2xl font-sans font-semibold'><span>Freelancer</span></li>
                     </ul>
                </div>
            </div>
            <div className="about_col2_bodytext absolute w-[562px] left-[880px] top-[234px]">
                <p className=' text-black text-xl font-sans font-light'>Hi! My name is <span className=' text-green-700 text-2xl font-sans font-semibold'>MD.AL-AMIN</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
            </div>
            <div className="about_col2_button flex gap-[20px] absolute left-[880px] top-[534px]">
                <div className="button1">
                    <button className='about_ button bg-green-700 py-[15px] px-[40px] text-xl text-white font-sans font-medium rounded-lg hover:bg-red-700 transition-[.8s] active:scale-[1.1]'> <a href= {mycv} download={mycv}>Download CV</a></button>
                </div>
                <div className="button2">
                    <button className='about_ button bg-green-700 py-[15px] px-[40px] text-xl text-white font-sans font-medium rounded-lg hover:bg-red-700 transition-[.8s] active:scale-[1.1]'>Send Message</button>
                </div>
            </div>
        </div>
        <div className="about_col3 flex absolute bg-[#BDE8CA] pl-[477px] pr-[120px] py-[24px] top-[728px]">
            <div className="about_col3_text flex flex-col">
                <div className="heading font-sans font-semibold text-black text-xl">
                    <h2>Some About my Abilities</h2>
                </div>
                <div className="bodytext w-[492px] font-sans font-light text-black text-xl mt-[12px]">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply.</p>
                </div>
            </div>
            <div className="about_col3_ratio w-[400px] flex flex-col justify-between ml-[22px]">
                <div className="ration1">
                    <div className="ration1_text flex justify-between">
                        <h2 className=' font-sans font-medium text-black text-sm'>Wordpress <span className='font-sans font-light text-black text-sm'>- 5 years of experience</span></h2>
                        <p className=' font-sans font-medium text-black text-sm'>95%</p>
                    </div>
                    <div className="ration1_range">
                        <input className='w-full' type="range" value={95} />
                    </div>
                </div>
                <div className="ration1">
                    <div className="ration1_text flex justify-between">
                        <h2 className=' font-sans font-medium text-black text-sm'>Css <span className='font-sans font-light text-black text-sm'>- 3 years of experience</span></h2>
                        <p className=' font-sans font-medium text-black text-sm'>85%</p>
                    </div>
                    <div className="ration1_range">
                        <input className='w-full' type="range" value={85} />
                    </div>
                </div>
                <div className="ration1">
                    <div className="ration1_text flex justify-between">
                        <h2 className=' font-sans font-medium text-black text-sm'>HTML <span className='font-sans font-light text-black text-sm'>- 4 years of experience</span></h2>
                        <p className=' font-sans font-medium text-black text-sm'>75%</p>
                    </div>
                    <div className="ration1_range">
                        <input className='w-full' type="range" value={75} />
                    </div>
                </div>
                <div className="ration1">
                    <div className="ration1_text flex justify-between">
                        <h2 className=' font-sans font-medium text-black text-sm'>Reactjs <span className='font-sans font-light text-black text-sm'>- 5 years of experience</span></h2>
                        <p className=' font-sans font-medium text-black text-sm'>90%</p>
                    </div>
                    <div className="ration1_range">
                        <input className='w-full' type="range" value={90} />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
     </aside>
   
   </>
  )
}

export default About