import React from 'react'

import Navbar from './Navbar';
import Foot from './Foot';
import About from './About';
import ParticlesComponent from '../ParticlesComponent';

export default function OnlyContact(){
    return (
        <>
           <ParticlesComponent id="particles" />

        <div className="p-8">
            <Navbar/>
            <div className="min-h-screen content-center xs:my-5 sm:my-5 md:my-0 lg:my-0">
            <About />

            </div>
            <Foot />
        </div>

        </>
    );
}