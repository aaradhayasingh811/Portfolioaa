import React from 'react'

export default function Landing(){
    return (
        <>
        <div className="text-white md:text-2xl flex gap-5 justify-center">
            <div className=""><a href="/" className='hover:border-b-4 border-b-[#a16207] hover:text-white'>HOME</a></div>
            <div className=""><a href="/about" className='hover:border-b-4 border-b-[#a16207] hover:text-white'>ABOUT</a></div>
            <div className=""><a href="/project" className='hover:border-b-4 border-b-[#a16207] hover:text-white'>PROJECTS</a></div>
            <div className=""><a href="/contact" className='hover:border-b-4 border-b-[#a16207] hover:text-white'>CONTACT</a></div>
        </div>
        </>
    );
}