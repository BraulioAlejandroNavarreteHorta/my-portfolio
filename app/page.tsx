import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0a192f]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
} 