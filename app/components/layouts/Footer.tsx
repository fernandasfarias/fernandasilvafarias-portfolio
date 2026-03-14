export default function Footer(){
    return(
        <div className="bg-[#e6e0ff] text-black dark:bg-black dark:text-white
        flex flex-col items-center justify-center p-8">
            <p>&copy; {new Date().getFullYear()} Fernanda. All rights reserved.</p>
        </div>
    )
}