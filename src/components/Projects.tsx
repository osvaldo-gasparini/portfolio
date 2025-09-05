import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "GSP - Fitness Tracking App (Coming Soon)",
            description:
                "A personal fitness app designed to help users track workouts, nutrition, and progress over time. Built with modern web technologies, focusing on performance, scalability, and a seamless user experience. Codebase is private as it's preparing for launch.",
            technologies: [
                "React Native",
                "TypeScript",
                "Expo",
                "Node.js",
                "Nest",
                "PostgreSQL",
                "Prisma",
            ],
            image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
            featured: true,
        },
        {
            id: 2,
            title: "Gym Web Page & Leads Generator",
            description:
                "A responsive, high-design landing page for a gym offering both in-person training and full online coaching services. Focused on conversion optimization, UX/UI excellence, and seamless mobile experience. Built with modern frontend technologies and clean, maintainable code.",
            technologies: ["Next.js", "Tailwind CSS", "Supabase"],
            image: "movement-academy-hero.png",
            demoUrl: "https://movement-academy.vercel.app/",
            githubUrl: "#",
            featured: true,
        },
        /* {
            id: 3,
            title: "Mantenimiento y Construcciones",
            description: "L",
            technologies: ["React", "Express", "MongoDB", "GraphQL"],
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        },
        {
            id: 4,
            title: "Poke API",
            description:
                "Poke API",
            technologies: ["React Native", "Firebase", "Redux", "Expo"],
            image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
            demoUrl: "#",
            githubUrl: "#",
            featured: false,
        }, */
    ];

    return (
        <section id="projects" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Selection of projects that demonstrate experience in
                        full-stack development
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {projects
                        .filter((project) => project.featured)
                        .map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500"
                                style={{
                                    animationDelay: `${index * 200}ms`,
                                    animation: "fadeInUp 0.8s ease-out both",
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                    {/* Action buttons */}
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.githubUrl ? (
                                            <a
                                                href={project.githubUrl}
                                                className="p-2 bg-black/40 backdrop-blur-sm rounded-lg hover:bg-black/60 transition-colors"
                                            >
                                                <Github
                                                    size={16}
                                                    className="text-white"
                                                />
                                            </a>
                                        ) : null}
                                        {project.demoUrl ? (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                                            >
                                                <ExternalLink
                                                    size={16}
                                                    className="text-white"
                                                />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-white/10 border border-white/20 rounded text-gray-400 text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Other Projects */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects
                        .filter((project) => !project.featured)
                        .map((project, index) => (
                            <div
                                key={project.id}
                                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500"
                                style={{
                                    animationDelay: `${(index + 2) * 200}ms`,
                                    animation: "fadeInUp 0.8s ease-out both",
                                }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.githubUrl}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                        >
                                            <Github
                                                size={14}
                                                className="text-gray-400 hover:text-white"
                                            />
                                        </a>
                                        <a
                                            href={project.demoUrl}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                        >
                                            <ArrowUpRight
                                                size={14}
                                                className="text-gray-400 hover:text-white"
                                            />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-white/10 rounded text-gray-400 text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
