import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { GraduationCap, MapPin, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      {/* Intricate Concentric Waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-end opacity-40 dark:opacity-40">
        <motion.svg 
          viewBox="0 0 600 600" 
          className="w-[100vw] h-[100vw] text-blue-900/50 dark:text-white/40 translate-x-1/4"
          initial={{ rotate: 45 }}
          animate={{ rotate: 15 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
             <path
               key={i}
               d={`M 300 ${300 - (i * 10)} Q ${400 + (i * 5)} 300 300 ${300 + (i * 10)} Q ${200 - (i * 5)} 300 300 ${300 - (i * 10)}`}
               stroke="currentColor"
               strokeWidth="0.5"
               fill="none"
             />
          ))}
        </motion.svg>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
              <User className="w-4 h-4" />
              <span>Background</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Who is <span className="text-gradient">Rishi?</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div 
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am <span className="text-foreground font-bold">Rishi Vykunta</span>, a Full Stack Developer dedicated to building high-performance web applications. My journey is fueled by a curiosity for <span className="text-indigo-500 font-semibold">Web3</span> and a commitment to creating seamless digital experiences.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As a student developer, I bridge the gap between creative design and robust engineering. Whether I'm architecting scalable backends or crafting interactive frontends, my goal is always the same: <span className="italic">efficiency, security, and elegance.</span>
              </p>
              
              <div className="pt-4 grid sm:grid-cols-2 gap-4">
                {[
                  "Passionate Problem Solver",
                  "Constant Learner",
                  "Detail Oriented",
                  "Collaborative Teammate"
                ].map((trait, i) => (
                  <div key={i} className="flex items-center space-x-3 text-foreground/80 font-medium">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 glass-card border-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-500">
                  <GraduationCap size={100} />
                </div>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-2xl tracking-tight">Education</h3>
                      <p className="text-indigo-500 font-bold text-sm uppercase tracking-widest">Current Status</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold leading-tight">Indian Institute of Information Technology</h4>
                      <p className="text-muted-foreground font-medium">Vadodara</p>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
                      <MapPin className="h-4 w-4 text-indigo-500" />
                      <span>Diu, Daman and Diu</span>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        <span className="text-indigo-600 font-bold text-sm">2nd Year Student</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;