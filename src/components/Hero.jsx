import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Instagram, Mail, Sparkles, Code2, Zap } from 'lucide-react';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden bg-mesh"
    >
         <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-60 dark:opacity-60">
        <motion.svg 
          viewBox="0 0 800 800"
          className="w-[150vw] h-[150vh] max-w-none text-blue-900/50 dark:text-white/40"
          initial={{ rotate: 0, scale: 0.9 }}
          animate={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M 400 ${400 - (i * 12)} C ${500 + (i * 5)} ${400 - (i * 15)}, ${600 + (i * 8)} ${500 + (i * 10)}, 400 ${400 + (i * 18)} C ${200 - (i * 8)} ${500 + (i * 10)}, ${300 - (i * 5)} ${400 - (i * 15)}, 400 ${400 - (i * 12)}`}
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, delay: i * 0.05, ease: "easeOut" }}
            />
          ))}
        </motion.svg>
      </div>

      {/* Radial Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none z-[1]" />

      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: `${p.x}%`, y: `${p.y}%` }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [`${p.y}%`, `${p.y - 12}%`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            className="absolute bg-indigo-400 rounded-full"
            style={{ width: p.size, height: p.size, filter: 'blur(1px)' }}
          />
        ))}
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-1/4 -left-20 w-[25rem] h-[25rem] bg-indigo-600/10 rounded-full blur-[100px] animate-float z-0" />
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[100px] animate-float z-0" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <motion.div 
            className="flex-1 space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-black tracking-[0.2em] uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Full Stack Alchemist</span>
            </motion.div>

            <div className="space-y-4">
              <motion.p variants={itemVariants} className="text-indigo-500 font-bold text-lg md:text-xl tracking-wide uppercase">
                Hello, I am
              </motion.p>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] text-foreground">
                Rishi <span className="text-gradient">Vykunta</span>
              </motion.h1>

              <motion.h2 variants={itemVariants} className="text-xl md:text-3xl lg:text-4xl font-bold text-muted-foreground/90 tracking-tight">
                Architecting <span className="text-foreground">Modern</span> Digital Realms.
              </motion.h2>
            </div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
              Bridging the gap between complex logic and stunning aesthetics in <span className="text-foreground font-bold">Web & Web3</span> eco-systems.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="group h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl px-8 text-base font-black shadow-xl shadow-indigo-500/20 transition-all hover:scale-[1.05] active:scale-95"
              >
                Explore Works
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="h-14 rounded-2xl px-8 border-2 border-indigo-500/20 hover:bg-white/5 transition-all hover:scale-[1.05] active:scale-95 text-foreground font-bold"
              >
                Get in touch
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-center">
              {[
                { 
                  Icon: Github, 
                  href: "https://github.com/RishiVykunta",
                  color: "white",
                  bg: "rgba(0,0,0,0.8)",
                  glow: "rgba(255,255,255,0.15)"
                },
                { 
                  Icon: Linkedin, 
                  href: "https://www.linkedin.com/in/rishi-vykunta-1154a932b",
                  color: "#0077B5",
                  bg: "rgba(0, 119, 181, 0.1)",
                  glow: "rgba(0, 119, 181, 0.3)"
                },
                { 
                  Icon: Instagram, 
                  href: "https://www.instagram.com/rish_i__x?igsh=MW5kOXpjbTNzcGc3bw==",
                  color: "#E4405F",
                  bg: "rgba(228, 64, 95, 0.1)",
                  glow: "rgba(228, 64, 95, 0.3)"
                },
                { 
                  Icon: Mail, 
                  href: "mailto:arasavillirishi0@gmail.com",
                  color: "#EA4335",
                  bg: "rgba(234, 67, 53, 0.1)",
                  glow: "rgba(234, 67, 53, 0.3)"
                }
              ].map(({ Icon, href, color, bg, glow }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl glass-card border-none transition-all duration-300 relative group/icon"
                  style={{ backgroundColor: bg }}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: color,
                    boxShadow: `0 10px 25px -5px ${glow}, 0 8px 10px -6px ${glow}`
                  }}
                >
                  <Icon 
                    size={20} 
                    className="transition-colors duration-300"
                    style={{ color: color }}
                    strokeWidth={2.5}
                  />
                  {/* Internal Glow on Hover */}
                  <style>
                    {`
                      .group\\/icon:hover svg {
                        color: white !important;
                        filter: drop-shadow(0 0 8px rgba(255,255,255,0.5));
                      }
                    `}
                  </style>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT — 3D PROFILE IMAGE */}
          <motion.div 
            className="flex-shrink-0 relative perspective-1000"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative group" style={{ transform: "translateZ(30px)" }}>
              {/* Pro Glow */}
              <motion.div 
                className="absolute -inset-10 rounded-[4rem] bg-indigo-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{ transform: "translateZ(-20px)" }}
              />
              
              {/* Refined Profile Frame (3D Tilt) */}
              <motion.div 
                className="relative p-1 rounded-[4rem] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-indigo-500/20 shadow-2xl overflow-hidden group-hover:shadow-indigo-500/40 transition-shadow duration-700"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="rounded-[3.9rem] bg-[#0A0D14] overflow-hidden">
                  <img
                    src="https://customer-assets.emergentagent.com/job_4fdcc5aa-2a92-4059-bc05-4419b2b4a7eb/artifacts/qanu8ukm_image.png"
                    alt="Rishi Vykunta"
                    className="w-72 h-72 md:w-[28rem] md:h-[28rem] object-cover object-top transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              {/* Minimalist Floating Badges */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center border-none shadow-2xl bg-white/5"
                style={{ transform: "translateZ(60px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="text-indigo-400 w-8 h-8" />
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center border-none shadow-2xl bg-white/5"
                style={{ transform: "translateZ(80px)" }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Zap className="text-purple-400 w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

