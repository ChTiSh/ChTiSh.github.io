const ButtonGlow = ({buttonText}) => {
    return (
        <div className='relative group cursor-pointer mx-2'>
            <div class='absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative bg-dark ring-2 px-6 py-1 ring-gray-900/5 rounded-full leading-none flex items-top justify-start space-x-6'>
                <button className='text-sm'>{buttonText}</button>
            </div>
        </div>
    );
};

export default ButtonGlow;
