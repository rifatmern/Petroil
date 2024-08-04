import React from 'react'

const Banner = () => {
    return (
        <section className='bg-ban lg:py-[257px] py-[170px] relative z-[1] bg-no-repeat bg-cover bg-center after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:bg-[#0000005e] after:z-[-1]'>
            <div className="max-w-container mx-auto">
                <h2 className='text-white lg:text-start text-center font-pops font-semibold lg:text-[64px] text-[35px] lg:w-[842px] pb-[32px]'>We exist since 1975 on the oil and gas industry.</h2>
                <div className="lg:text-start text-center">
                    <a className='font-pops text-white font-semibold lg:text-[16px] text-[10px] py-[14px] px-[40px] bg-[#F40404] ' href="#">LEARN MORE</a>
                </div>
            </div>
        </section>
    )
}

export default Banner