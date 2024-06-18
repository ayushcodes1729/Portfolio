import React from "react";
import AboutImage from "../assets/About.jpg"

export default function About(){
    return(
    <div className="about text-white flex p-10 m-0">
        <div className="image m-5">
            <img src={AboutImage} alt="AboutImage" className=" w-3/4 shadow-[#8a8a8a] shadow-lg" />
        </div>
        <div className="about-content flex flex-col m-5 ">
            <span className=" text-3xl font-bold">About me</span>
            <p className=" my-5 text-lg">
        I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects. My educational background has equipped me with a solid foundation in Web Development and programming languages such as JS, C, and Python. Additionally, I have gained practical experience through hands-on projects, both independently and collaboratively.
            </p>
        </div>
    </div>
    )
}