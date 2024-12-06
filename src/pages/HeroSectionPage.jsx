import React from 'react'
import { profileImage } from '../assets/images/index'
const HeroSectionPage = () => {
    return (
        <section>
            <div className='flex flex-col items-center p-2 bg-slate-100 pt-16'>
                <div className=''>
                    <img src={profileImage} alt="Profile Image" className="rounded-full  h-[30vh]" />
                </div>
                <div className=" text-black flex flex-col items-center gap-y-2 p-2 w-[50%]">
                    <span className="text-2xl font-bold text-center">Hi, I’m Biswajit</span>
                    <span className="text-lg text-center">I’m Software Developer from India</span>
                </div>
            </div>
        </section>

    )
}

export default HeroSectionPage