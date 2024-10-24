import React, { useState } from 'react'
import myproduct from '../assets/product.jpg'
import myproduct1 from '../assets/product1.jpg'
import myproduct2 from '../assets/product2.jpg'
import myproduct3 from '../assets/product3.jpg'
import myproduct4 from '../assets/product4.jpg'
import myproduct5 from '../assets/product5.jpg'
import mymessage from '../assets/message.jpg'

const Protfolio = () => {
    const [show1 , setshow1] = useState(true)
    const [show2 , setshow2] = useState(false)
    const [show3 , setshow3] = useState(false)
    const [show4 , setshow4] = useState(false)

     const  show_all=()=>{
        if(show1==true){
            setshow1(true)  
        }
        else{
            setshow1(true)
            setshow2(false)
            setshow3(false)
            setshow4(false)
        }

     }

     const  design=()=>{
        if(show2==true){
            setshow2(true) 
        }
        else{
            setshow1(false) 
            setshow3(false)
            setshow4(false)
            setshow2(true)
        }

     }

     const  development=()=>{
        if(show3==true){
            setshow3(true) 
        }
        else{
            setshow1(false) 
            setshow2(false)
            setshow4(false)
            setshow3(true)
        }

     }

     const  photography=()=>{
        if(show4==true){
            setshow4(true) 
        }
        else{
            setshow1(false) 
            setshow2(false)
            setshow3(false)
            setshow4(true)
        }

     }
 let result=document.querySelectorAll('.result')

 let arr = Array.from(result)

 arr.map((item)=>{

    let i=0
    let count = ()=>{
    
        i++
        if(i==item.dataset.ok){
            clearInterval(thamo)
        }
         item.innerHTML=i
         console.log(i)
    }
    
    let thamo = setInterval(()=>{
    
         count()
    
    
    },1000/item.dataset.ok)

})




  return (
   <>
    <section className='protfolio w-screen h-[1000px] bg-[#fff] absolute mt-[2752px]'>
        <div className="container">
            <div className="protfolio_row">
                <div className="protfolio_row1">
                <div className="protfolio_col1">
                    <div className="protfolio_col1_span w-[6px] h-[75px] bg-green-600 absolute left-[512px] top-[100px]"></div>
                    <div className="protfolio_col1_text absolute left-[522px] top-[96px] ml-[12px]">
                     <h1 className=' font-sans font-bold text-black text-5xl'>Creative Works</h1>
                     <p className=' font-sans font-normal text-black text-lg mt-[6px] ml-[4px]'>Check out our latest creative works</p>
                  </div>
              </div>
                </div>
                <div className="protfolio_row2 absolute left-[510px] top-[270px]">
                    <div className="protfolio_row2_showes">
                        <div className="protfolio_row2_button flex gap-[32px]">
                        <button onClick={show_all} className=' w-[100px] mb-[24px] font-sans font-medium text-black text-xl hover:text-green-600 hover:uppercase transition-[.3s]'>Show All</button>
                        <button onClick={design} className=' w-[72px] mb-[24px] font-sans font-medium text-black text-xl hover:text-green-600 hover:uppercase transition-[.3s]'>Design</button>
                        <button onClick={development} className=' w-[138px] mb-[24px] font-sans font-medium text-black text-xl hover:text-green-600 hover:uppercase transition-[.3s]'>Development</button>
                        <button onClick={photography} className=' w-[128px] mb-[24px] font-sans font-medium text-black text-xl hover:text-green-600 hover:uppercase transition-[.3s]'>Photography</button>
                        </div>
                        <div className="protfolio_row2_showe1">
                            {
                                show1 && <div className="show_all_cards flex gap-[32px] mb-[32px]">
                                < img className='w-[265px] h-[285px]' src={myproduct} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct1} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct2} alt="product" />
                                </div>
                            }
                             {
                                show1 && <div className="show_all_cards flex gap-[32px]">
                                < img className='w-[265px] h-[285px]' src={myproduct3} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct4} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct5} alt="product" />
                                </div>
                            }
                        </div>
                        <div className="protfolio_row2_showe2">
                        {
                                show2 && <div className="show_all_cards flex gap-[32px] mb-[32px]">
                                < img className='w-[265px] h-[285px]' src={myproduct2} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct5} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct4} alt="product" />
                                </div>
                            }
                        </div>
                        <div className="protfolio_row2_showe3">
                        {
                                show3 && <div className="show_all_cards flex gap-[32px] mb-[32px]">
                                < img className='w-[265px] h-[285px]' src={myproduct} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct3} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct2} alt="product" />
                                </div>
                            }
                        </div>
                        <div className="protfolio_row2_showe4">
                        {
                                show4 && <div className="show_all_cards flex gap-[32px] mb-[32px]">
                                < img className='w-[265px] h-[285px]' src={myproduct5} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct3} alt="product" />
                                  <img className='w-[265px] h-[285px]' src={myproduct1} alt="product" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="protfolio_row3 absolute w-[1119px] h-[250px] left-[400px] bg-[#508C9B] top-[1030px]">
                    <div className="protfolio_row3_job_comment flex">
                        <div className="protfolio_row3_job_comment1 w-[652px] mt-[52px] flex flex-col justify-center items-center">
                           <img className=' w-[40px] h-[40px]' src={mymessage} alt="message" />
                           <h2 className='text-black text-xl font-sans font-medium flex text-center mt-[32px]'>"Awesome to work with AREA,Good Organized,easy to communicate with,responsive with next iteration."</h2>
                           <p className='text-black text-xl font-sans font-normal'>Joy,Photographer</p>
                        </div>
                        <div className="protfolio_row3_job_comment1 w-[652px] mt-[52px] flex flex-col justify-center items-center">
                           <img className=' w-[40px] h-[40px]' src={mymessage} alt="message" />
                           <h2 className='text-black text-xl font-sans font-medium flex text-center mt-[32px]'>"Awesome to work with AREA,Good Organized,easy to communicate with,responsive with next iteration."</h2>
                           <p className='text-black text-xl font-sans font-normal'>Joy,Photographer</p>
                        </div>
                        <div className="protfolio_row3_job_comment1 w-[652px] mt-[52px] flex flex-col justify-center items-center">
                           <img className=' w-[40px] h-[40px]' src={mymessage} alt="message" />
                           <h2 className='text-black text-xl font-sans font-medium flex text-center mt-[32px]'>"Awesome to work with AREA,Good Organized,easy to communicate with,responsive with next iteration."</h2>
                           <p className='text-black text-xl font-sans font-normal'>Joy,Photographer</p>
                        </div>

                        <div className="protfolio_row3_job_comment1 w-[652px] mt-[52px] flex flex-col justify-center items-center">
                           <img className=' w-[40px] h-[40px]' src={mymessage} alt="message" />
                           <h2 className='text-black text-xl font-sans font-medium flex text-center mt-[32px]'>"Awesome to work with AREA,Good Organized,easy to communicate with,responsive with next iteration."</h2>
                           <p className='text-black text-xl font-sans font-normal'>Joy,Photographer</p>
                        </div>
                        <div className="protfolio_row3_job_comment1 w-[652px] mt-[52px] flex flex-col justify-center items-center">
                           <img className=' w-[40px] h-[40px]' src={mymessage} alt="message" />
                           <h2 className='text-black text-xl font-sans font-medium flex text-center mt-[32px]'>"Awesome to work with AREA,Good Organized,easy to communicate with,responsive with next iteration."</h2>
                           <p className='text-black text-xl font-sans font-normal'>Joy,Photographer</p>
                        </div>
                        <div className="protfolio_row3_job_comment1 w-[652px] mt-[52px] flex flex-col justify-center items-center">
                           <img className=' w-[40px] h-[40px]' src={mymessage} alt="message" />
                           <h2 className='text-black text-xl font-sans font-medium flex text-center mt-[32px]'>"Awesome to work with AREA,Good Organized,easy to communicate with,responsive with next iteration."</h2>
                           <p className='text-black text-xl font-sans font-normal'>Joy,Photographer</p>
                        </div>
                    </div>
                </div>
                <div className="protfolio_row4 flex flex-col gap-[12px] absolute w-[1119px] h-[250px] left-[400px] bg-[#fff] top-[1280px] items-center justify-center">
                   <div className='flex gap-[122px]'>
                   <h1 className="result w-[100px] h-[40px] font-sans font-medium text-black text-4xl" data-ok="15"></h1>
                   <h1 className="result w-[100px] h-[40px] font-sans font-medium text-black text-4xl" data-ok="14"></h1>
                   <h1 className="result w-[100px] h-[40px] font-sans font-medium text-black text-4xl" data-ok="16"></h1>
                   <h1 className="result w-[100px] h-[40px] font-sans font-medium text-black text-4xl" data-ok="18"></h1>
                   </div>
                   <div className='flex gap-[100px]'>
                    <h1 className=' font-sans font-normal text-2xl text-black'>Project Complet</h1>
                    <h1 className=' font-sans font-normal text-2xl text-black'>Lines of Code</h1>
                    <h1 className=' font-sans font-normal text-2xl text-black'>Happy Client</h1>
                    <h1 className=' font-sans font-normal text-2xl text-black'>My Awwwward</h1>
                   </div>
                </div>
                <div className="protfolio_row4_span flex gap-[243px] absolute left-[710px] top-[1343px] items-center justify-center">
                    <span className='w-[1px] h-[150px] bg-black'></span>
                    <span className='w-[1px] h-[150px] bg-black'></span>
                    <span className='w-[1px] h-[150px] bg-black'></span>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Protfolio