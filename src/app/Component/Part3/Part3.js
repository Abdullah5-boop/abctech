import React from 'react'
import Image from "next/image";
import photos3 from '../../../resource/photos4.avif'
import icon1 from '../../../resource/icons/cart/bolt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
export default function Part3() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="part-3-heading text-center">
                <h2 className='font-bold '>OUR PHILOSOPHY</h2>
                <h1 className='text-7xl mb-3 '>Human-centred innovation </h1>
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
             lg:grid-cols-3 gap-5 w-full lg:w-[68%] h-full  lg:h-[32vh] mt-7">
                <div className="cart-1 border rounded-lg">
                <div className="logo bg-fuchsia-500 ">
                   <Image
                   src={icon1}
                   ></Image>
                    </div>    
                </div>
                <div className="cart-2 border"> car1-2</div>
                <div className="cart-3 border"> cart-3</div>
            </div>
        </div>
    )
}
