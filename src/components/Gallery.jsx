import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'

const Gallery = () => {
    return (
        <section className='pb-[25px] lg:px-0 px-2'>
            <div className="mx-auto ">
                <div className="flex justify-between flex-wrap">
                <div className="lg:w-[24%] w-[49%] py-1">
                    <img src={one} alt="" />
                </div>
                <div className="lg:w-[24%] w-[49%] py-1">
                    <img src={two} alt="" />
                </div>
                <div className="lg:w-[24%] w-[49%] py-1">
                    <img src={three} alt="" />
                </div>
                <div className="lg:w-[24%] w-[49%] py-1">
                    <img src={four} alt="" />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery