import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
    const scrollToNext = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center lg:justify-start relative w-full">
            <div className="text-center z-10 max-w-4xl mx-auto lg:mx-0 px-6 lg:flex lg:flex-col lg:justify-start lg:pl-40">
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-400 text-sm font-medium w-min text-nowrap">
                    Full Stack Developer
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight lg:text-start">
                    <span className="text-white">Hello, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                        Osvaldo Gasparini
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light lg:text-start">
                    Full-Stack Developer. I build reliable, scalable products
                    and interfaces people enjoy using.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center lg:justify-start">
                    <button
                        onClick={() => scrollToNext()}
                        className="group bg-white text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/10 flex items-center gap-2 font-medium"
                    >
                        See my work
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </button>

                    <button
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="group border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/5 font-medium"
                    >
                        Contact
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-8 inset-x-0 mx-auto text-gray-500 hover:text-gray-300 transition-colors animate-bounce w-max"
            >
                <ChevronDown size={32} />
            </button>
        </section>
    );
};

export default Hero;
