import { MessageCircle, Github, Linkedin, ChevronDown } from 'lucide-react';
import carbon from '../assets/carbon.png';
import bg1 from '../assets/bg-1.jpg';
import { Button } from '../components/button';

export const Top = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src={bg1} alt="Background Image" className="w-full h-full object-cover opacity-30"/>
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, index) => (
                    <div 
                    key={index}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#4040d3",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/*left */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary  ">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Developer Intern
                            </span>
                        </div>

                        {/* Title */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                                Building <span className="text-primary glow-text">Software</span> 
                                <br />
                                with 
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    Passion.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                                Im <span className="text-primary font-bold text-xl">Renson Peña</span>, a 4th-year BSIT student majoring in 
                                System Development at De La Salle Lipa. I am currently a 
                                Software Developer Intern at Highly Succeed Inc., 
                                where I build modern web applications using different langauges like React.Js.
                            </p>
                        </div>

                        {/* Updated Contact Button */}
                        <div>
                            <a href="#contact">
                                <Button size="lg">
                                    Contact Me <MessageCircle className="w-5 h-5"/>
                                </Button>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animate-delay-300">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {[
                                {icon: Github, href: "https://github.com/rensonpena123"},
                                {icon: Linkedin, href: "https://www.linkedin.com/in/renson-peña-a1b983382"}
                            ].map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/*right */}
                    <div className="relative animate-fade-in animate-delay-300">
                        <div className="relative max-w-md mx-auto">
                            <div 
                                className="absolute inset-0 rounded-3xl bg-gradient-br
                                from-primary/30 via-transparent to-primary/10 blur-2xl 
                                animate-pulse-glow"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src={carbon} alt="right-picture" className="w-full aspect-[4/5] object-cover rounded-2xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
                <a 
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce"/>
                </a>
            </div>
        </section>
    )
}