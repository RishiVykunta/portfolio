import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-mono text-sm md:text-base">
                Hi, my name is
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Rishi Vykunta
              </h1>

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted max-w-xl">
              Building scalable web & Web3 applications with a passion for creating
              secure, efficient solutions that deliver meaningful user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="group"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/RishiVykunta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-accent hover:bg-white/5 transition-all hover:-translate-y-1"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/rishi-vykunta-1154a932b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-accent hover:bg-white/5 transition-all hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/rish_i__x?igsh=MW5kOXpjbTNzcGc3bw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-accent hover:bg-white/5 transition-all hover:-translate-y-1"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="mailto:arasavillirishi0@gmail.com"
                className="p-2 rounded-lg border border-border hover:border-accent hover:bg-white/5 transition-all hover:-translate-y-1"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT — PROFILE IMAGE */}
          <div className="flex-shrink-0 animate-fade-in-delayed">
            <div className="relative group">

              {/* Outer glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-accent via-blue-500 to-purple-600 opacity-30 blur-lg group-hover:opacity-60 transition duration-500"></div>

              {/* Gradient ring */}
              <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-accent via-blue-500 to-purple-600">
                <div className="rounded-full bg-background p-2">
                 <img
  src="https://customer-assets.emergentagent.com/job_4fdcc5aa-2a92-4059-bc05-4419b2b4a7eb/artifacts/qanu8ukm_image.png"
  alt="Rishi Vykunta"
  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover object-top"
/>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
