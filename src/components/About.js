import React from "react";
import styled from 'styled-components';
import LmsImage from "./LmsImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




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


const Article = styled.article`
padding: 180px 15px 0px 15px;
background-color: #f4f4f4;
// background-color: #C2DDE6;
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
const DivImg = styled.div`
padding: 1rem;

background-color: #C2DDE6;
color: #black;
grid-column: 6/11;
grid-row: 1/2;
font-weight: 500;
padding: 1rem;
`
const DivText = styled.div`
padding: 1rem;

background-color: #E05915;
color: white;
grid-column: 1/6;
grid-row: 1/2;
order: 2;
text-align: left;
font-weight: 500;
`
const UL = styled.ul`
justify-content: flex-end;
list-style:none;
`
const HobbyDiv = styled.div`
padding: 1rem;

background-color: #431C5D;
color: white;
grid-column: 1/6;
grid-row: 2/2;
order: 2;
text-align: left;
font-weight: 500;
`
const EduDiv = styled.div`
padding: 1rem;
background-color: #12B486;
color: #black;
grid-column: 6/11;
grid-row: 2/2;
font-weight: 500;
`
const Work = styled.div`
padding: 1rem;
background-color: #CDD422;
color: #black;
grid-column: 1/11;
grid-row: 3/3;
font-weight: 800;
font-size: 2rem;
`
const Ag = styled.a`
font-size: 2.5rem;
color: #bcbbb9;
text-decoration: none;
background-color: white;
&:hover,
&:focus{
    color: #552084;
    background-color: white;
   
}
&:active{
    color: #E05915;
`
const About = () => (

        <Article>
            <DivImg>  
            <br></br>
                <h2>Tech Stack</h2>
                <hr/>
                <UL>
                    <br/>
                    <li>Code Editor/IDE ( Visual Studio Code | Intellij IDEA )</li>
                    <br/>
                    <li>Text editors ( VIM | Notepad++ )</li>
                    <br/>  
                    <li>Databases ( PostgreSQL | MongoDB | H2 )</li>
                    <br/>
                    <li>Programming Languages ( Python | JavaScript | C# | Java )</li>
                    <br/>            
                    <li>Front-end Technologies ( React | Ant Design | Framer Motion)</li>   
                    <br/>
                    <li>Web Frameworks ( Django | Express | Spring Boot )</li>  
                    <br/>
                    <li>Testing Frameworks ( Jest | JUnit 5 )</li> 
                    <br/>
                    <li>Code Management Tools ( Git | GitHub )</li>
                    <br />
                    <li>Cloud Computing ( AWS )</li> 
                    <br />
                    <li>Containers ( Docker )</li> 
                    <br />
                    <li>SDLC ( Agile )</li>            
                </UL>
              </DivImg>
            <DivText>
             <br></br>
                <h2>Education</h2>
                <br></br>
                <br></br>
                <UL>
                    <li>Industrial Engineering at Technical University of Gabrovo.</li>
                    <br/>
                    <br/>
                    <li>Computer Systems at Telematika College.</li>
                    <br/>
                    <br/>
                    <li>Software Development SCQF Level 8 at CodeClan.</li>
                    <br/>
                    <br/>
                    <li>Functional Programming with JavaScript at SoftUni.</li>
                    <br/>
                    <br/>
                    <li>Routing and Switching at Cisco Academy®. </li>
                </UL>

            </DivText>
            <EduDiv>
            <br></br>
            <h2>Future Plans</h2>
            <p> 
            Start learning clarinet.
            </p>
           
            </EduDiv>
            <HobbyDiv>
            <br></br>
            <h2>Things I am doing</h2>
            <p> 
               I am a live music lover.
            </p>
            <p>
               I really enjoy listening bass opera singers and Bulgarian folk music.
            </p>
            </HobbyDiv>
            <Work>
            <br></br>
            <h1><strong>WORK</strong><span>  <Ag href="https://github.com/gergacio/In7Minutes." target="_blank"><FontAwesomeIcon icon="fab fa-github" /></Ag></span></h1>
            <hr/>
            <br></br>
            <br></br>
              <LmsImage/>
              
            </Work>
          
        </Article>
     

);

export default About;