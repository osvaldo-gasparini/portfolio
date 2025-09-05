import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Contact
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Do you have a project in mind? I'd be interested in
                        hearing your proposal and exploring how we can
                        collaborate.
                    </p>
                </div>

                {/* <div className="grid lg:grid-cols-2 gap-12 items-start"> */}
                <div className="flex flex-col gap-12 items-center">
                    {/* Contact Form */}
                    {/* <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-white/40 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-white/40 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-white/40 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-white text-black px-6 py-4 rounded-lg transition-all duration-300 hover:bg-gray-100 flex items-center justify-center gap-2 font-medium"
              >
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
                Send Message
              </button>
            </form>
          </div> */}

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="grid lg:grid-cols-2 gap-4 items-start">
                            <a
                                href="mailto:gaspariniosvaldo1@gmail.com"
                                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
                            >
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                                    <Mail className="text-gray-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">
                                        Email
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        gaspariniosvaldo1@gmail.com
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/osvaldo-gasparini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
                            >
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                                    <Github
                                        className="text-gray-400"
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">
                                        GitHub
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        github.com/osvaldo-gasparini
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/gaspariniosvaldo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
                            >
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors">
                                    <Linkedin
                                        className="text-gray-400"
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">
                                        LinkedIn
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        /in/gaspariniosvaldo
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <MapPin
                                        className="text-gray-400"
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">
                                        Location
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Argentina
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Professional statement */}
                        <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                            <blockquote className="text-gray-300 leading-relaxed">
                                "Software development requires the same
                                precision and patience as observing the cosmos:
                                attention to detail and a long-term vision."
                            </blockquote>
                            <div className="mt-4 text-gray-400 font-medium text-sm">
                                — Osvaldo Gasparini
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
