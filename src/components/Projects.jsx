import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Job Portal',
      description:
        'A full-stack Job Portal Web Application where candidates can search and apply for jobs, recruiters can post job listings, and admins can manage users, jobs, and applications.',
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT Authentication'],
      github: 'https://github.com/RishiVykunta/job-portal',
      demo: 'https://job-portal-frontend-ax4u.onrender.com',
      category: 'Full Stack',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-accent font-mono text-lg">03.</span> Projects
            </h2>
            <div className="h-0.5 w-24 bg-accent"></div>
            <p className="text-muted-foreground">
              Here are some of my recent projects showcasing my skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 transform group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Placeholder cards to show expandable design */}
            <Card className="flex items-center justify-center border-dashed border-2 border-border hover:border-accent/50 transition-colors min-h-[300px]">
              <div className="text-center space-y-2 p-6">
                <p className="text-muted-foreground text-sm">More projects coming soon...</p>
                <p className="text-xs text-muted-foreground/70">Stay tuned for updates</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;