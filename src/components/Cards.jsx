import React from 'react'
import { FaChevronRight } from "react-icons/fa";


const Cards = () => {
    return (
        <section className='mb-[109px]'>
            <div className="max-w-container mx-auto">
                <div className="flex justify-between">
                <div className="lg:w-[31%] w-full my-3 pt-[75px] pb-[60px] px-[45px] bg-card1 bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099] after:z-[-1]">
                    <p className='font-pops font-bold lg:text-[27px] text-[15px] text-white pb-[50px] w-[259px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='font-pops font-semibold text-[16px] text-black py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
                </div>
                <div className="lg:w-[31%] w-full my-3 pt-[75px] pb-[60px] px-[45px] bg-card2 bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099] after:z-[-1]">
                    <p className='font-pops font-bold lg:text-[27px] text-[15px] text-white pb-[50px] w-[259px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='font-pops font-semibold text-[16px] text-black py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
                </div>
                <div className="lg:w-[31%] w-full my-3 pt-[75px] pb-[60px] px-[45px] bg-card3 bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099] after:z-[-1]">
                    <p className='font-pops font-bold lg:text-[27px] text-[15px] text-white pb-[50px] w-[259px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='font-pops font-semibold text-[16px] text-black py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
                </div>
                </div>
                <div className="flex justify-end items-center">
                <div className="">
                    <a className='font-pops font-bold text-[15px] text-[#000]' href='#'>MORE FROM THE BLLOG </a>
                </div>
                <div className="">
                    <FaChevronRight/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Cards