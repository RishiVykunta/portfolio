import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Globe
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

  const EMAILJS_SERVICE_ID = (process.env.REACT_APP_EMAILJS_SERVICE_ID || '').trim();
  const EMAILJS_TEMPLATE_ID = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '').trim();
  const EMAILJS_PUBLIC_KEY = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '').trim();

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' && EMAILJS_PUBLIC_KEY !== '') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const isPlaceholder = (value) => {
        const placeholders = ['YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY', 'your_service_id_here', 'your_template_id_here', 'your_public_key_here', ''];
        return !value || placeholders.includes(value);
      };

      if (isPlaceholder(EMAILJS_SERVICE_ID) || isPlaceholder(EMAILJS_TEMPLATE_ID) || isPlaceholder(EMAILJS_PUBLIC_KEY)) {
        throw new Error('EmailJS is not configured. Please check your .env file.');
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'arasavillirishi0@gmail.com',
      }, EMAILJS_PUBLIC_KEY);

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ type: 'error', message: error.message || 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arasavillirishi0@gmail.com',
      color: 'from-blue-500 to-indigo-500',
      shadow: 'shadow-blue-500/30'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6300189945',
      color: 'from-emerald-500 to-teal-500',
      shadow: 'shadow-emerald-500/30'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Visakhapatnam, AP, India',
      color: 'from-orange-500 to-amber-500',
      shadow: 'shadow-orange-500/30'
    }
  ];

  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/RishiVykunta",
      label: "GitHub",
      color: "bg-[#181717] hover:shadow-[#181717]/40",
      iconColor: "text-white"
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/rishi-vykunta-1154a932b",
      label: "LinkedIn",
      color: "bg-[#0A66C2] hover:shadow-[#0A66C2]/40",
      iconColor: "text-white"
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/rish_i__x?igsh=MW5kOXpjbTNzcGc3bw==",
      label: "Instagram",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:shadow-[#ee2a7b]/40",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-indigo-50/30 dark:bg-background overflow-hidden relative">
      {/* Concentric Tunnel Decor */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-40 dark:opacity-50">
        <motion.svg 
          viewBox="0 0 800 800" 
          className="w-[150vw] h-[150vh] text-blue-900/50 dark:text-white/40"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: 1.2, rotate: 90 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        >
          {Array.from({ length: 35 }).map((_, i) => (
             <rect
               key={i}
               x={400 - (i * 12)}
               y={400 - (i * 12)}
               width={i * 24}
               height={i * 24}
               rx={i * 4}
               stroke="currentColor"
               strokeWidth="0.5"
               fill="none"
               transform={`rotate(${i * 2} 400 400)`}
             />
          ))}
        </motion.svg>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-16">

          {/* SECTION HEADER */}
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-indigo-500 font-mono text-sm tracking-widest uppercase"
            >
              <Globe className="w-4 h-4" />
              <span>04. Contact</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Get In <span className="text-gradient">Touch.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Let's craft something remarkable together.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">

            {/* LEFT: CONTACT INFO */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="p-5 glass-card border-none hover:bg-white/5 transition-all duration-500 group overflow-hidden relative">
                      <div className="flex items-center gap-5 relative z-10">
                        <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${detail.color} text-white shadow-xl ${detail.shadow} group-hover:scale-105 transition-transform duration-500`}>
                          <detail.icon size={22} />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400/80">{detail.label}</p>
                          <p className="font-bold text-base tracking-tight text-foreground/90 leading-tight">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                      <div className="absolute -right-2 -bottom-2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 scale-125">
                        <detail.icon size={80} />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 glass-card border-none bg-indigo-500/5 rounded-[2.5rem] relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20" />
                <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] mb-10 text-center">Social Matrix</p>
                <div className="flex justify-center gap-6">
                  {socialLinks.map(({ Icon, href, color, iconColor, label }, idx) => (
                    <motion.a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -8, scale: 1.1 }}
                      className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shadow-2xl transition-all duration-300 relative group/icon`}
                      title={label}
                    >
                      <Icon size={22} className={`${iconColor} transition-transform group-hover/icon:scale-110`} />
                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT: FORM */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-10 glass-card border-none rounded-[2.5rem]">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-5 rounded-2xl border flex items-start gap-4 ${status.type === 'success'
                        ? 'bg-green-500/10 border-green-500/30 text-green-700'
                        : 'bg-red-500/10 border-red-500/30 text-red-700'
                        }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-6 w-6 flex-shrink-0" />
                      )}
                      <p className="text-sm font-bold leading-tight">{status.message}</p>
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</Label>
                      <Input
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="h-14 rounded-2xl glass-card border-none bg-indigo-500/5 focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-lg px-6"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="h-14 rounded-2xl glass-card border-none bg-indigo-500/5 focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-lg px-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Your Message</Label>
                    <Textarea
                      name="message"
                      rows={5}
                      placeholder="Share your vision..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="rounded-[2rem] glass-card border-none bg-indigo-500/5 focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-lg p-6 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-16 rounded-[2rem] bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-95 group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : (
                      <>
                        <span>Beam Message</span>
                        <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
