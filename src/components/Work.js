import React from "react";
import styled from 'styled-components';
import LmsImage from "./LmsImage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);


// const Box = styled.div`
// margin-top:150px;
// display: flex;
// justify-content: space-between;
// align-items: center;
// min-height: 80vh;
// `
// const Div = styled.div`
// color: #38625b;
// padding: 20px;
// `
const Div = styled.div`
padding: 180px 15px 0px 15px;
color: #54555C;

display: grid;
@media (min-width: 550px) {
    grid-auto-rows: minmax(50px,auto);
    font-weight: 500;
    font-size: 1rem;
   
  }
  
   @media (min-width: 850px) {
    grid-template-columns: repeat(10,1fr);
    font-weight: 800;
    font-size: 1.4rem;
  }

`


const DivText = styled.div`
grid-column: 6/11;
grid-row: 1/2;
order: 1;
text-align: right;
`
const DivImg = styled.div`
grid-column: 1/6;
grid-row: 1/2;
`


const UL = styled.ul`
justify-content: flex-end;
list-style:none;
`
const A = styled.a`
color: #6e5494;
font-size: 2rem;
text-decoration: none;
&:hover,
&:focus{
    font-size: 2.5rem;
}
&:active{
    color: red;
`
const H = styled.h2`
color: #38625b;
font-size: 3rem;
font-weight: 900;
`
const Work = () => (
    <Div>
            <DivText>
          
                <H>PreslaVSystem is LMS </H> 
                <p>Simplify learning and gives confidence to its users.</p>
                <p><A href="https://github.com/gergacio/PreslaVSystem.git" target="_blank"><FontAwesomeIcon icon="fab fa-github" /> </A></p>
                <h2>Technologies used include:</h2>
                <UL>
                    <li>PostgreSQL 15</li>
                    <li>Java 19</li>
                    <li>Spring Boot 3.0</li>
                    <li>JUnit 5</li>
                    <li>HTML5, CSS3</li>
                    <li>React 18</li>
                    <li>CKEditor 5</li>
                    <li>Framer-motion 8.4.2</li>
                    <li>Visual Studio Code 1.72</li>
                    <li>Intellij IDEA 2022</li>
                </UL>
            </DivText>
            <DivImg><LmsImage /></DivImg>
      </Div>

 



);

export default Work;