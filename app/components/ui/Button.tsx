type ButtonProps = {
    phrase: string;
    color?: "projects" | "contact" | "allProjects";
    onClick?: () => void;
    disabled: boolean;
}

export default function Button( { phrase, color = "projects", onClick, disabled = false }: ButtonProps){

    const transition = "transition-all duration-500 ease-out hover:scale-110";

    const buttonColors = {
        projects: "bg-[#c77dff] text-white hover:bg-[#e2aaff]",
        contact: "bg-[#bfa6c1] text-white hover:bg-[#d2c3d5] dark:text-black",
        allProjects: "bg-gradient-to-r inline-block from-[#b392ff] via-[#ab9ff8] to-[#7fc0e6] hover:from-[#c8b7ff] hover:via-[#c0b5fc] hover:to-[#99d0f0] text-white"
    };

    const buttonBasicStyle = "px-5 py-2 md:px-10 py-3 rounded-3xl";

    return(
        <div>
            <button
            className={`${buttonBasicStyle} ${buttonColors[color]} ${transition}`}
            onClick={onClick}
            disabled={disabled}
            >{phrase}</button>
        </div>
    )
}