import React from 'react'
import Data from './Data';

export default function Service(){
    return(
        <>
        <div className="row mx-auto w-3/4">
            <div className="col-lg-4 col-md-6">
                <Data data="Coupling deep expertise in both frontend and backend frameworks, along with proficient GitHub utilization , I navigate the digital realm seamlessly, crafting robust, scalable solutions" heading="Web Development" />
            </div>
            <div className="col-lg-4 col-md-6">
                <Data data="Proficient in crafting visually appealing and intuitive user interfaces, I specialize in delivering user-friendly experiences that captivate and delight." heading="UI / UX" />
            </div>
            <div className="col-lg-4 col-md-12 ">
                <Data data="Demonstrates a strong command of data structures and algorithms, having successfully tackled more than 600 problems with precision and innovation." heading ="Problem Solver" />
            </div>
        </div>
        
        </>
    );
}