import React from "react";
import { motion } from "framer-motion";
import Text from "./Text";



//destructure motion

const spintransition = {
    // loop: Infinity,
    duration: 4
}

 const TextLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
            <motion.div  
            animate={{y:50,x:0, scale:1.1}}
            initial={{scale:0}}
            transition={spintransition}
            >
            {<Text />}
            </motion.div>


    );
 };
export default TextLogo;