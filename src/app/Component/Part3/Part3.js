import React from 'react'
import Image from "next/image";
import photos3 from '../../../resource/photos4.avif'
import icon1 from '../../../resource/icons/cart/bolt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import icon2 from '../../../resource/icons/cart/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import icon3 from '../../../resource/icons/cart/view_kanban_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
export default function Part3() {
    return (
        <div className='flex flex-col justify-center items-center mt-36'>
            <div className="part-3-heading text-center">
                <h2 className='font-bold '>OUR PHILOSOPHY</h2>
                <h1 className='text-3xl lg:text-7xl mb-3 '>Human-centred innovation </h1>
            </div>
            <div className="part-3-img pt-3">
                <Image
                    src={photos3}
                    width={1300}
                    height={400}
                    alt='photos4'
                ></Image>
            </div>
            <div className="part-3-cart grid grid-cols-1
             lg:grid-cols-3 gap-5 w-full lg:w-[68%] h-[100vh]  lg:h-[32vh] mt-7">
                <div className="cart-1 border rounded-lg flex flex-col justify-around px-7 py-5">
                    <div className="logo bg-gray-500 rounded-full h-10 w-10  flex justify-center items-center  ">
                        <Image className=''
                            src={icon1}
                            alt='photos4'
                        ></Image>

                    </div>
                    <h1 className='text-3xl'>Full-suit solution</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum. adipisicing elit. Mollitia nesciunt iure, veritatis et </p>

                </div>
                <div className="cart-1 border rounded-lg flex flex-col justify-around px-7 py-5">
                    <div className="logo bg-gray-500 rounded-full h-10 w-10  flex justify-center items-center  ">
                        <Image className=''
                            src={icon2}
                            alt='photos4'
                        ></Image>

                    </div>
                    <h1 className='text-3xl'>Full-suit solution</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum. adipisicing elit. Mollitia nesciunt iure, veritatis et </p>

                </div>
                <div className="cart-1 border rounded-lg flex flex-col justify-around px-7 py-5">
                    <div className="logo bg-gray-500 rounded-full h-10 w-10  flex justify-center items-center  ">
                        <Image className=''
                            src={icon3}
                            alt='photos4'
                        ></Image>

                    </div>
                    <h1 className='text-3xl'>Full-suit solution</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, illum. adipisicing elit. Mollitia nesciunt iure, veritatis et </p>

                </div>
                
           
            </div>
        </div>
    )
}
