import React from 'react'
import newsimg from '../assets/newsimg1.jpg'

const News = () => {
  return (
   <>
   <section className=' section_page w-screen h-[916px] bg-[#E7FBE6] absolute mt-[4286px] '>
      <div className="container">
        <div className="news_row">
            <div className="news_row1">
                   <div className="services_col1_span w-[6px] h-[75px] bg-green-600 absolute left-[512px] top-[104px]"></div>
                    <div className="services_col1_text absolute left-[522px] top-[100px] ml-[12px]">
                     <h1 className=' font-sans font-bold text-black text-5xl'>Latest News</h1>
                     <p className=' font-sans font-normal text-black text-lg mt-[6px]'>Check out our latest News</p>
                  </div>
            </div>
            <div className="news_row2">
                <div className="news_row2_cards flex gap-[59px]  absolute left-[512px] top-[265px]">
                    <div className="news_row2_card1">
                        <div className="news_row2_card1_img">
                            <img className='w-[263px] h-[124px]' src={newsimg} alt="newsimg" />
                        </div>
                        <div className="news_row2_card1_text w-[263px] bg-[#fff] px-[20px] absolute top-[125px]">
                            <p className=' my-[20px] font-sans font-medium text-black text-xm'> 20 September 2023-<a href="#"> <span className=' font-sans font-medium text-black text-xm hover:text-green-600 transition-[.4s]'>AREA</span></a></p>
                            <h2 className=' font-sans font-bold text-black text-2xl'>How to Create Great Logo for Your Business</h2>
                            <p className=' my-[20px] font-sans font-normal text-black text-xm'>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have a couple ...</p>
                            <button className='py-[12px] px-[38px] bg-red-600 rounded-lg mb-[40px] text-black text-xl font-sans font-medium transition-[.4s] hover:bg-green-700 active:scale-[1.1]'>Read More</button>

                        </div>
                    </div>

                    <div className="news_row2_card1">
                        <div className="news_row2_card1_img">
                            <img className='w-[263px] h-[124px]' src={newsimg} alt="newsimg" />
                        </div>
                        <div className="news_row2_card1_text w-[263px] bg-[#fff] px-[20px] absolute top-[125px]">
                            <p className=' my-[20px] font-sans font-medium text-black text-xm'> 20 September 2023-<a href="#"> <span className=' font-sans font-medium text-black text-xm hover:text-green-600 transition-[.4s]'>AREA</span></a></p>
                            <h2 className=' font-sans font-bold text-black text-2xl'>How to Create Great Logo for Your Business</h2>
                            <p className=' my-[20px] font-sans font-normal text-black text-xm'>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have a couple ...</p>
                            <button className='py-[12px] px-[38px] bg-red-600 rounded-lg mb-[40px] text-black text-xl font-sans font-medium transition-[.4s] hover:bg-green-700 active:scale-[1.1]'>Read More</button>

                        </div>
                    </div>

                    <div className="news_row2_card1">
                        <div className="news_row2_card1_img">
                            <img className='w-[263px] h-[124px]' src={newsimg} alt="newsimg" />
                        </div>
                        <div className="news_row2_card1_text w-[263px] bg-[#fff] px-[20px] absolute top-[125px]">
                            <p className=' my-[20px] font-sans font-medium text-black text-xm'> 20 September 2023-<a href="#"> <span className=' font-sans font-medium text-black text-xm hover:text-green-600 transition-[.4s]'>AREA</span></a></p>
                            <h2 className=' font-sans font-bold text-black text-2xl'>How to Create Great Logo for Your Business</h2>
                            <p className=' my-[20px] font-sans font-normal text-black text-xm'>If you are reading this, you probably plan to start a small business or a side hustle very soon. And you probably have a couple ...</p>
                            <button className='py-[12px] px-[38px] bg-red-600 rounded-lg mb-[40px] text-black text-xl font-sans font-medium transition-[.4s] hover:bg-green-700 active:scale-[1.1]'>Read More</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
   </section>
   </>
  )
}

export default News