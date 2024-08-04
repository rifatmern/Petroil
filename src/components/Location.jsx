import React from 'react'

const Location = () => {
    return (
        <>
            <section>
                <div className="">
                    <iframe className='w-full lg:h-[430px] h-[220px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.170391466159!2d90.37781659678951!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1713990551960!5m2!1sen!2sbd" ></iframe>
                </div>
            </section>
            <section className='lg:py-[35px] py-[15px] bg-[red] lg:px-0 px-2  border-b-3 border-[#FFB800]'>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="">
                            <h2 className='font-pops font-bold lg:text-[32px] text-[14px] text-white'>Want to join as member branch in your area?</h2>
                        </div>
                        <div className="pl-[55px]">
                            <a className='font-pops font-semibold lg:text-[16px] text-[14px] text-white lg:py-[13px] py-[8px] lg:px-[32px] px-[25px] border-2 border-[#FFFFFF]' href="#">CONTACT</a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Location