import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Folder, Sparkle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CareLink',
      description:
        'A premium, high-fidelity healthcare support platform designed to bridge the gap between patients in need and verified medical professionals/NGO volunteers. Features a smart AI triage assistant.',
      techStack: ['Next.js 16', 'Tailwind CSS v4', 'PostgreSQL', 'Lucide React'],
      github: 'https://github.com/RishiVykunta/carelink',
      demo: 'https://carelink-pink-three.vercel.app/',
      category: 'Full Stack',
      color: 'from-rose-500 to-orange-400',
      image: '/projects/carelink.png'
    },
    {
      title: 'ITZFIZZ: Scroll Hero',
      description:
        'A high-performance, minimalist scroll-driven React Hero Section sequence featuring fluid GSAP animations, parallax effects, and smooth SVG scrubbing interactions.',
      techStack: ['Next.js 15', 'GSAP', 'ScrollTrigger', 'Vanilla CSS 3'],
      github: 'https://github.com/RishiVykunta/scroll-hero-animation',
      demo: 'https://scroll-hero-animation-ten.vercel.app/',
      category: 'Animation/UI',
      color: 'from-slate-800 to-indigo-900',
      image: '/projects/scroll_hero.png'
    },
    {
      title: 'AgriBridge',
      description:
        'A modern, full-stack e-commerce and community platform specifically tailored for the agricultural sector. Features role-based auth, an extensive catalog, advanced shopping cart, and specialist consultations.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind v4', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/RishiVykunta/AgriBridge',
      demo: 'https://agri-bridge-jljo.vercel.app',
      category: 'Full Stack',
      color: 'from-green-500 to-emerald-600',
      image: '/projects/agribridge.png'
    },
    {
      title: 'Railway Management System',
      description:
        'A full-stack Railway Reservation System offering seamless train search, ticket booking, waiting list logic, dynamic seat availability, PNR tracking, and a robust admin dashboard.',
      techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/RishiVykunta/RMS',
      demo: 'https://rms-sable.vercel.app/',
      category: 'Full Stack',
      color: 'from-blue-500 to-cyan-600',
      image: '/projects/rms.png'
    },
    {
      title: 'AI Resume Analyzer',
      description:
        'An intelligent ATS optimization platform powered by Google Gemini 2.5 Flash. It evaluates and optimizes resumes contextually against target job descriptions with detailed analytics.',
      techStack: ['Next.js 15', 'Gemini AI', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/RishiVykunta/AI-Resume-analizer',
      demo: 'https://ai-resume-analizer-sage.vercel.app/',
      category: 'Full Stack',
      color: 'from-purple-500 to-pink-600',
      image: '/projects/ai_resume.png'
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-50 dark:bg-background overflow-hidden relative">
      {/* Intricate Concentric Contour Map */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-40 dark:opacity-50">
        <motion.svg
          viewBox="0 0 1000 1000"
          className="w-[200vw] h-[200vh] text-blue-900/50 dark:text-white/40 object-cover"
          initial={{ y: -50, opacity: 0.5 }}
          animate={{ y: 50, opacity: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <path
              key={i}
              d={`M -200 ${500 + (i * 15)} 
                   Q 250 ${200 - (i * 10)} 500 ${500 + (i * 20)} 
                   T 1200 ${500 - (i * 15)}`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
          {Array.from({ length: 60 }).map((_, i) => (
            <path
              key={`bottom-${i}`}
              d={`M -200 ${500 - (i * 15)} 
                   Q 250 ${800 + (i * 10)} 500 ${500 - (i * 20)} 
                   T 1200 ${500 + (i * 15)}`}
              stroke="url(#projects-gradient)"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
          <defs>
            <linearGradient id="projects-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-16">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-indigo-500 font-mono text-sm tracking-widest uppercase"
            >
              <Sparkle className="w-4 h-4" />
              <span>Showcase</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black"
            >
              Major <span className="text-gradient">Projects.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              A selection of my recent work, ranging from complex full-stack applications to real-time dashboards.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full glass-card group hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-3 transform-gpu">
                  <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110 brightness-[0.8] group-hover:brightness-100"
                      />
                    )}
                    <Folder className="absolute bottom-4 left-4 h-12 w-12 text-white/40 group-hover:scale-110 transition-transform duration-500 z-20" />
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider border border-white/20 z-20 shadow-lg shadow-black/20">
                      {project.category}
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <CardTitle className="text-2xl font-bold group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-indigo-500/5 text-indigo-500 border-none px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button variant="outline" size="sm" asChild className="w-full rounded-xl border-border hover:bg-indigo-50 group/btn h-11 transition-all duration-300">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      {project.demo && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button size="sm" asChild className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 group/btn h-11 transition-all duration-300">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                              Live
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              <Card className="flex items-center justify-center border-dashed border-2 border-indigo-500/20 hover:border-indigo-500/50 bg-indigo-500/[0.02] transition-all duration-500 min-h-[400px] h-full rounded-[2rem] group cursor-default">
                <div className="text-center space-y-4 p-8">
                  <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500">
                    <Sparkle size={32} className="text-indigo-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold">Your Project Next?</p>
                    <p className="text-sm text-muted-foreground">I'm currently looking for new challenges and opportunities to build amazing things.</p>
                  </div>
                  <Button variant="ghost" className="text-indigo-500 hover:bg-indigo-500/10 font-bold" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    Let's Talk
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
