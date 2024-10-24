import React from 'react'

const Contact = () => {
  return (
    <>
    <section className=' contact_page w-screen h-[732px] bg-[#fff] absolute mt-[5203px] '>
        <div className="container">
            <div className="contact_row w-[984px] flex absolute left-[512px] top-[104px]">
                <div className="contact_row_col1">
                    <div className="contact_row_col1_head flex">
                        <div className="services_col1_span w-[6px] h-[75px] bg-green-600"></div>
                        <div className="services_col1_text ml-[14px] w-[260px]">
                            <h1 className=' font-sans font-bold text-black text-5xl'>Contact Me</h1>
                            <p className=' font-sans font-normal text-black text-lg mt-[6px]'>Get in touch with me</p>
                       </div>
                    </div>
                    <div className="contact_row_col1_others absolute flex flex-col gap-[18px] mt-[100px] w-[402px]">
                        <h2 className=' font-sans font-medium text-black text-2xl'>Get in Touch</h2>
                        <p className=' font-sans font-medium text-black text-xl mt-[30px]'>Address: <span className=' font-sans font-normal text-black text-xl'>Dhaka,Bangladesh</span></p>
                        <p className=' font-sans font-medium text-black text-xl'>Email: <a href="#"> <span className=' font-sans font-normal text-black text-xl'>alaminhossainmomenul87@gmail.com</span></a></p>
                        <p className=' font-sans font-medium text-black text-xl'>Phone: <span className=' font-sans font-normal text-black text-xl'>+8801301472327</span></p>
                        <p className=' font-sans font-medium text-black text-xl'>Website: <span className=' font-sans font-normal text-black text-xl'>loding.....</span></p>
                    </div>
                </div>
                <div className="contact_row_col2 w-[500px] mt-[186px] ml-[206px]">
                    <form className="contact_form flex flex-col gap-[28px]">
                        <input className=' border-none outline-none bg-transparent' type="text" placeholder='Name' />
                        <input className=' border-none outline-none bg-transparent' type="email" placeholder='Email' />
                        <input className=' border-none outline-none bg-transparent' type="text" placeholder='Subject' />
                        <input className=' border-none outline-none bg-transparent' type="text" placeholder='Message' />
                        <button className=' bg-red-700 w-[176px] h-[66px] rounded-lg font-sans font-medium text-black text-xl hover:bg-green-700 active:scale-[1.1] mt-[30px]'>Send Message</button>
                    </form>
                </div>
                <div className="contact_row_col2_span flex flex-col gap-[53px] absolute left-[485px]  mt-[207px]">
                    <span className='w-[400px] h-[1px] bg-black inline-block'></span>
                    <span className='w-[400px] h-[1px] bg-black inline-block'></span>
                    <span className='w-[400px] h-[1px] bg-black inline-block'></span>
                    <span className='w-[400px] h-[1px] bg-black inline-block'></span>
                </div>
                <div className='w-[1120px] h-[90px] bg-green-700 absolute left-[-113px] top-[545px]'></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact