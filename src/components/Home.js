import React from "react";
import styled from 'styled-components';
import TextLogo from "./TextLogo";
import DotLogo from "./DotLogo";


const Box = styled.div`
margin-top:100px;
min-height: 100vh;
width: 100vw;
background-color: #1f2022;
display: flex;
flex-direction:column; 
justify-content: center;
align-items: center;
`

const Home = () => (
  <Box>
    
     <TextLogo /> 
    
  </Box>
);

export default Home;