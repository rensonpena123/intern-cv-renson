import { Button } from "@/components/button";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    {href: "#", label: "Home"},
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" :  "bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-light hover:text-primary transition-colors">
                    Rpeña
                </a>

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.href} 
                                className="px-5 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <Button size="sm">Contact Me</Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-foreground cursor-pointer hover:bg-surface rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24}/> : <MenuIcon size={24}/>}
                </button>
            </nav>

            {/* Mobile View */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in absolute top-full left-0 right-0 border-t border-white/10">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a 
                                href={link.href} 
                                key={index} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="text-lg text-muted-foreground hover:text-primary py-2 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full">Contact Me</Button>
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}