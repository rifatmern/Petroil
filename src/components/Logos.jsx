import React from 'react'
import logoone from '../assets/Logo1.png'
import logotwo from '../assets/Logo2.png'
import logothree from '../assets/Logo3.png'
import logofour from '../assets/Logo4.png'

const Logos = () => {
    return (
        <section className='lg:py-[117px] py-[20px]'>
            <div className="max-w-container mx-auto">
                <div className="flex">
                    <div className="w-1/4">
                        <img className='w-full' src={logoone} alt="logoone" />
                    </div>
                    <div className="w-1/4">
                        <img className='w-full' src={logotwo} alt="logoone" />
                    </div>
                    <div className="w-1/4">
                        <img className='w-full' src={logothree} alt="logoone" />
                    </div>
                    <div className="w-1/4">
                        <img className='w-full' src={logofour} alt="logoone" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Logos