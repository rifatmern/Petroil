import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";




const Header = () => {
    return (
        <>
            <header className=' bg-[#222] text-white py-3'>
                <div className="max-w-container mx-auto">
                    <div className="lg:flex items-center">
                        <div className="lg:w-1/5 w-full">
                            <div className="flex items-center justify-center lg:justify-start gap-x-2">
                                <div className="text-white ">
                                    <CiMail />
                                </div>
                                <p className='font-pops text-white font-normal'>mail@yourcompany.com</p>
                            </div>
                        </div>
                        <div className=" lg:w-1/5 w-full">
                            <div className="flex items-center justify-center lg:justify-start gap-x-2">
                                <div className="">
                                <FaPhoneAlt />
                                </div>
                                <p className='font-pops text-white font-normal'>01852449087</p>
                            </div>
                        </div>
                        <div className="lg:w-3/5 w-full">
                            <div className="flex lg:justify-end justify-center lg:pt-0 pt-2 items-center gap-3">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header