import React from 'react';
import photos3 from '../../../resource/photos3.jpg'
// import photos2 from '../../../resource/photos2.jpg'
import Image from 'next/image';

const Part2 = () => {
    return (
        <div>
            <div className=" cart-content w-full lg:w-2/3 lg:h-[80vh]  mx-auto grid grid-cols-1 lg:grid-cols-6 m-36">


                <div className=" part-2-content-1   lg:col-span-3 flex flex-col justify-end px-3 lg:px-5">
                    <h2 className='text-blue-400 mb-5 font-bold'>POWERING THE FUTURE OF FINANCE </h2>
                    <h1 className='text-3xl lg:text-6xl font-bold'>Uncovering new <br />ways to delight customers</h1>

                </div>

                <div className=" part-2-content-2   lg:row-start-2 lg:col-span-3 order-3 px-5">
                    <p className='font-bold my-7'>AnyTech is revolutionising financial technology by introducing <br /> innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                    <p>
                        Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                    </p>
                </div>




                <div className="  bg-red-300  part-2-img-container  w-3/3 h-3/3 col-span-3 row-span-2 relative ">
                <div className="part-2-float-1"></div>
                        <Image
                        className=' shadow-2xl object-contain m-auto pt-10 '
                            src={photos3}
                            width={450}
                            height={0}
                            // fill={false}
                            alt='photos3'
                        >

                        </Image>


          
                </div>

            </div>
        </div>
    );
};

export default Part2;