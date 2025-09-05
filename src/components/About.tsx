import React from "react";
import { Code, Lightbulb, Target } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Developer focused on creating effective digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm{" "}
              <span className="text-white font-medium">Osvaldo Gasparini</span>,
              but they call me{" "}
              <span className="text-gray-100 font-medium">Osva</span>. I
              specialize in full-stack development with a particular focus on
              the front-end, creating interfaces that combine robust
              functionality with exceptional user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My experience ranges from complex application architecture to
              implementing interface details that make a difference. I work with
              modern technologies to deliver scalable and maintainable products.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I focus on{" "}
              <span className="text-white font-medium">clean code</span>,{" "}
              <span className="text-white font-medium">solid architecture</span>{" "}
              and{" "}
              <span className="text-white font-medium">
                user-centered design
              </span>
              . Every project is an opportunity to create something that truly
              matters.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                  <Code className="text-gray-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Development Frontend
                </h3>
              </div>
              <p className="text-gray-400">
                Specializing in React, TypeScript, and modern technologies to
                create robust and scalable interfaces.
              </p>
            </div>

            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                  <Lightbulb className="text-gray-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Technical Solutions
                </h3>
              </div>
              <p className="text-gray-400">
                Analytical approach to solving complex problems with simple and
                effective solutions.
              </p>
            </div>

            <div className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                  <Target className="text-gray-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Results-oriented
                </h3>
              </div>
              <p className="text-gray-400">
                Committed to delivering high-quality products that exceed
                customer expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
