import React from 'react'
import Navbar from './Navbar'
import back from '../back.png'

export default function Landing(){
    return (
        <>
        <div className="h-full">
            <Navbar />
            <div className="row">
                <div className="col-lg-6 text-center content-center my-10 md:my-0">
                    <h1 className='text-white name md:text-5xl sm:text-3xl mb-3 animate-bounce '><span className='text-[#0f766e]'>AA</span>radhaya Singh</h1>
                    <p className='text-white md:text-3xl sm:text-xl my-3'>MERN Stack Developer</p>
                    <p className='italic leading-loose md:text-xl sm:text-xl text-[#a16207] animate-pulse'> PRE FINAL YEAR BTECH STUDENT || SKILLED AT C++, MERN AND DOING COMPETITIVE PROGRAMMING & BACKEND WITH RESTFUL-API.</p>
                </div>
                <div className="col-lg-6 flex items-center">
                    <img src={back} alt="background image" className='h-2/3 mx-auto' />
                </div>
            </div>
        </div>
        </>
    );
}