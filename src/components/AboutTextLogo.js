import React from "react";
import { motion } from "framer-motion";
import AboutText from "./AboutText";



//destructure motion

const spintransition = {
    loop: Infinity,
    duration: 1
}

 const AboutTextLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
            <motion.div  
            animate={{x:-220, scale:1}}
            initial={{scale:1}}
            transition={spintransition}
            >
            {<AboutText />}
            </motion.div>


    );
 };
export default AboutTextLogo;