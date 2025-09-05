import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Osvaldo Gasparini
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer • Frontend Specialist
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:osvaldo.gasparini@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Osvaldo Gasparini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
