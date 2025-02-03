import React from 'react'
import photos3 from '../../../resource/1001718239468976.jpg'
import Image from 'next/image'
import Footer from '../Footer/Footer'
export default function Part5() {
    let val = '<'
    return (
        <div className='text-center pt-96 lg:pt-0'>
            <h1 className='font-bold mb-3'>TRUSTED BY THE BEST </h1>
            <div className=' w-full lg:w-[50vw]  digit-container grid grid-cols-1 lg:grid-cols-3 mx-auto'>
                <div className='flex flex-col'>
                    <div className='text-8xl text-blue-500 font-bold mb-4'>{val} 20</div>
                    <div className='text-xl'>Years of Experience</div>

                </div>
                <div className='flex flex-col'>
                    <div className='text-8xl text-blue-500 font-bold mb-4'>40+</div>
                    <div className='text-xl'>Financial Institutions

                    </div>

                </div>
                <div className='flex flex-col'>
                    <div className='text-8xl text-blue-500 font-bold mb-4'>{val}200m</div>
                    <div className='text-xl'>Customers Each</div>

                </div>


            </div>
            <section className='flex justify-center mt-5'>
                <Image
                    src={photos3}
                    width={1000}
                    alt='new img'
                ></Image>
            </section>
            <section className='w-[99vw] flex justify-center items-center pr-36 h-[50vh] part-5-cart '>
                <div className="mt-5part-5-cart w-full lg:w-1/3 text-start  my-auto  ">
                    <h1 className='text-4xl font-bold'>Legacy no longer</h1>
                    <h1 className='text-xl my-5'>Talk to us to find out how we can transform your organisation for the future
                    </h1>
                    <button className="bg-transparent bg-orange-500  font-semibold  py-2 px-12 border border-black  rounded">
                        contact us
                    </button>
                </div>
            </section>
            <div className='w-[99vw] m-0 p-0 dark:bg-gray-900'>


            <Footer></Footer>


            </div>

        </div>
    )
}
