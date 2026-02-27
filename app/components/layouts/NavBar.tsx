"use client";

import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

import { useTheme } from 'next-themes';

export default function NavBar(){

    const[open, setOpen] = useState(false);
    const{theme, setTheme} = useTheme();
    const navRef = useRef<HTMLElement | null>(null);

    /* listener for outside click -> touch, mouse, pen and scroll */
    useEffect(() => {
        function handleClickOutside(event: Event){
            if (navRef.current && !navRef.current.contains(event.target as Node)){
                setOpen(false)
            }
        }

        document.addEventListener("pointerdown", handleClickOutside);
        document.addEventListener("scroll", handleClickOutside);

        return() => {
            document.removeEventListener("pointerdown", handleClickOutside);
            document.removeEventListener("scroll", handleClickOutside);
        };
    }, []);

    const changeTheme = () => { setTheme(theme === "light" ? "dark":"light"); };

    return(
        <nav
         ref={navRef}
         className="fixed top-0
         bg-white/80 dark:bg-[#261638]
         backdrop-blur-lg
         w-full z-50 px-10 py-6
         border-b border-[#f8c8dc]/40 dark:border-white/10
         flex items-center justify-between">
            
            {/* logo/name */}
            <h2 className="text-3xl font-bold
            bg-gradient-to-r 
            from-[#c77dff] 
            via-[#a8daff]
            to-[#f8c8dc]
            bg-clip-text text-transparent inline-block">Fernanda</h2>
            
            {/* links - for desktop and tablets */}
            <section className="hidden md:flex items-center justify-center gap-6
            text-black dark:text-white">
                
                <a href="#" className="text-base font-medium 
                hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                transition-colors">Start</a>

                <a href="#" className="text-base font-medium 
                hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                transition-colors">About</a>

                <a href="#" className="text-base font-medium 
                hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                transition-colors">Projects</a>

                <a href="#" className="text-base font-medium 
                hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                transition-colors">Contact</a>
            </section>

            {/* light and dark mode button for mobile -> aparece somente no mobile*/}
            <section className="text-3xl block md:hidden">
                <button onClick={changeTheme}>
                    {theme === "light" ? <IoMoonOutline className="text-black"/>:<CiSun className="text-white"/>}
                </button>
            </section>

            { /* mobile button */}
            <button className="md:hidden" 
            onClick={() => setOpen(!open)}
            aria-label="toogle menu"
            >
                <GiHamburgerMenu className="text-3xl text-black dark:text-white
                hover:text-[#f8c8dc]"/>
            </button>

            { /* menu mobile */}
            {open && (
                <div className="absolute top-full left-0 w-full
                bg-white/80 dark:bg-[#261638] backdrop-blur-lg
                text-black dark:text-white
                flex flex-col items-center
                gap-4 py-4
                border-b border-[#f8c8dc]/40 dark:border-white/10 md:hidden">

                    <a href="#" className="text-base font-medium 
                    hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                    transition-colors">Start</a>

                    <a href="#" className="text-base font-medium 
                    hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                    transition-colors">About</a>

                    <a href="#" className="text-base font-medium 
                    hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                    transition-colors">Projects</a>

                    <a href="#" className="text-base font-medium 
                    hover:text-[#c77dff] dark:hover:text-[#f8c8dc]
                    transition-colors">Contact</a>
                </div>
            )}

            {/* light e dark mode button que aparece apenas de md para cima */}
            <section className="text-3xl hidden md:block">
                <button onClick={changeTheme}>
                    {theme === "light" ? <IoMoonOutline className="text-black"/>:<CiSun className="text-white"/>}
                </button>
            </section>

        </nav>
    );
}