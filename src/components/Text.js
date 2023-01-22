import React from "react";
import styled from 'styled-components';


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
const PG = styled.span`
color:  #008c00;
font-weight: 450;
`
const PR = styled.span`
color:  #F50519;
font-weight: 450;
`

const Text = () => {
  

    return(
        <LogoHeading> 
            <p>Hello, I am Georgi<PW>.</PW></p>
            <p>I am just a coder<PW>.</PW><PG>.</PG><PR>.</PR></p>
        </LogoHeading>
       
    );
}

export default Text;