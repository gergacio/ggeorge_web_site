import React from "react";
import styled from 'styled-components';
import DotLogo from "./DotLogo";



const LogoHeading = styled.h4`
font-size: clamp(3rem,5vw,7vw);
color: #F4F4F4;
font-weight: 800;
padding: 20px;
margin: 20px;
`
const PW = styled.span`
color:  white;
font-weight: 450;
`


const Text = () => {
  

    return(
        <LogoHeading> 
            
            <p>Hello, I am Georgi<PW>.</PW></p>
            <p>Passionate DevOps/Web Developer<PW>.</PW></p>
        </LogoHeading>
       
    );
}

export default Text;