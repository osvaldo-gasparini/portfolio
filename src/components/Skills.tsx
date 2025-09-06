import React from "react";
import {
    Code,
    Palette,
    Server,
    Smartphone,
    Database,
    GitBranch,
} from "lucide-react";

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Code className="text-gray-400" size={24} />,
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
            title: "UI/UX Design",
            icon: <Palette className="text-gray-400" size={24} />,
            skills: ["Design Systems", "Responsive Design", "Figma"],
        },
        {
            title: "Backend Development",
            icon: <Server className="text-gray-400" size={24} />,
            skills: [
                "Node.js",
                "Express",
                "NestJs",
                "Python",
                "RESTful APIs",
                "GraphQL",
            ],
        },
        {
            title: "Mobile Development",
            icon: <Smartphone className="text-gray-400" size={24} />,
            skills: ["React Native", "Progressive Web Apps"],
        },
        {
            title: "Database Management",
            icon: <Database className="text-gray-400" size={24} />,
            skills: [
                "PostgreSQL",
                "MongoDB",
                "Prisma",
                "TypeORM",
                "Firebase",
                "Supabase",
            ],
        },
        {
            title: "DevOps & Tools",
            icon: <GitBranch className="text-gray-400" size={24} />,
            skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
        },
    ];

    return (
        <section id="skills" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Technologies
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Technology stack and tools I use to develop digital
                        solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-500"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: "fadeInUp 0.8s ease-out both",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                                    >
                                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                        <span className="text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
