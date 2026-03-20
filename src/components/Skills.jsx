import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { 
  Monitor, 
  Server, 
  Settings, 
  Terminal, 
  Database, 
  Layers, 
  Globe, 
  Code2, 
  Cpu, 
  Smartphone,
  ShieldCheck,
  Cloud,
  GitBranch,
  Search
} from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'bg-orange-600',
      textColor: 'text-orange-500',
      skills: [
        { name: 'HTML5', percentage: 95, icon: Globe },
        { name: 'CSS3', percentage: 90, icon: Layers },
        { name: 'JavaScript ES6', percentage: 92, icon: Code2 },
        { name: 'React.js', percentage: 88, icon: Cpu },
        { name: 'Bootstrap 5', percentage: 90, icon: Smartphone },
        { name: 'jQuery', percentage: 85, icon: Search }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      skills: [
        { name: 'Node.js', percentage: 88, icon: Database },
        { name: 'Express.js', percentage: 85, icon: Server },
        { name: 'REST APIs', percentage: 86, icon: Layers },
        { name: 'SQL', percentage: 82, icon: Database },
        { name: 'PostgreSQL', percentage: 80, icon: Database },
        { name: 'EJS', percentage: 85, icon: Code2 }
      ]
    },
    {
      title: 'Other Technologies',
      icon: Settings,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      skills: [
        { name: 'Git/GitHub', percentage: 90, icon: GitBranch },
        { name: 'Web3', percentage: 75, icon: Globe },
        { name: 'Blockchain', percentage: 75, icon: Layers },
        { name: 'Bash', percentage: 80, icon: Terminal },
        { name: 'Authentication', percentage: 85, icon: ShieldCheck },
        { name: 'Deployment', percentage: 85, icon: Cloud }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* Dynamic Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60 dark:opacity-20 translate-y-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-900/50 dark:text-indigo-900/50" />
            </pattern>
            <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" className="text-blue-900/30 dark:text-indigo-800/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20 space-y-4 text-center">
      {/* Section Label - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute top-12 left-6 md:left-12 flex items-center space-x-2 text-indigo-500 font-mono text-sm tracking-widest uppercase z-20"
      >
        <Cpu className="w-4 h-4" />
        <span>02. Arsenal</span>
      </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-black"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Technical <span className="text-gradient">Arsenal.</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl text-lg leading-relaxed mix-blend-multiply dark:mix-blend-normal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A comprehensive overview of my tech stack, proficiency levels, and engineering capabilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <Card className="h-full glass-card border-none p-8 rounded-[2.5rem] hover:border-indigo-500/30 transition-all duration-500 group overflow-hidden relative">
                <div className="space-y-10 relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-slate-800/80 flex items-center justify-center text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 dark:border-white/5 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                      <category.icon size={28} />
                    </div>
                    <h3 className="text-xl font-black leading-tight max-w-[120px] text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-8">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-3 text-muted-foreground group-hover:text-foreground transition-colors capitalize font-bold">
                            <skill.icon size={18} className={category.textColor} />
                            <span>{skill.name}</span>
                          </div>
                          <span className="font-mono text-muted-foreground font-bold">{skill.percentage}%</span>
                        </div>
                        <div className="h-2 w-full bg-indigo-500/5 dark:bg-slate-800 rounded-full overflow-hidden border border-indigo-500/10 dark:border-white/5 p-[1.5px]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                            className={`h-full rounded-full ${category.color} shadow-[0_0_10px_0_rgba(0,0,0,0.3)]`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative background element */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${category.color} opacity-0 group-hover:opacity-5 blur-[100px] transition-opacity duration-1000`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;