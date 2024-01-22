//this sidebar will only appear on mobile devices if user clicks on the hamburger icon
const SideBar = () => {
    return (
        <div className='py-20'>
            <ul className=''>
              <li><a href="#aboutme">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="mode-switch">
              <button>Light</button>
            </div>
        </div>
    );
};

export default SideBar;
