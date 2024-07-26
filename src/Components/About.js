import React from 'react'
import { pink } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';



export default function About(props){
    return (
    <>
    <div className="p-10">
        <h1 className='text-3xl text-cyan-700'>&#60;{props.tag}&gt;</h1>
        <div className="px-10 py-3 row">
            <div className="col-lg-6">
                <p className='text-3xl text-[#2d9687] leading-9 italic'>Hello! I'm AAradhaya Singh, a pre-final year student with a passion for technology and innovation. Currently, I'm delving deep into the world of MERN stack development, where I specialize in creating dynamic and responsive web applications. My journey in tech has been both exciting and rewarding, and I'm constantly eager to learn and adapt to the ever-evolving landscape of software development.</p>
                <p className='text-2xl text-[#e9b171] leading-9'>As a MERN stack developer, I work with MongoDB, Express.js, React, and Node.js to build robust, scalable web solutions.</p>
                <p className='text-2xl text-[#e9b171] leading-9'>I believe in a user-centered approach to development, where the end-user experience drives design and functionality.</p>
                <p className='text-2xl text-[#2d9687] leading-9'>In a quest for always keeping myself updated, I read books and attend conferences.</p>
                <button className='border-2 border-cyan-900 text-white text-2xl p-2 w-full my-5 shadow-md hover:text-[#065f46]'><a href="https://drive.google.com/file/d/1OA-EoFOTAWxlPKZCP6kK9TRt2r_1eofh/view?usp=sharing">Curriculum Vitae</a> </button>
            </div>
            <div className="col-lg-6">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 py-16">
                    <button className='border-0 p-10 rounded-full border-white'></button>

                    <button className='border-0 p-10 rounded-full border-white'>

                        <Tooltip title="LinkedIn">
                    <a href={"https://www.linkedin.com/in/aaradhaya-singh-693434257/"} target='_blank'>
                        <LinkedInIcon sx={{ color: pink[500] ,fontSize: 54 }} />
                        </a>
                        </Tooltip>
                        </button>
                        
                    <button className='border-0 p-10 rounded-full border-white'></button>
                    <button className='border-0 p-10 rounded-full border-white p-15'>
                        <Tooltip title="Instagram" >
                            <InstagramIcon sx={{ color: pink[500] ,fontSize: 54 }} /></Tooltip>
                        </button>
                    <button className='border-0 p-10 rounded-full border-white'></button>
                    <button className='border-0 p-10 rounded-full border-white'>
                        <Tooltip title="GitHub" >
                            <a href="https://github.com/aaradhayasingh811">
                        <GitHubIcon sx={{ color: pink[500] ,fontSize: 54 }} />
                            </a>
                        </Tooltip>
                    </button>
                    <button className='border-0 p-10 rounded-full border-white'></button>
                    <button className='border-0 p-10 rounded-full border-white'>
                        <Tooltip title="Email" >
                            <a href="mailto:aaradhayasingh811@gmail.com">

                        <EmailIcon sx={{ color: pink[500] ,fontSize: 54 }} />
                            </a>
                        </Tooltip>
                    </button>
                    <button className='border-0 p-10 rounded-full border-white'></button>
                </div>
            </div>
        </div>
        <h1 className='text-3xl text-cyan-700'>&#60;/{props.tag}&gt;</h1>
    </div>
    </>
    );
}