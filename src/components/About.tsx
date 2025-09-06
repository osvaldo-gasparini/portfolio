import React from "react";
import { Code, Lightbulb, Target } from "lucide-react";

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Hey there, I'm{" "}
                            <span className="text-white font-medium">Osva</span>
                            <br />I solve problems through code.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            From intuitive interfaces to scalable backends and
                            cloud infrastructure, I approach every project as an
                            opportunity to deliver clarity, impact, and products
                            that people actually enjoy using.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                                    <Code className="text-gray-300" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Full-Stack Development
                                </h3>
                            </div>
                            <p className="text-gray-400">
                                Building products end-to-end, from intuitive
                                frontends to scalable backends and cloud
                                infrastructure.
                            </p>
                        </div>

                        <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                                    <Lightbulb
                                        className="text-gray-300"
                                        size={24}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Technical Solutions
                                </h3>
                            </div>
                            <p className="text-gray-400">
                                Analytical approach to solving complex problems
                                with simple and effective solutions.
                            </p>
                        </div>

                        <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                                    <Target
                                        className="text-gray-300"
                                        size={24}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Results-oriented
                                </h3>
                            </div>
                            <p className="text-gray-400">
                                Committed to delivering high-quality products
                                that exceed customer expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
