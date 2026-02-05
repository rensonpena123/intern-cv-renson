import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        description: "Feel free to drop me a message anytime.",
        value: "rensonpena15@gmail.com", 
        href: "mailto:rensonpena15@gmail.com",
        action: "Send Message"
    },
        {
        icon: Phone,
        title: "Phone",
        description: "Open for calls during business hours.",
        value: "+63 945 854 8493",
        href: "tel:+639458548493",
        action: "Call Now"
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        description: "Let's connect and expand our network.",
        value: "Renson Peña", 
        href: "https://www.linkedin.com/in/renson-peña-a1b983382",
        action: "Connect"
    },
    {
        icon: Github,
        title: "GitHub",
        description: "Check out my repositories and code.",
        value: "rensonpena123",
        href: "https://github.com/rensonpena123",
        action: "View Profile"
    }
];

export const Contacts = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {contactMethods.map((item, index) => {
                        const isStatic = item.title === "Email" || item.title === "Phone";

                        const cardClasses = "glass p-8 rounded-2xl group transition-all duration-300 animate-fade-in border border-transparent relative overflow-hidden";
                        
                        const hoverClasses = isStatic ? "" : "hover:bg-primary/5 hover:border-primary/20 cursor-pointer";

                        const CardWrapper = isStatic ? 'div' : 'a';

                        return (
                            <CardWrapper 
                                key={index} 
                                href={!isStatic ? item.href : undefined}
                                target={!isStatic ? "_blank" : undefined}
                                rel={!isStatic ? "noopener noreferrer" : undefined}
                                className={`${cardClasses} ${hoverClasses}`}
                                style={{animationDelay: `${(index + 1) * 100}ms`}}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon Box */}
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                                        <item.icon className="w-6 h-6 text-primary"/>
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-semibold text-secondary-foreground">{item.title}</h3>
                                            
                                            {!isStatic && (
                                                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300"/>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <span className="text-sm font-medium text-primary flex items-center gap-2">
                                            {item.value}
                                        </span>
                                    </div>
                                </div>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}