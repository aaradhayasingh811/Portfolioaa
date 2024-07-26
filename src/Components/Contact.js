import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';


export default function Contact(){
    return(
        <>
        <div className="row text-white px-10">
            <div className="col-lg-6 flex flex-col gap-2 justify-center items-center">
                <input type="text" placeholder='Name' className='w-2/3 h-10 rounded-md bg-gray-900 outline-none text-left' name='name' />
                <input type="email" placeholder='Email' className='w-2/3 h-10 rounded-md bg-gray-900 outline-none text-left' name='email' />
                <textarea name="message" placeholder='Message' className='w-2/3 h-28 rounded-md bg-gray-900 outline-none text-left'></textarea>
                <button className='px-5 rounded py-2 bg-gray-900 hover:transition hover:ease-in-out' ><a href="mailto:aaradhayasingh811@gmail.com">Submit
                </a> </button>
            </div>
            <div className="col-lg-6 leading-9">
                <h1 className='md:text-2xl sm:text-2xl text-xl text-[#2d9687] leading-9 mb-4 gap-4 md:gap-0'>Thank you for visiting my portfolio. Please do not hesitate to contact me for any inquiries or opportunities:</h1>
                <p className='text-xl leading-9'><span className='text-yellow-500'><a href=""><LinkedInIcon /></a></span> AAradhaya Singh</p>
                <p className='text-xl leading-9'><span className='text-yellow-500'><EmailIcon /></span>aaradhayasingh811@gmail.com</p>
                <p className='text-xl leading-9'><span className='text-yellow-500'><PhoneAndroidIcon /> </span>+91 8934081196</p>
                <h2 className='italic text-xl text-[#2d9687] mt-3'>Thank you for visiting my portfolio. I look forward to connecting with like-minded professionals and exploring new opportunities. If you have a project in mind or just want to chat about technology, feel free to reach out!

</h2>
            </div>
        </div>
        </>
    );
}