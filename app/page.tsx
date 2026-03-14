import Start from './components/sections/Start';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layouts/Footer';

export default function Home() {
  return (
    <div>

      <Start/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}
