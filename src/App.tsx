/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Instagram, 
  ArrowUpRight,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

// --- Configuration ---
const CORRECT_PASSWORD = "DESIGNER_PRO"; // Change this to your desired password

const PROJECTS = [
  {
    id: 1,
    title: "EcoFlow Smart Home",
    category: "Experience Design / IoT",
    image: "https://picsum.photos/seed/design1/1200/900",
    video: "https://assets.mixkit.co/videos/preview/mixkit-smart-home-interface-on-a-tablet-40430-large.mp4",
    stat: "40% Energy Saved",
    description: "A seamless ecosystem for managing renewable energy in modern homes."
  },
  {
    id: 2,
    title: "Luxe Travel Concierge",
    category: "Service Design / Mobile App",
    image: "https://picsum.photos/seed/design2/1200/900",
    video: "https://assets.mixkit.co/videos/preview/mixkit-person-using-a-travel-app-on-a-smartphone-40432-large.mp4",
    stat: "98% User Satisfaction",
    description: "Redefining high-end travel experiences through AI-driven personalization."
  },
  {
    id: 3,
    title: "Fintech Dashboard 2.0",
    category: "UI Design / Data Viz",
    image: "https://picsum.photos/seed/design3/1200/900",
    video: "https://assets.mixkit.co/videos/preview/mixkit-financial-charts-on-a-computer-screen-40431-large.mp4",
    stat: "2.5s Avg. Load Time",
    description: "Simplifying complex financial data for institutional investors."
  },
  {
    id: 4,
    title: "HealthTrack Wearable",
    category: "Product Strategy / UX",
    image: "https://picsum.photos/seed/design4/1200/900",
    video: "https://assets.mixkit.co/videos/preview/mixkit-smart-watch-on-a-persons-wrist-40433-large.mp4",
    stat: "15k Daily Active Users",
    description: "Bridging the gap between physical health and digital insights."
  }
];

// --- Components ---

const PasswordGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
      setPassword("");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-white px-6"
    >
      <div className="w-full max-w-md text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Lock className="w-10 h-10 mx-auto mb-8 text-white/40" />
          <h1 className="text-2xl font-light tracking-widest uppercase mb-12">Private Portfolio</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Access Code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`password-input ${error ? 'border-red-500 text-red-500' : ''}`}
                autoFocus
              />
              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -bottom-8 left-0 right-0 text-sm text-red-500/80"
                >
                  Incorrect code. Please try again.
                </motion.p>
              )}
            </div>
            
            <button 
              type="submit"
              className="group flex items-center justify-center gap-2 mx-auto text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors pt-4"
            >
              Unlock Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
        
        <div className="fixed bottom-12 left-0 right-0 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            © 2026 Portfolio Access Restricted
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tighter">
          ALEX<span className="font-light text-black/40">CHEN</span>
        </a>
        
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-tight">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-black/40 mb-6">
          Senior Experience Designer
        </span>
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-12 max-w-4xl">
          Crafting digital <br />
          <span className="italic font-serif text-accent">narratives</span> that <br />
          resonate.
        </h1>
        <p className="text-xl md:text-2xl text-black/60 max-w-2xl leading-relaxed font-light">
          I bridge the gap between human needs and technological possibilities through 
          intentional design and strategic thinking.
        </p>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const greyProjects = PROJECTS.slice(0, 2);
  const blackProjects = PROJECTS.slice(2, 4);

  return (
    <section id="work">
      {/* Part 1: Grey Background Section */}
      <div className="bg-grey-bg py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-black/40 mb-4">Selected Works</h2>
              <p className="text-3xl font-light">Digital Experiences</p>
            </div>
            <div className="hidden md:block text-sm text-black/40 italic font-serif">
              Phase 01
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {greyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="portfolio-card mb-8 group relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-image group-hover:opacity-0 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="text-center space-y-6 px-8">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Key Impact</p>
                        <p className="text-2xl font-medium text-white tracking-tight">{project.stat}</p>
                      </div>
                      <button className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105">
                        View Case Study
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
                    <span className="text-xs font-medium text-black/30 uppercase tracking-widest">{project.category}</span>
                  </div>
                  <p className="text-black/50 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 2: Black Background Section */}
      <div className="bg-black py-32 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">Innovation Lab</h2>
              <p className="text-3xl font-light">Strategic Solutions</p>
            </div>
            <div className="hidden md:block text-sm text-white/40 italic font-serif">
              Phase 02
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {blackProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="portfolio-card mb-8 group relative bg-white/5 border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-image group-hover:opacity-0 transition-opacity duration-500 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="text-center space-y-6 px-8">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Key Impact</p>
                        <p className="text-2xl font-medium text-white tracking-tight">{project.stat}</p>
                      </div>
                      <button className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105">
                        View Case Study
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-medium tracking-tight text-white">{project.title}</h3>
                    <span className="text-xs font-medium text-white/30 uppercase tracking-widest">{project.category}</span>
                  </div>
                  <p className="text-white/50 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://picsum.photos/seed/profile/800/1000" 
            alt="Profile" 
            className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-black/40">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Design is not just how it looks, but how it <span className="italic font-serif">feels</span>.
          </h3>
          <div className="space-y-6 text-lg text-black/60 font-light leading-relaxed">
            <p>
              With over 8 years of experience in the design industry, I've had the privilege of working with 
              global brands to solve complex problems through user-centric design.
            </p>
            <p>
              My approach combines rigorous research with creative intuition, ensuring that every pixel 
              serves a purpose and every interaction adds value.
            </p>
          </div>
          
          <div className="pt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2">Expertise</p>
              <ul className="text-sm space-y-1 text-black/50">
                <li>Experience Strategy</li>
                <li>Product Design</li>
                <li>Design Systems</li>
                <li>Service Design</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2">Clients</p>
              <ul className="text-sm space-y-1 text-black/50">
                <li>Apple</li>
                <li>Airbnb</li>
                <li>Stripe</li>
                <li>Nike</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-48 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-black/40 mb-12">Get in Touch</h2>
        <a 
          href="mailto:hello@alexchen.design" 
          className="text-4xl md:text-7xl font-medium tracking-tighter hover:text-accent transition-colors duration-500 block mb-16"
        >
          hello@alexchen.design
        </a>
        
        <div className="flex justify-center gap-12">
          <a href="#" className="group flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-black/40 hover:text-black transition-colors">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a href="#" className="group flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-black/40 hover:text-black transition-colors">
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-black/30">
          © 2026 Alex Chen — All Rights Reserved
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-black/30">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Check if already unlocked in this session
  useEffect(() => {
    const unlocked = sessionStorage.getItem('portfolio_unlocked');
    if (unlocked === 'true') setIsUnlocked(true);
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    sessionStorage.setItem('portfolio_unlocked', 'true');
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <PasswordGate key="gate" onUnlock={handleUnlock} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            
            {/* Smooth Scroll Utility */}
            <style dangerouslySetInnerHTML={{ __html: `
              html { scroll-behavior: smooth; }
            `}} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
