import myResume from '../Resume_ChenShen_FrontendEngineer_Light_Final.pdf';
const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
const FancyButton = () => {
    return (
        <a href={myResume} download="Chen_Shen_Resume">
            <button className="fancy-button bg-gradient-to-r from-orange-900 to-orange-200 my-4 rounded-full shadow-lg">
                 <div className='group flex gap-x-2 bg-gradient-to-r from-dark to-primary -translate-x-1 -translate-y-1 px-6 py-2 rounded-full border-2 border-accent transition delay-50 duration-50 ease-out translate  active:translate-y-px active:translate-x-px shadow-2xl'>
                <span className='group-hover:animate-bounce group-active:animate-none'>{downloadIcon}</span>
                <span>Resume</span>
                </div>
            </button>
        </a>
    );
};

export default FancyButton;