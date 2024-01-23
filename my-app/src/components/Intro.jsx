import { motion} from "framer-motion";
import FancyButton from './FancyButton.jsx';

const Intro = () => {
    return (
        <motion.div
            className="intro-top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <div className='my-20 desktop:my-40 m-auto w-3/4'>
                <div className='intro-top'>
                <h1 className='font-accent text-4xl desktop:text-8xl'>Hi, I'm Chen</h1>
                <h2 className='text-2xl desktop:text-6xl'>A <strong className='text-accent'>frontend</strong> Engineer</h2>
                <h4 className='text-sm desktop:text-2xl'>Previously a lawyer, fashion marketer, financier, and entrepreneur</h4>
                </div>
                <div className='intro-bottom my-10 desktop:my-40'>
                <h2 className='text-2xl desktop:text-6xl'>With a huge passion for accessibility and design</h2>
                <FancyButton />
                </div>
            </div>
        </motion.div>
    );
};

export default Intro;
