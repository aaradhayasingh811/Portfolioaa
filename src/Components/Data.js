import React from 'react'
import WebhookIcon from '@mui/icons-material/Webhook';


export default function Data(props){
    return(
        <>
        <div className="">
            <div className="icon my-3">
                <WebhookIcon fontSize="large" color="primary" className='animate-bounce ' />
            </div>
            <div className="data">
                <h1 className='text-2xl text-white my-2'>{props.heading}</h1>
                <p className='text-lg leading-8 text-[#ca8a04]'>{props.data}</p>
            </div>
        </div>
        
        </>
    );
}