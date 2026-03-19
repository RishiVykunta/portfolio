import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Folder, Instagram } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Label by Swathy Reddy',
      role: 'Full Stack Web Developer',
      description:
        'A premium, high-performance e-commerce platform built from the ground up for exclusive designer sarees. Engineered with a robust full-stack architecture, ensuring a fast, secure, and beautiful user experience across all devices. Features dynamic discovery, advanced CRUD, and JWT Auth with OTP.',
      techStack: ['React 18', 'Node.js', 'PostgreSQL', 'Vercel Serverless', 'Cloudinary'],
      github: 'https://github.com/RishiVykunta/SR-silks',
      demo: 'https://labelbyswathireddy.com/',
      instagram: 'https://www.instagram.com/label_swathyreddy?igsh=Z2tkYXVrYmpjNDRy&utm_source=qr',
      category: 'Professional Experience',
      color: 'from-pink-500 to-rose-600',
      image: 'https://res.cloudinary.com/dqcxekzxn/image/upload/v1768493188/WhatsApp_Image_2026-01-15_at_1_LE_upscale_ultra_size_of_changes_0_intensity_10_ncaydq.jpg'
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50 dark:bg-background overflow-hidden relative">
      {/* Intricate Circular Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-60 dark:opacity-100">
        <motion.svg
          viewBox="0 0 1000 1000"
          className="w-[200vw] h-[200vh] text-blue-900/50 dark:text-white/20"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={150 + (i * 50)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="10 20"
            />
          ))}
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Professional Journey</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl text-center text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real-world impact through robust solutions and high-end engineering.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto items-stretch">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full glass-card group hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-3 transform-gpu">
                <div className={`h-48 w-full bg-gradient-to-br ${exp.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  {exp.image && (
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal opacity-70 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110" 
                    />
                  )}
                  <Folder className="absolute bottom-4 left-4 h-12 w-12 text-white/40 group-hover:scale-110 transition-transform duration-500 z-20" />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider border border-white/20 z-20 shadow-lg shadow-black/20">
                    {exp.category}
                  </div>
                </div>

                <CardHeader className="space-y-2">
                  <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="w-max bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 border-indigo-500/20 text-[10px] py-0">
                      {exp.role}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-indigo-500 transition-colors">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow justify-between gap-6 pb-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-indigo-500/5 hover:bg-indigo-500/10 text-foreground/80 font-medium transition-colors text-[10px]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 pt-4 border-t border-border/50">
                    {exp.github && (
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" className="group/btn hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-8 w-8" asChild>
                          <a href={exp.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 text-muted-foreground group-hover/btn:text-foreground transition-colors" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {exp.demo && (
                      <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" className="group/btn hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-8 w-8" asChild>
                          <a href={exp.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/btn:text-foreground transition-colors" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {exp.instagram && (
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" className="group/btn hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full h-8 w-8" asChild>
                          <a href={exp.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4 text-muted-foreground group-hover/btn:text-pink-500 transition-colors" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Experience CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            <Card className="flex items-center justify-center border-dashed border-2 border-indigo-500/20 hover:border-indigo-500/50 bg-indigo-500/[0.02] transition-all duration-500 min-h-[400px] h-full rounded-[2rem] group cursor-default">
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    <span className="text-lg font-black">+</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold">Your Team Next?</p>
                  <p className="text-sm text-muted-foreground">I'm currently looking for full-time roles and opportunities to contribute to high-impact projects.</p>
                </div>
                <Button variant="ghost" className="text-indigo-500 hover:bg-indigo-500/10 font-bold" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  Hire Me
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
