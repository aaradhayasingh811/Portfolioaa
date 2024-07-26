import React from 'react'
import trial from '../trail.png'
import a from '../images/1.png'
import b from '../images/2.png'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

export default function Leftproject(props){
    return(
        <>
        <div className="row w-2/3 m-auto" >
            <div className="col-lg-6 col-sm-12 content-center">
                <img src={props.imgsrc} alt="project-photu" className='m-0 rounded border-2 border-white'  />
            </div>
            <div className="col-lg-6 text-white col-sm-12">
                <h1 className='text-2xl capatiliaze mt-10 mb-2 text-[#ca8a04]'>{props.pname}</h1>
                <p className='text-xl leading-9'>{props.tag}</p>
                <p className='text-lg leading-9'>{props.content}</p>
                <h1 className='text-xl leading-9 mt-4 text-[#ca8a04]'>MADE WITH</h1>
                <div className="flex gap-4">
                    <HtmlIcon sx={{fontSize:54}} />
                    <CssIcon sx={{fontSize:54}} />
                    <JavascriptIcon sx={{fontSize:54}} />
                    <p className='place-self-center'> and many more..</p>
                </div>

                <div className="flex gap-4">
                    <a href={props.link} className='text-xl '>LIVE LINK</a>
                    <p className='text-xl border-e-2 border-white w-1'></p>
                    <a href={props.git} className='text-xl '>GITHUB</a>
                </div>
            </div>
        </div>
        </>
    );
}