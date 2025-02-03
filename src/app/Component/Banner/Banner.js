import React from 'react'
import './Banner.css'
import Image from 'next/image'
import photo_1 from '../../../resource/backgrounds/avater.png'
export default function Banner() {
  return (
    <div>
      <div className=" h-[100vh] w-[99vw]  bg-inner-container  flex lg:flex-row flex-col relative  ">
        <div className='background-layer lg:absolute z-20 '></div>
        <div className=' box-1 w-full h-1/2 lg:h-[80%] lg:w-1/2 overflow-hidde flex justify-between items-center relative '>



          <div className='lg:absolute z-30 left-1/3  banner-contaier flex flex-col justify-center items-start 
          lg:h-[40%] lg:w-[80%] gap-5 ml-5 mx-2 lg:m-0'>
            <div className=' text-3xl lg:text-8xl font-bold'> Embrace the <br /> future of finace </div>
            <div className=' text-xl'> Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation </div>
          </div>

        </div>


        <div className='box-2  lg:w-1/2 h-1/2 lg:h-full '>

        </div>


      </div>
      {/* <div className="mt-3 h-[100vh] w-[100vw] bg-inner-containerdd  grid grid-cols-1 lg:grid-cols-2  ">
        <div className='w-100 h-1/2  box-1 '>hello 1</div>
        <div className='w-100 h-100 box-2 '>
      

      

        </div>
        

      </div> */}

    </div>
  )
}
