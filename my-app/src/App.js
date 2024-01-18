import './App.css';
import FeaturedProject from './components/FeaturedProject.jsx';
import ContactCard from './components/ContactCard.jsx';

function App() {
  return (
    <div className="App">
      {/* The <header> element shows the navigation or the opening part of the web page. */}
      <header className="App-header">
        <nav className="App-nav flex justify-between">
          <div className="logo nav-left">
            <a href="#home"><button className='font-logo text-2xl'>C.Shen</button></a>
          </div>
          <div className="logo nav-right flex justify-evenly">
            <ul className='flex justify-evenly'>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="mode-switch">
              <button>Light</button>
            </div>
          </div>
        </nav>
      </header>

      {/* The <main> element contains the main content of the web page. */}
      <main className="App-main">
        <section id='home'>
          <div className='my-40 mx-40'>
            <div className='intro-top'>
              <h1 className='font-accent text-8xl'>Hi, I'm Chen</h1>
              <h2 className='text-6xl'>A <strong className='text-accent'>frontend</strong> Engineer</h2>
              <h4 className='text-2xl'>Previously a lawyer, fashion marketer, financier, and entrepreneur</h4>
            </div>
            <div className='intro-bottom my-40'>
              <h2 className='text-6xl'>With a huge passion for accessibility and design</h2>
              <button>Resume</button>
            </div>
          </div>
        </section>
        <section id='aboutme'>
        <svg width="100vw" height="100vw" viewBox="0 0 1214 721" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L1214 6.10352e-05V720.521L0 472.718V0Z" fill="#332C44"/>
        </svg>


          <img src='https://via.placeholder.com/150' alt='profile picture' />
          <h2>About Me</h2>
          <p>lorem ipsum terja aquafaba. Maktig fotogyn emfoni. Anajörårade diting. Mytoskop ärad. Icke-binär preren: om nyhetsundvikare saguheten. </p>
        </section>
        <section id='projects'>
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
