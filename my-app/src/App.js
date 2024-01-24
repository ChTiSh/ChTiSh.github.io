import './App.css';
import FeaturedProject from './components/FeaturedProject.jsx';
import ContactCard from './components/ContactCard.jsx';
import { useEffect, useState, createContext } from 'react';
import AboutMe from './components/AboutMe.jsx';
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import Intro from './components/Intro.jsx';


export const ThemeContext = createContext();
  
function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }
  
  const [isLightMode, setLightMode] = useState(false);
  const setMode = () => {
    setLightMode(!isLightMode);
    console.log('button is clicked')
}

  //placeholder for intersection observer
  useEffect(() => {
    // Create a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    });
  
    // Select the elements to be observed
    const elements = document.querySelectorAll('.yourElementSelector');
    elements.forEach(element => {
      observer.observe(element);
    });
  
    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []); 

  return (
    <ThemeContext.Provider value={{isLightMode, setMode}}>
    <div className="App">
      <div id='pageTop'></div>
      {/* The <header> element shows the navigation or the opening part of the web page. */}
      <header className="App-header sticky top-0 bg-dark">
        <nav className="App-nav flex justify-end h-12 items-center">
          <div className="absolute logo nav-left -left-4 w-46 shadow-inner rounded-full bg-gradient-to-r from-black to-primary">
            <a href="#pageTop"><button className='font-logo text-2xl px-8 py-1 hover:transition hover:duration-1000 ease-in-out hover:text-accent'><strong className='text-accent'>C</strong>hen <strong className='text-accent'>S</strong>hen</button></a>
          </div>
          <NavBar/>
          { isSideBarOpen ?
            <SideBar /> : 
            <button className="tablet:hidden nav-right" onClick={toggleSideBar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </button>
          }
        </nav>
      </header>
      
      {/* The <main> element contains the main content of the web page. */}
      <main className="App-main" id='home'>
        <section id='intro' >
          <Intro />
        </section>
        <section id='aboutme'>
          <div className='relative mt-40'>
            <div className='w-full -z-10'>
              <svg width="100%" height="100%" viewBox="0 0 1214 721" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L1214 6.10352e-05V720.521L0 472.718V0Z" fill="#332C44"/>
              </svg>  
            </div>
            <AboutMe className='absolute w-full z-10'/>
          </div>
        </section>
        <section id='projects'>

          {/* This section will benefit from lazy loading images. */}
          <h2>Projects</h2>
          <div className='keyProjects'>
            <FeaturedProject />
          </div>
          
        </section>
        <section id='education'>
          <h2>Education</h2>
          <div className='education-certification'>
            <h4>Certifications</h4>
          </div>
        </section>
        <section id='contact'>
          <h2>Contact</h2>
          <div className='social-media-contact'>
            <ul>
              <li><a href="https://www.linkedin.com/in/chentshen/">Linkedin</a></li>
              <li><a href="https://github.com/ChTiSh">Github</a></li>
              <li>Send me an email<icon>arrow</icon></li>
            </ul>
          </div>
          <div>
            <ContactCard />
          </div>
        </section>
      </main>

      {/* The <footer> element shows the footer or the closing part of the web page. */}
      <footer className="App-footer">
      <svg width="100vw" height="50vw" viewBox="0 0 1204 483" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1204 0.5L0 163V592H1204V0.5Z" fill="#332C44"/>
</svg>

        <div className="footer-left displayJoke">
          <div>Here is a Joke retrieved from api</div>
        </div>
        <div className="footer-right getJoke">
          <h4>Having a tough day?</h4>
          <p>Take a short break</p>
          <p>Enjoy a joke</p>
          <button>Get a joke</button>
        </div>
        <div className='copyright'>
          <p>© 2024 Chen Shen</p>
          <p>Designed with Figma, built with React and TailwindCSS.</p>
        </div>
      </footer>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
