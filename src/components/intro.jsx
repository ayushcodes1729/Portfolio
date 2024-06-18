import React from "react";
import Face from "../assets/fotor-2024060601832.jpg" ;

export default function Intro (){
    return(
        <div className="introduction flex flex-col text-white justify-center items-center m-0 py-20">
            <img src={Face} alt="Face" className=" w-[60dvh] h-[60dvh] rounded-full shadow-[#8a8a8a] shadow-lg"  />
            <div className="text-content w-[50dvw] flex flex-col justify-center items-center">
                
            <span className=" text-3xl m-4">Hey</span>
            <p className=" text-6xl font-bold">I'm Ayush Kumar</p>
            <p className="text-5xl font-medium m-2">Full Stack <span className="text-[#cb9f37]">Developer|</span></p>
            <p className=" text-center text-lg m-3">A highly motivated student studying MERN stack. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.</p>
            </div>
        </div>
    )
}