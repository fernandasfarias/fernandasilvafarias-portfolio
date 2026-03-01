'use client';

import CardsProjects from '../ui/CardsProjects';
import { projects } from '../../../data/myProjects';

import Button from '../ui/Button';
import { GrDisabledOutline } from 'react-icons/gr';

export default function Projects(){
    return(
        <div id="projects" className="flex flex-col items-center justify-center
        min-h-screen w-full relative p-8 scroll-mt: 80px
        bg-[#fff5f9] dark:bg-[#1a112a]">

            <h2 className="sticky top-0 text-4xl md:text-6xl font-bold pb-2
            bg-gradient-to-r bg-clip-text text-transparent
            from-[#ab9ff8] to-[#d4c8f3]"
            >My Projects</h2>

            <h3 className="text-lg md:text-xl text-[#4a376899] dark:text-[#ffeaf3be]
            mt-0 text-center mb-7">
                Some of the projects I developed throughout my learning journey
            </h3>

            <section className="grid md:grid-cols-2 gap-8 mb-10">
                {projects.map((project) => (
                    <CardsProjects key={project.title} project={project}/>
                ))}
            </section>
            
            <Button phrase="See all projects" color="allProjects" onClick={() => (window.location.href='https://github.com/fernandasfarias?tab=repositories')} disabled={false}/>
        </div>
    )
}