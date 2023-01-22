import React from "react";
import styled from 'styled-components';
import TextLogo from "./TextLogo";


const Box = styled.div`
margin-top:100px;
min-height: 100vh;
width: 100vw;
background-color: black;
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