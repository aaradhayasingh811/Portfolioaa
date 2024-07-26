import React from 'react';

export default function Tag(props){
    return(
        <>
        <div className="p-10">
        {/* <h1 className='text-3xl text-cyan-700'>&#60;{props.tag}&gt;</h1> */}
        <h1 className='text-3xl text-cyan-700'>&#60;/{props.tag}&gt;</h1>
        </div>
        </>
    );
}