const ButtonSunGlow = ({buttonText, icon, onClick}) => {
    return (
        <div className='relative group cursor-pointer mx-8'>
            <div class='absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative bg-dark hover:bg-primary ring-2 px-4 py-1 ring-gray-900/5 rounded-full border-2 border-warning/[.70] hover:border-accent/[0.7] leading-none flex items-top justify-start '>
                <button className='text-xs flex gap-x-2 items-center' onClick={onClick}>
                   {icon}{buttonText}
                </button>
            </div>
        </div>  
    );
};

export default ButtonSunGlow;
