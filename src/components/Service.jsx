import React from 'react'
import serviceone from '../assets/serviceone.png'

const Service = () => {
    return (
        <section>
            <div className="mx-auto">
                <div className="lg:flex">
                    <div className="lg:w-1/2 justify-end text-center lg:text-start lg:pt-[106px] lg:pb-[139px] lg:pl-[150px] pt-[20px] pb-[20px] px-2 lg:px-0">
                        <h2 className='font-bold lg:text-[64px] text-[40px]'>Our Services</h2>
                        <p className='lg:w-[435px] font-pops lg:pl-[10px]  pt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="lg:w-1/2 bg-serviceone lg:pt-[147px] pt-[100px] lg:pb-[139px] pb-[80px] lg:pl-[116px] pl-[80px] bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:z-[-1] after:contents-[''] after:h-full after:w-full after:bg-[#00000099]">
                        <h2 className='font-pops font-bold lg:text-[28px] text-[18px] text-white lg:mt-[7px] mt-[5px] lg:pb-5 pb-2 pr-[40px]'>Modern natural oil and gas refineries.</h2>
                        <a className='font-pops font-semibold lg:text-[16px] text-[10px] text-white lg:py-[14px] lg:px-[30px] py-[8px] px-[20px] bg-[red]' href="#">Learn More</a>
                    </div>
                </div>
                <div className="lg:flex lg:py-0 py-3">
                    <div className="lg:w-1/2 bg-servicetwo lg:pt-[147px] pt-[100px] lg:pb-[139px] pb-[80px] lg:pl-[116px] pl-[80px] bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:z-[-1] after:contents-[''] after:h-full after:w-full after:bg-[#00000099]">
                        <h2 className='font-pops font-bold lg:text-[28px] text-[18px] text-white lg:mt-[7px] mt-[5px] lg:pb-5 pb-2 pr-[40px]'>Supply of national industries.</h2>
                        <a className='font-pops font-semibold lg:text-[16px] text-[10px] text-white lg:py-[14px] lg:px-[30px] py-[8px] px-[20px] bg-[red]' href="#">Learn More</a>
                    </div>
                    <div className="lg:w-1/2 lg:mt-0 mt-[15px] bg-servicethree lg:pt-[147px] pt-[100px] lg:pb-[139px] pb-[80px] lg:pl-[116px] pl-[80px] bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:z-[-1] after:contents-[''] after:h-full after:w-full after:bg-[#00000099]">
                        <h2 className='font-pops font-bold lg:text-[28px] text-[18px] text-white lg:mt-[7px] mt-[5px] lg:pb-5 pb-2 pr-[40px]'>National fuel distribution and supply.</h2>
                        <a className='font-pops font-semibold lg:text-[16px] text-[10px] text-white lg:py-[14px] lg:px-[30px] py-[8px] px-[20px] bg-[red]' href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service