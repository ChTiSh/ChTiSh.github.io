import ButtonGlow from './ButtonGlow';

//this is the navbar component for desktop view
const NavBar = () => {
    return (
        <div  className="hidden tablet:block " >
            <div className="logo nav-right flex justify-between align-middle desktop:text-xl">
                <ul className='flex text-base'>
                    <li className='px-5'><a href="#aboutme">About</a></li>
                    <li className='px-5'><a href="#projects">Projects</a></li>
                    <li className='px-5'><a href="#education">Education</a></li>
                    <li className='px-5'><a href="#contact">Contact</a></li>
                </ul>
                <div className="mode-switch desktop:text-base">
                    <ButtonGlow buttonText='Light' />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
