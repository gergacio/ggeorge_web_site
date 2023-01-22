import React from "react";
import styled from 'styled-components';
import NavBar from "./NavBar";



const Box = styled.div`
color: #38625b;
background-color: black;
height: 130px;
display: flex;
flex-direction:row; 
justify-content: end;
align-items: end;
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