import React from "react";
import { motion } from "framer-motion";
import Dot from "./Dot";



//destructure motion

const spintransition = {
    // loop: Infinity,
    duration: 3
}

 const DotLogo = () => {
    // const [ rotate, setRotate ] = useState(false);
    return(
            <motion.div  
            animate={{y:0,x:60, scale:1.2}}
            initial={{scale:0.0}}
            transition={spintransition}
            >
            {<Dot />}
            </motion.div>


    );
 };
export default DotLogo;