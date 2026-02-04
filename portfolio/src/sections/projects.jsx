import { ArrowRight, ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "B-Go Modern Jeepney Tracking App and Admin Dashboard",
        description:
        "A mobile application enables real-time tracking of modern jeepneys, providing location updates, and passenger count management to improve overall commuter experience. Admin Dashboard for ticket management and route monitoring to streamline operations. Developed using Flutter, Firebase, GPS, React.js ",
        image: "/src/assets/admin.jpg",
        tags: ["Flutter", "Firebase", "React.js"],
        github: "https://github.com/rensonpena123/b-go-capstone-admin"
    },
    {
        title: "Appointment Scheduler Web App",
        description:
        "A web-based scheduling system designed to manage and display available appointment slots, allowing efficient organization of schedules. Used HTML and CSS for frontend. JavaScript and JSON for backend. ",
        image: "/src/assets/scheduler.jpg",
        tags: ["HTML", "CSS", "JavaScript" ],
        github: "https://github.com/rensonpena123/ITElectiveFinalProject"
    },
    {
        title: "SQL-Driven POS for Local Eatery",
        description:
        "A web-based POS system that can revolutionize small restaurants by streamlining operations and minimizing mistakes. And the main goal is to offer an extensible and secure solution for small and medium-sized foodservice companies. Used PHPMyAdmin for database, PHP and JavaScript for backend, and HTML and CSS for frontend.",
        image: "/src/assets/POS.jpg",
        tags: ["PHP", "JavaScript", "HTML", "CSS", "SQL"],
        github: "https://github.com/rensonpena123/Eatery_POS"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">

                {/* header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        My Projects
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> 
                            {" "}
                            I worked on.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animate-delay-200">
                        A showcase of my recent projects from my academic coursework.
                    </p>
                </div>

                {/* projects grid */}
                <div className="grid md:grid-cols-3 gap-8 ">
                    {projects.map((project, index) => (
                        <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 "
                        style={{animationDelay: `${(index + 1) * 100}ms`}}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img  
                                src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div 
                                className="absolute inset-0 bg-gradient-to-t
                                from-card via-card/50 to-transparent opacity-60"
                                />
                                {/* links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.github} 
                                    className="p-3 rounded-full glass  hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>

                            {/* content */ }
                            <div className="p-6 space-y-4 ">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" >
                                        {tag}
                                    </span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </section>
    );  
};