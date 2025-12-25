import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {
  Code2,
  Server,
  Wrench,
  Blocks,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-500',
      skills: [
        'HTML5',
        'CSS3',
        'Flexbox',
        'Grid',
        'Bootstrap 5',
        'JavaScript (ES6)',
        'DOM Manipulation',
        'jQuery',
        'React.js',
        'React Hooks',
        'Web Design',
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500',
      skills: [
        'Node.js',
        'Express.js',
        'NPM',
        'EJS',
        'REST APIs',
        'SQL',
        'PostgreSQL',
        'Authentication',
        'Authorization',
      ],
    },
    {
      title: 'Tools & Development',
      icon: Wrench,
      color: 'text-orange-500',
      skills: [
        'Git',
        'GitHub',
        'Version Control',
        'Bash / Command Line',
        'GitHub Pages',
      ],
    },
    {
      title: 'Web3 / Blockchain',
      icon: Blocks,
      color: 'text-purple-500',
      skills: [
        'Blockchain Technology',
        'Web3 Development',
        'Internet Computer',
        'Token Smart Contracts',
        'NFT Development',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-accent font-mono text-lg">02.</span> Skills & Technologies
            </h2>
            <div className="h-0.5 w-24 bg-accent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 transform"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-3 py-1 hover:bg-accent/20 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;