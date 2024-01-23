import ButtonSunGlow from './ButtonSunGlow';
import ButtonDarkGlow from './ButtonDarkGlow';
import { useContext } from 'react';
import { ThemeContext } from '../App';

//this is the navbar component for desktop view
const NavBar = () => {
    
    const { isLightMode, setMode } = useContext(ThemeContext);
    const sun = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:text-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
    const moon = <svg xmlns="http://www.w3.org/2000/svg" fill="#0F172A" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:text-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
  
    
    return (
        <div  className="hidden tablet:block " >
            <div className="logo nav-right flex justify-between align-middle desktop:text-xl">
                <ul className='flex text-sm pt-1 border-r px-2'>
                    <li className='px-5 hover:underline hover:decoration-accent decoration-solid underline-offset-4 decoration-4 hover:font-bold'><a href="#aboutme">About</a></li>
                    <li className='px-5 hover:underline hover:decoration-accent decoration-solid underline-offset-4 decoration-4 hover:font-bold'><a href="#projects">Projects</a></li>
                    <li className='px-5 hover:underline hover:decoration-accent decoration-solid underline-offset-4 decoration-4 hover:font-bold'><a href="#education">Education</a></li>
                    <li className='px-5 hover:underline hover:decoration-accent decoration-solid underline-offset-4 decoration-4 hover:font-bold'><a href="#contact">Contact</a></li>
                </ul>
                <div className="mode-switch desktop:text-base">
                    {!isLightMode ? 
                    <ButtonSunGlow buttonText='Light' icon={sun} onClick={setMode} />
                    :
                    <ButtonDarkGlow buttonText='Dark' icon={moon} onClick={setMode} />
                    }
                </div>
            </div>  
        </div>
    );
}

export default NavBar;
