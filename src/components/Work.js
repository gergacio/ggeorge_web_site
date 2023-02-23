import React from "react";
import styled from 'styled-components';
import LmsImage from "./LmsImage";
import LmsImageApi from "./LmsImageApi";
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
grid-auto-rows: minmax(50px,auto);
font-weight: 500;
font-size: 1.4rem;
@media (max-width: 550px) {
    font-size: 1rem;
   
  }
  
   @media (min-width: 850px) {
    grid-template-columns: repeat(10,1fr);
    font-weight: 800;
    font-size: 1.4rem;
  }

`


const DivText1 = styled.div`
grid-column: 6/11;
grid-row: 2/2;
order: 1;
text-align: right;
`
const DivText2 = styled.div`
grid-column: 6/11;
grid-row: 1/2;
order: 1;
text-align: right;
`
const DivImg1 = styled.div`
grid-column: 1/6;
grid-row: 2/2;
`
const DivImg2 = styled.div`
grid-column: 1/6;
grid-row: 1/2;
`


const UL = styled.ul`
justify-content: flex-end;
list-style:none;
`
const A = styled.a`
color: #bcbbb9;
font-size: 2rem;
text-decoration: none;
&:hover,
&:focus{
    
    color: #552084;
    background-color: white;
}
&:active{
    color: red;
`
const A1 = styled.a`
color: #bcbbb9;
font-size: 1.5rem;
text-decoration: none;
&:hover,
&:focus{
    
    color: #552084;
    background-color: white;
}
&:active{
    color: red;
`
const H = styled.h2`
color: #38625b;
font-size: 2rem;
font-weight: 900;
`
const Work = () => (
    <Div>
      <DivText2>
          
          <H>InSevenMinutesClient</H> 
          {/* <h3>Simplify learning and gives confidence to its users</h3> */}
          <h3>
             Tools and technologies used</h3>
          <UL>
              <li>Visual Studio Code 1.72</li>
              <li>HTML5, CSS3, React 18</li>
              <li>Framer-motion 8.4.2</li>
              <li>CKEditor 5</li>    
          </UL>
          <p>source code <A href="https://github.com/gergacio/preslaVSystemClient.git" target="_blank"><FontAwesomeIcon icon="fab fa-github" /> </A></p>

      </DivText2>
      <DivImg2><LmsImage /></DivImg2>
            <DivText1>
          
                <H>InSevenMinutesAPI</H> 
                {/* <h3>Simplify learning and gives confidence to its users</h3> */}
                <h3>
                   Tools and technologies used</h3>
                <UL>
                    <li>Intellij IDEA 2022</li>
                    <li>PostgreSQL 15</li>
                    <li>Spring Boot 3.0</li>
                </UL>
                <p>source code <A href="https://github.com/gergacio/preslaVSystemApi.git" target="_blank"><FontAwesomeIcon icon="fab fa-github" /> </A></p>

            </DivText1>
            <DivImg1><LmsImageApi /></DivImg1>

 
      </Div>

 



);

export default Work;