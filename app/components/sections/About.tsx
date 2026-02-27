import Cards from '../ui/Cards';

import { IoCodeSlash } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";

export default function About(){
    return (
        <div id="about" className="flex flex-col items-center
        bg-[#fff5f9] dark:bg-[#120a1f] min-h-screen w-full relative
        p-8 scroll-margin-top: 80px;">
            
            <h2 className="sticky top-0 text-4xl md:text-6xl font-bold 
            bg-gradient-to-r bg-clip-text text-transparent inline-block from-[#ab9ff8] to-[#d7cdf9] text-xenter">About me</h2>

            <h3 className="text-lg md:text-2xl text-[#4a376899] dark:text-[#ffeaf3be]
            mt-0 text-center mb-7">
                A technology and innovation enthusiast
            </h3>

            <section className="grid md:grid-cols-3 gap-8">
                
                {/* card for web development */}
                <Cards icon={IoCodeSlash} title="Web Development" details="Exploring modern technologies to build intuitive and responsive interfaces. Learning React, TypeScript, and modern frameworks" backgroundColor="#ecd9ff" iconColor="#c77dff"/>

                {/* card for DataBases learning */}
                <Cards icon={FaDatabase} title="DataBases" details="Learning to store, organize, and query data efficiently. Exploring SQL, relational tables, and NoSQL databases." backgroundColor="#d8c4f5" iconColor="#b185db"/>

                {/* card for continuous growth*/}
                <Cards icon={FiTrendingUp} title="Continuous Growth" details="Always seeking new knowledge and challenges. Believing in constant learning and personal evolution." backgroundColor="#cfe9ff" iconColor="#4dabf7"/>

            </section>

            <section
            className="border-2 border-[#d8c4f5]
            bg-gradient-to-r from-[#ecd9ff] via-[#d8c4f5] to-[#cfe9ff]
            rounded-2xl p-4 mt-7 w-[90%] min-w-[300px] max-w-5xl mx-auto
            hover:scale-105 transition duration-1000 ease-in-out hover:shadow-lg"
            >
                <h2
                className="text-2xl font-bold mb-4 text-black">My journey</h2>

                <p className="text-[#0f0225b6]">I'm an Information Systems student entering my fifth semester at the Federal University of Sergipe (UFS). I'm constantly exploring new tools and deepening my knowledge to build meaningful projects and strengthen my technical foundation. I currently serve as a volunteer at Softeam, the Computer Science Junior Enterprise, where I continue to grow both technically and professionally.</p>

            </section>

        </div>
    )
}