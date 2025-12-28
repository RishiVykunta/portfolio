import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, MapPin } from 'lucide-react';

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
                responsive user interfaces to developing  backend systems and smart
                contract logic. I am passionate about learning new technologies, solving
                real-world problems, and building secure, efficient applications that
                create meaningful user experiences.
              </p>
            </div>

            <Card className="p-6 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group">
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/50">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 group-hover:border-accent/50 transition-colors">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-foreground">Education</h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-accent/30 rounded-full mt-1"></div>
                </div>
              </div>

              {/* Institution Info */}
              <div className="space-y-3">
                <div>
                  <p className="text-foreground font-semibold text-base leading-snug mb-1">
                    Indian Institute of Information{' '}
                    <span className="text-foreground font-medium text-muted-foreground">
                      Technology, Vadodara
                    </span>
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Diu, Daman and Diu</span>
                </div>

                {/* Status Badge */}
                <div className="pt-2 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <p className="text-accent font-mono text-sm font-semibold">
                      2nd Year Student
                    </p>
                  </div>
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