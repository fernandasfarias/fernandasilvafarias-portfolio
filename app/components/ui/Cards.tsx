import { IconType } from "react-icons";

type Cardsprops = {
    icon: IconType;
    title: string;
    details: string;
    backgroundColor: string;
    iconColor: string;
}

export default function Cards( {icon: Icon,title, details, backgroundColor, iconColor}:Cardsprops ){
    return(
        <div
        style={{borderColor: backgroundColor}}
        className="border-2 hover:scale-110 transition duration-1000 ease-in-out
        bg-white flex flex-col items-center p-4 rounded-lg hover:shadow-lg dark:shadow-none
        max-w-sm w-full h-full">

            <div 
            style={{backgroundColor: backgroundColor}}
            className="rounded-full p-3 inline-flex items-center justify-center mb-2">
                <Icon
                style={{color: iconColor}}
                className="h-6 w-6"/>
            </div>

            <h3 className="text-xl text-black font-bold mb-2">{title}</h3>

            <p className="text-base text-[#4a376899] text-center">{details}</p>

        </div>
    )
}