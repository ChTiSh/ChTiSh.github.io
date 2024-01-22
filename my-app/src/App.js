import './App.css';
import FeaturedProject from './components/FeaturedProject.jsx';
import ContactCard from './components/ContactCard.jsx';
import { useEffect, useState } from 'react';
import AboutMe from './components/AboutMe.jsx';
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
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
    <div className="App">
      {/* The <header> element shows the navigation or the opening part of the web page. */}
      <header className="App-header">
        <nav className="App-nav flex justify-between sticky top-0 h-12 bg-dark items-center">
          <div className="logo nav-left">
            <a href="#home"><button className='font-logo text-2xl'>C.Shen</button></a>
          </div>
          
          <NavBar />
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
      <main className="App-main">
        <section id='home'>
          <div className='my-20 desktop:my-40 m-auto w-3/4'>
            <div className='intro-top'>
              <h1 className='font-accent text-4xl desktop:text-8xl'>Hi, I'm Chen</h1>
              <h2 className='text-2xl desktop:text-6xl'>A <strong className='text-accent'>frontend</strong> Engineer</h2>
              <h4 className='text-sm desktop:text-2xl'>Previously a lawyer, fashion marketer, financier, and entrepreneur</h4>
            </div>
            <div className='intro-bottom my-10 desktop:my-40'>
              <h2 className='text-2xl desktop:text-6xl'>With a huge passion for accessibility and design</h2>
              <button>Resume</button>
            </div>
          </div>
        </section>
        <section id='aboutme'>
        <svg width="100vw" height="100vw" viewBox="0 0 1214 721" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L1214 6.10352e-05V720.521L0 472.718V0Z" fill="#332C44"/>
        </svg>


          <img src='https://via.placeholder.com/150' alt='profile picture' />
          <AboutMe />
          <h2>About Me</h2>
          <p>lorem ipsum terja aquafaba. Maktig fotogyn emfoni. Anajörårade diting. Mytoskop ärad. Icke-binär preren: om nyhetsundvikare saguheten. </p>
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
  );
}

export default App;
