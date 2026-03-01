import { MdOutlineEmail } from "react-icons/md"; // email icon
import { FiGithub } from "react-icons/fi"; // github icon
import { LuLinkedin } from "react-icons/lu"; // linkedin icon
import { FiInstagram } from "react-icons/fi"; // instagram icon
import Link from "next/link";

export default function(){
    return(
        <div id="contact"
        className="min-h bg-[#fff5f9] dark:bg-[#120a1f]
        flex flex-col items-center justify-center scroll-mt-20 w-full p-8 px-12 md:px-8 relative">
            
            {/* title - FINISHED*/}
            <h2 className="text-4xl md:text-6xl mb-2 sticky top-0 font-bold
            bg-gradient-to-r bg-clip-text text-transparent from-[#ab9ff8] via-[#99d0f0] to-[#d7cdf9]">Let's Connect</h2>

            {/* subtitle - FINISHED*/}
            <h3 className="text-lg md:text-xl text-[#4a376899] dark:text-[#ffeaf3be]
            mt-0 text-center mb-7">I'm always open to new opportunities and interesting conversations</h3>

            {/* containers */}
            <div className="grid md:grid-cols-2 gap-8 mt-8 mb-12 items-start">
            {/* note !!!: items-start prevents the two containers from growing together */}

                {/* first container -> FINISHED*/}
                <div className="p-8 rounded-xl text-black/80
                border-2 border-[#dbc1ef] dark:border-[#c77dff]
                bg-gradient-to-r from-[#ecd9ff]/50 via-[#d8c4f5]/50 to-[#cfe9ff]/50
                dark:text-white">

                    <h2 className="text-xl font-semibold mb-2">Contact me</h2>

                    <h3 className="text-normal mb-5">Feel free to contact me on my social media</h3>

                    <div className="flex items-center gap-2 hover:underline hover:text-[#c77dff] dark:hover:text-[#cfe9ff]">
                        <MdOutlineEmail size={25}/>
                        <p className="text-normal">fernandafariass734@gmail.com</p>
                    </div>
                </div>  

                {/* second container - FINISHED */}
                <div className="p-4 pb-8 rounded-xl bg-[#ffffff] text-black/80
                flex flex-col items-center justify-center gap-6 
                border-2 border-[#dbc1ef] dark:border-[#c77dff]">

                    <h2 className="text-xl font-semibold mb-2">Social Media</h2>

                    {/* little container with social media links */}

                    <div className="grid grid-cols-2 grid-rows-2 gap-10 place-items-center items-stretch cursor-pointer w-full px-8 md:px-16">

                        {/* Github Link */}
                        <a href="https://github.com/fernandasfarias" target="_blank" rel="noopener noreferrer" className="w-full">
                            <div className="flex flex-col items-center justify-center
                            bg-[#fff5f9] dark:bg-[#120a1f] dark:text-white
                            p-4 rounded-xl transition duration-300
                            hover:bg-[#dbc1ef]/70 dark:hover:bg-[#dbc1ef]/70
                            hover:text-[#c38be5] dark:hover:text-[#c38be5]
                            border-2 border-[#fff5f9] dark:border-[#120a1f]
                            hover:border-2 hover:border-[#c38be5] dark:hover:border-[#c38be5]">

                                <FiGithub size={35}/>
                                <p>GitHub</p>
                            </div>
                        </a>

                        {/* Linkedin Link */}
                        <a href="https://www.linkedin.com/in/fernandaafariass/" target="_blank" rel="noopener noreferrer" className="w-full">
                            <div className="flex flex-col items-center justify-center bg-[#fff5f9] p-4 rounded-xl dark:bg-[#120a1f] dark:text-white
                            transition duration-300
                            hover:bg-[#cce4ff]/70 dark:hover:bg-[#cce4ff]/70
                            hover:text-[#66b3ff] dark:hover:text-[#66b3ff]
                            border-2 border-[#fff5f9] dark:border-[#120a1f]
                            hover:border-2 hover:border-[#66b3ff] dark:hover:border-[#66b3ff]">

                                <LuLinkedin size={35}/>
                                <p>Linkedin</p>

                            </div>
                        </a>

                        {/* Instagram Link */}
                        <a href="https://www.instagram.com/nandasfarias_/" target="_blank" rel="noopener noreferrer" className="w-full">
                            <div className="flex flex-col items-center justify-center bg-[#fff5f9] p-4 rounded-xl dark:bg-[#120a1f] dark:text-white
                            transition duration-300
                            hover:bg-[#fde6f1]/50 dark:hover:bg-[#fde6f1]/50
                            hover:text-[#f39fcf] dark:hover:text-[#f39fcf]
                            border-2 border-[#fff5f9] dark:border-[#120a1f]
                            hover:border-2 hover:border-[#f39fcf] dark:hover:border-[#f39fcf]">

                                <FiInstagram size={35}/>
                                <p>Instagram</p>
                            </div>
                        </a>

                        {/* e-mail link*/}
                        <a href="mailto:fernandafariass734@gmail.com" className="w-full">
                            <div className="flex flex-col items-center justify-center bg-[#fff5f9] p-4 rounded-xl dark:bg-[#120a1f] dark:text-white
                            transition duration-300
                            hover:bg-[#dbc1ef]/70 dark:hover:bg-[#dbc1ef]/70
                            hover:text-[#c38be5] dark:hover:text-[#c38be5]
                            border-2 border-[#fff5f9] dark:border-[#120a1f] hover:border-2 hover:border-[#c38be5] dark:hover:border-[#c38be5]">

                                <MdOutlineEmail size={35}/>
                                <p>E-mail</p>
                            </div>
                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}