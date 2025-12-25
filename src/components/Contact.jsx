import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-background to-background/95"
    >
      <div className="container mx-auto max-w-6xl space-y-16">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4">
          <p className="text-sm font-mono text-muted">04.</p>
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted text-lg">
            Let&apos;s build something together
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT: CONTACT INFO */}
          <Card className="p-8 space-y-8">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <div className="space-y-6 text-sm">

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-white/5 border border-border">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-muted">Email</p>
                  <p className="font-medium">
                    arasavillirishi0@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-white/5 border border-border">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-muted">Phone</p>
                  <p className="font-medium">
                    +91 6300189945
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-white/5 border border-border">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-muted">Location</p>
                  <p className="font-medium">
                    Visakhapatnam, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* SOCIAL */}
            <div className="space-y-4">
              <p className="text-sm text-muted">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/RishiVykunta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-accent hover:bg-white/5 transition"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/rishi-vykunta-1154a932b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-accent hover:bg-white/5 transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Card>

          {/* RIGHT: FORM */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
