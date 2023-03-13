import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DotLogo from "./DotLogo";

library.add(fas, fab);

const UL = styled.ul`

display: flex;
justify-content: space-between;
list-style:none;

`



const StyledLink = styled(Link)`
color: #bcbbb9;
text-decoration: none;
font-size: 22px;
font-family: "Open Sans";
font-weight: 800;
&:hover,
&:focus{
    color: white;
}
&:active{
    color: #E05915;
`
const LI = styled.li`
padding: 15px;
margin: 5px;
`
const Al = styled.a`
font-size: 2rem;
color: #bcbbb9;
text-decoration: none;
&:hover,
&:focus{
    color: #0072b1; 
    background-color: white;
}
&:active{
    color: #E05915;
`
const Ag = styled.a`
font-size: 2rem;
color: #bcbbb9;
text-decoration: none;
&:hover,
&:focus{
    color: #552084;
    background-color: white;
   
}
&:active{
    color: #E05915;
`

const NavBar = () => {
  return (
    <>
    {/* <DotLogo/> */}
    <UL>
      <LI>
        <StyledLink to="/">home</StyledLink>
      </LI>
      <LI>
        <StyledLink to="/about">about</StyledLink>
      </LI> 
      {/* <LI>
        <StyledLink to="/work">work</StyledLink>
      </LI>  */}
      <LI>
       <Ag href="https://github.com/gergacio" target="_blank"><FontAwesomeIcon icon="fab fa-github" /></Ag>
      </LI> 
      <LI>
       <Al href="https://www.linkedin.com/in/georgi-georgiev-a07534ab/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Al>
      </LI> 
    </UL>
    </>    

  );
}

export default NavBar;