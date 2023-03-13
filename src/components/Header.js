import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar";
import DotLogo from "./DotLogo";



const Box = styled.div`
color: #38625b;
background-color: #323639;
height: 130px;
display: flex;
flex-direction:row; 
justify-content: start;
align-items: center;
position:fixed;
top:0;
width: 100%;
margin-bottom: -40px;

`


const Header = () => {
    return(
         <Box> 
            <NavBar />
        </Box>   
    );
}

export default Header;