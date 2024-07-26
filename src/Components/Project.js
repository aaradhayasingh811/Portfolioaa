import React from 'react'
import Navbar from './Navbar';
import Foot from './Foot';
import Stag from './Stag';
import Etag from './Etag';
import Leftproject from './Leftproject';
import RightProject from './Rightproject';
import ParticlesComponent from '../ParticlesComponent';
import a from '../images/1.png'
import b from '../images/2.png'
import c from '../images/3.png'
import d from '../images/4.png'
import e from '../images/5.png'
import f from '../images/6.png'
import g from '../images/7.png'
import h from '../images/8.png'
import i from '../images/9.png'
import j from '../images/10.png'



export default function Project(){

    return (
        <>
          <ParticlesComponent id="particles" />

        <div className="p-8">

        <Navbar />
        <Stag tag="project" />

        {/* 1 */}
        <Leftproject pname="CES Official Website" tag="Officail Website of Computer Engineering Website!" content="Making offical website using HTML, CSS and JavaScript language with responsive design" imgsrc={a} link="https://cesmmmut.netlify.app/" git="https://github.com/aaradhayasingh811/ces-official-draft" />


        {/* 2 */}
        <RightProject pname="Ennexus Website" tag="Let's see how beautiful the website can be!" content="A website for the three-days technical fest which is made using React.." imgsrc={b} link="https://aaradhayasingh811.github.io/Ennexus2024final/" git="https://github.com/aaradhayasingh811/Ennexus2024final" />

        {/* 3 */}
        <Leftproject pname="Instagram Clone" tag="To make clone of Insta!" content="Making clone of instagram just using simple HTML and CSS.Isn't it amazing?" imgsrc={c} link="https://aaradhayasingh811.github.io/instagram-clone/" git="https://github.com/aaradhayasingh811/instagram-clone" />

        {/* 4 */}
        <RightProject pname="Color Generator Website" tag="We will generate the CSS color generator!" content="A website for the CSS color genrator made using HTML and pure CSS to generator colour code of different colours.." imgsrc={d} link="https://aaradhayasingh811.github.io/color_code_gen/" git="https://github.com/aaradhayasingh811/color_code_gen" />


        {/* 5 */}
        <Leftproject pname="Utility Tools" tag="All in one tools !!" content="A website which has different tools like BMI , Calculator , Age Calculator and many more.." imgsrc={e} link="https://aaradhayasingh811.github.io/Utilty_Tools/" git="https://github.com/aaradhayasingh811/Utilty_Tools" />


        {/* 6 */}
        <RightProject pname="Tic Tac Toe" tag="Come to world of X and O !" content="A Tic-Tac-Toe game played with the two players and who get all three same in diagonal wins.." imgsrc={f} link="https://aaradhayasingh811.github.io/tic_tac_toe/" git="https://github.com/aaradhayasingh811/tic_tac_toe" />


        {/* 7 */}
        <Leftproject pname="Microsoft clone" tag="Clone is exactly same but in owners words!" content="Yeah ! you see this is exactly same as of real Microsoft Clone" imgsrc={g} link="https://aaradhayasingh811.github.io/Microsoft-clone/" git="https://github.com/aaradhayasingh811/Microsoft-clone" />


        {/* 8 */}
        <RightProject pname="IEEE landing page" tag="Creativity is Fun!" content="A website made for the sample landing page for IEEE website of MMMUT.." imgsrc={h} link="https://aaradhayasingh811.github.io/IEE_landing-page/" git="https://github.com/aaradhayasingh811/IEE_landing-page" />


        {/* 9 */}
        <Leftproject pname="Apple clone" tag="Clone is exactly same but in owners words!" content="Yeah ! you see this is exactly same as of real Apple Clone" imgsrc={i} link="https://aaradhayasingh811.github.io/apple_clone_aalu/" git="https://github.com/aaradhayasingh811/apple_clone_aalu" />


        {/* 10 */}
        <RightProject pname="CES Website" tag="When creativity is your hobby!" content="A website made for the sample landing page for CES website of MMMUT.." imgsrc={j} link="https://aaradhayasingh811.github.io/ces-official/" git="https://github.com/aaradhayasingh811/ces-official" />





        <Etag tag="project" />
        <Foot />
        </div>

        
        </>
    );
}