import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

type Project = {
  image: string;
  title: string;
  description: string;
  tech: string[];
  demoLink?: string;
  githubLink: string;
};

type CardsProjectsProps = {
  project: Project;
};

export default function CardsProjects( { project }: CardsProjectsProps ){
    return(
        <div className="group max-w-sm w-full h-full overflow-hidden
        hover:border-2 hover:border-[#ab9ff8] dark:hover:border-[#c77dff]
        hover:scale-110 transition duration-1000 ease-in-out group
        hover:shadow-lg dark:shadow-none rounded-xl
        flex flex-col">

            {/* image */}
            <div className="relative h-48 overflow-hidden">
                
                <img src={project.image} alt={project.title}
                className="w-full h-full object-cover rounded-t-xl
                group-hover:scale-110 transform transition duration-500"></img>
                
            </div>

            {/* white container */}
            <div className="bg-white flex flex-col flex-grow items-start p-4 overflow-hidden rounded-b-xl">
                {/* obs: flex-grow -> ocupa o espaço disponível */}

                <h2 className="text-black font-semibold">{project.title}</h2>

                <p className="text-base text-[#4a376899] mt-2">{project.description}</p>
                
                {/* div for the technologies used for the actual project */}
                <div className="flex flex-wrap gap-6 mt-5">
                    {project.tech.map((item) => (
                        <span key={item}
                        className="text-xs text-black bg-[#d0cbf4] px-4 py-2 rounded-2xl
                        w-24 text-center">
                            {item}
                        </span>
                    ))}
                </div>
                
                <div className="flex gap-3">

                    <div className="flex items-center gap-0.5 mt-5 group hover:underline text-[#c77dff] hover:#c77dff">
                        {project.demoLink && (
                            <>
                                <LuExternalLink/>
                                <a href={project.demoLink}>Demo</a>
                            </>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-0.5 mt-5 group hover:underline text-[#c77dff] hover:#c77dff">
                        <FiGithub/>
                        <a href={project.githubLink}>Code</a>
                    </div>

                </div>

            </div>
        </div>
    )
}