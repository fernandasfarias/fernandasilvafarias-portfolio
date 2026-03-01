import { MdOutlineEmail } from "react-icons/md"; // email icon
import { FiGithub } from "react-icons/fi"; // github icon
import { LuLinkedin } from "react-icons/lu"; // linkedin icon
import { FiInstagram } from "react-icons/fi"; // instagram icon

export default function(){
    return(
        <div id="contact"
        className="min-h bg-[#fff5f9] dark:bg-[#120a1f]
        flex flex-col items-center justify-center scroll-mt-20 w-full p-8 relative">
            
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
                <div className="p-8 rounded-xl bg-[#ede4ff] text-black/80">
                    <h2 className="text-xl font-semibold mb-2">Contact me</h2>

                    <h3 className="text-normal mb-5">Feel free to contact me on my social media</h3>

                    <div className="flex items-center gap-2 hover:underline hover:text-[#c77dff]">
                        <MdOutlineEmail size={25}/>
                        <p className="text-normal">fernandafariass734@gmail.com</p>
                    </div>
                </div>  

                {/* second container */}
                <div className="p-8 rounded-xl bg-[#ffffff] text-black/80
                flex flex-col items-center justify-center gap-6">

                    <h2 className="">Social Media</h2>

                    {/* little container with social media links */}

                    <div className="grid grid-cols-2 grid-rows-2 gap-10 place-items-center" >

                        {/* Github Link */}
                        <div className="flex flex-col items-center justify-center">
                            <FiGithub size={35}/>
                            <p className="text-xl">GitHub</p>
                        </div>

                        {/* Linkedin Link */}
                        <div className="flex flex-col items-center justify-center">
                            <LuLinkedin size={35}/>
                            <p className="text-xl">Linkedin</p>
                        </div>

                        {/* Instagram Link */}
                        <div className="flex flex-col items-center justify-center">
                            <FiInstagram size={35}/>
                            <p className="text-xl">Instagram</p>
                        </div>

                        {/* e-mail link*/}
                        <div className="flex flex-col items-center justify-center">
                            <MdOutlineEmail size={35}/>
                            <p className="text-xl">E-mail</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}