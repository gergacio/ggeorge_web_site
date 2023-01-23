import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    color: red;
`
const LI = styled.li`
padding: 15px;
margin: 5px;
`
const Al = styled.a`
font-size: 1.5rem;
color: #bcbbb9;
text-decoration: none;
&:hover,
&:focus{
    color: #0072b1;
   
}
&:active{
    color: red;
`
const Ag = styled.a`
font-size: 1.5rem;
color: #bcbbb9;
text-decoration: none;
&:hover,
&:focus{
    color: #6e5494;
   
}
&:active{
    color: red;
`

const NavBar = () => {
  return (
        
    <UL>
      <LI>
        <StyledLink to="/">home</StyledLink>
      </LI>
      <LI>
        <StyledLink to="/about">about</StyledLink>
      </LI> 
      <LI>
        <StyledLink to="/work">work</StyledLink>
      </LI> 
      <LI>
       <Ag href="https://github.com/gergacio" target="_blank"><FontAwesomeIcon icon="fab fa-github" /></Ag>
      </LI> 
      <LI>
       <Al href="https://www.linkedin.com/in/georgi-georgiev-a07534ab/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Al>
      </LI> 
    </UL>
  );
}

export default NavBar;