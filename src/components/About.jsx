import React from 'react';
import { Card } from './ui/card';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-accent font-mono text-lg">01.</span> About Me
            </h2>
            <div className="h-0.5 w-24 bg-accent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am Rishi Vykunta, a Full Stack Developer with a strong foundation in
                building scalable web applications and a growing focus on Web3 and
                blockchain technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a student, I enjoy working across the full stack—from crafting
                responsive user interfaces to developing robust backend systems and smart
                contract logic. I am passionate about learning new technologies, solving
                real-world problems, and building secure, efficient applications that
                create meaningful user experiences.
              </p>
            </div>

            <Card className="p-6 border-accent/20 hover:border-accent/50 transition-colors">
              <div className="flex items-start space-x-3">
                <GraduationCap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Indian Institute of Information Technology, Vadodara
                  </p>
                  <p className="text-accent text-sm font-mono mt-1">2nd Year Student</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;