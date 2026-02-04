import { Code2, Lightbulb, Rocket, User } from "lucide-react"


const highlights = [
    {
        icon: Code2,
        title: "Clear Code",
        description: 
        "I build scalable applications with a focus on clean architecture, turning complex logic into structured, easy-to-debug solutions."
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "I prioritize performance in every build, ensuring that applications are not just functional, but lightning-fast and responsive."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "I approach challenges with a fresh perspective, combining creativity with logic to deliver unique and effective digital solutions."
    },
    {
        icon: User,
        title: "Collaboration",
        description:
        "I value open communication and shared knowledge, believing that the best solutions are built when diverse ideas come together."
    }
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div className="space-y-8 ">
                        <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
                        Shaping the modern web,
                        <span className="font-serif italic font-normal text-white"> {" "}one project at a time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
                        <p>
                            I’m a passionate Software Developer Intern with a good foundation in building modern web applications. 
                            My journey started with my love to video games, and it has evolved into a deep focus on System Development and Web Development.
                        </p>
                        <p>
                            Beyond the code, I am a continuous learner who thrives in collaborative environments, 
                            always eager to tackle new challenges and push the boundaries of modern web development.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My goal is to continuously push the boundaries of my technical skills, 
                            transforming innovative ideas into impactful digital reality. 
                            I am dedicated to lifelong learning and contributing to the betterment of other communities."
                        </p>
                    </div>
                </div> 

                {/* Right */}
                <div className="grid sm-grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <div key={index} className="glass p-6 rounded-2xl animate-fade-in" 
                        style={{animationDelay: `${(index + 1) * 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}