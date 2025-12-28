import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
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
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  // EmailJS Configuration
  // To set up EmailJS:
  // 1. Go to https://www.emailjs.com/ and create a free account
  // 2. Create an email service (Gmail, Outlook, etc.)
  // 3. Create an email template
  // 4. Get your Public Key, Service ID, and Template ID
  // 5. Add them to your .env file (remove any quotes or spaces)
  const EMAILJS_SERVICE_ID = (process.env.REACT_APP_EMAILJS_SERVICE_ID || '').trim();
  const EMAILJS_TEMPLATE_ID = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '').trim();
  const EMAILJS_PUBLIC_KEY = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '').trim();

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' && EMAILJS_PUBLIC_KEY !== '') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Check if EmailJS is configured
      const isPlaceholder = (value) => {
        const placeholders = [
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          'YOUR_PUBLIC_KEY',
          'your_service_id_here',
          'your_template_id_here',
          'your_public_key_here',
          '',
        ];
        return !value || placeholders.includes(value);
      };

      if (
        isPlaceholder(EMAILJS_SERVICE_ID) ||
        isPlaceholder(EMAILJS_TEMPLATE_ID) ||
        isPlaceholder(EMAILJS_PUBLIC_KEY)
      ) {
        throw new Error(
          'EmailJS is not configured. Please:\n1. Open frontend/.env file\n2. Replace the placeholder values with your actual EmailJS credentials\n3. Restart the development server (stop with Ctrl+C, then run npm start again)\n\nSee EMAILJS_SETUP.md for detailed instructions.'
        );
      }

      // Validate public key format (should be a string, not empty)
      if (EMAILJS_PUBLIC_KEY.length < 10) {
        throw new Error(
          'Invalid EmailJS Public Key format. Please check your .env file and ensure there are no extra quotes or spaces.'
        );
      }

      // Initialize EmailJS if not already initialized
      if (!emailjs.init) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'arasavillirishi0@gmail.com', // Your email
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else if (error.status === 400) {
        errorMessage += 'Invalid EmailJS configuration. Please check your Service ID, Template ID, and Public Key in the .env file.';
      } else if (error.status === 401) {
        errorMessage += 'Invalid Public Key. Please verify your EmailJS Public Key in the .env file and restart the server.';
      } else {
        errorMessage += 'Please try again or contact me directly at arasavillirishi0@gmail.com';
      }
      
      setStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-background to-background/95"
    >
      <div className="container mx-auto max-w-6xl space-y-16">

        {/* SECTION HEADER */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-accent font-mono text-lg">04.</span> Get In Touch
          </h2>
          <div className="h-0.5 w-24 bg-accent"></div>
          <p className="text-muted-foreground">
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

                <a
                  href="https://www.instagram.com/rish_i__x?igsh=MW5kOXpjbTNzcGc3bw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-accent hover:bg-white/5 transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Card>

          {/* RIGHT: FORM */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {status.type && (
                <div
                  className={`p-4 rounded-lg border flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border-green-500/50 text-green-600 dark:text-green-400'
                      : 'bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-medium flex-1">{status.message}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
