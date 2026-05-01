import { Hero } from './components/Hero';
import { About } from './components/About';
import { PersonalDevelopment } from './components/PersonalDevelopment';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Linkedin, Github } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Hero />
      <About />
      <PersonalDevelopment />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="py-10 text-center text-muted-foreground">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.linkedin.com/in/YOUR-USERNAME" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} className="hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} className="hover:text-primary transition-colors" />
          </a>
        </div>
        &copy; {new Date().getFullYear()} S. Lakshmidhar Reddy. All rights reserved.
      </footer>
    </div>
  );
}

