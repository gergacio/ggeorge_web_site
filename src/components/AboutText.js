import React from "react";
import styled from 'styled-components';


const LogoHeading = styled.h4`
font-size: clamp(1rem,3vw,5vw);
color:black;
font-weight:100;
padding: 20px;
margin: 20px;
`

const AboutText = () => {
  

    return(
        <LogoHeading> 
            <p>Why, hello there!</p>
            <p></p>
            <p>I am a spiritual book reader</p>
            <p>I am a empathetic listener </p>
        </LogoHeading>
       
    );
}

export default AboutText;