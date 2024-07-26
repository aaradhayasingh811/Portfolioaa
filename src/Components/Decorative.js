import React from 'react'
import '../App.css'

export default function Decorative(props){
    return (
        <>

        <div className="h-full">
            <h1 className='text-4xl text-center baskervville-sc-regular m-auto my-5 text-[#c084fc] hover:animate-ping'>"{props.tag}"</h1>
            <div className="page flex justify-center">
                <main className="con-dec">
                     <div className="item">
                        <i className="loader --2" />
                     </div>
                     <div className="item">
                         <i className="loader --9" />
                         </div>
                         <div className="item">
                            <i className="loader --3" />
                            </div>
                            <div className="item">
                                <i className="loader --4" />
                                </div>
                                <div className="item">
                                    <i className="loader --1" />
                                    </div>
                                    <div className="item">
                                        <i className="loader --5" />
                                        </div>
                                        <div className="item">
                                            <i className="loader --6" />
                                            </div>
                                            <div className="item">
                                                <i className="loader --8" />
                                                </div>
                                                <div className="item">
                                                    <i className="loader --7" />
                                                    </div>
                                                    </main>
                                                    </div>

        </div>
        
        </>
    );
}