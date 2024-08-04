import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";



const Navbar = () => {
    let [show, setShow] = useState(false)


    return (
        <>
            <nav className='bg-[#F40404] py-3 border-t-2 border-[#FFB800]'>
                <div className="max-w-container mx-auto items-center lg:px-0 px-3">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="">
                            <ul className={`lg:flex gap-x-6 lg:items-center absolute top-[160px] left-0 lg:static lg:px-0 px-3 lg:py-0 py-3  duration-300 ease-in-out ${show == true ? "bg-[green] w-full" : "left-[700px] w-full"}`}>
                                <li><a className='text-white font-semibold' href="">Home</a></li>
                                <li><a className='text-white font-semibold' href="">About</a></li>
                                <li><a className='text-white font-semibold' href="">Services</a></li>
                                <li><a className='text-white font-semibold' href="">Gallery</a></li>
                                <li><a className='text-white font-semibold' href="">Blog</a></li>
                                <li><a className='text-white font-semibold border-2 border-[#FFF] p-3 lg:mt-0 mt-2 rounded inline-block' href="">CONTACT</a></li>
                            </ul>
                        </div>
                        <div className="lg:hidden" onClick={() => setShow(!show)}>
                            {show == true ? <RxCross1 /> : <FaBars />}


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar