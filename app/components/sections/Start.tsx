"use client";

import Button from '../ui/Button';

export default function Start(){
    return (
        <div id="start" className="flex flex-col items-center justify-center h-screen w-full space-y-2 px-4 md:px-0
        bg-[#fff5f9] dark:bg-[#120a1f]
        text-black dark:text-white scroll-margin-top: 80px;">

            <div
            className="flex flex-col items-center
            opacity-0 translate-y-10 duration-[1000ms]
            taos:translate-y-0 taos:opacity-100"
            data-taos-offset="300">

                <h1 className="text-5xl md:text-8xl font-bold text-center mb-1
                bg-gradient-to-r bg-clip-text text-transparent inline-block from-[#ab9ff8] via-[#c8b7ff] to-[#99d0f0]">Hi! I am Fernanda</h1>

                <h2 
                className="text-2xl md:text-4xl mt-0 text-center
                text-[#4e308285] dark:text-[#fbb3d3be]">Information Systems Student</h2>

                <h3 
                className="text-center max-w-xl text-xl md:text-2xl mt-7
                text-[#4a376899] dark:text-[#ffeaf3be]">I'm a web developer who loves transforming ideas into meaningful digital experiences.</h3>

                <div className="flex flex-row gap-8 mt-10">
                    <Button phrase="See Projects" color="projects" onClick={() => console.log("clicked!")} disabled={false}/>
                    <Button phrase="Get in touch" color="allProjects" onClick={() => console.log("clicked 2!")} disabled={false}/>
                </div>
            </div>

        </div>
    )
}