
import React from "react";
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Application of Artificial Intelligence in Medical Education',
        description:'This project represents a significant advancement in the use of AI within medical education. By addressing key challenges and integrating advanced technologies, it aims to create a more interactive, efficient, and effective learning environment for healthcare professionals. The ultimate goal is to support continuous professional development and ensure that medical practitioners are well-equipped to meet the demands of modern healthcare.',
        git:"https://github.com/pratyusha1213",
        technologies:[ 'Python', 'Django']
    },
    {
        title:'Spam SMS Filtering using Machine Learning',
        description:'The primary goal of this project was to develop a real-time spam SMS classification system. The system was designed to identify and classify incoming SMS messages as spam or legitimate at the moment they are received on a mobile phone. This approach aims to address the challenge of newly created spam messages, often referred to as "zero-hour attacks," where spammers use new techniques that are not yet recognized by conventional filters.',
        git:'https://github.com/pratyusha1213',
        technologies:['Python', 'Django']
    },
    {
        title:'Accenture North America Data Analytics and Visualization Job Simulation',
        description:'Participated in a simulated data analytics project provided by Accenture North America through the Forage platform. The simulation was designed to replicate real-world data analytics tasks, including data cleaning, modeling, analysis, and presentation. The project focused on a hypothetical social media client, requiring the application of data analytics techniques to provide actionable insights.',
        git:'https://github.com/pratyusha1213',
        technologies:['Data Visualization']
    }
]

export default Projects