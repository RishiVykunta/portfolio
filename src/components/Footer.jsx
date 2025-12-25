import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by Rishi Vykunta</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;