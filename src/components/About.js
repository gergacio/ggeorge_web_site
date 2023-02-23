import React from "react";
import styled from 'styled-components';




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
padding: 5px;
background-color: #ffff00;
color: #54555C;
grid-column: 6/11;
grid-row: 1/2;
font-weight: 500;
`
const DivText = styled.div`
padding: 5px;
background-color: #1f2022;
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
padding: 5px;
background-color: #fff;
color: #54555C;
grid-column: 1/8;
grid-row: 2/2;
order: 2;
text-align: left;
font-weight: 500;
`
const EduDiv = styled.div`
padding: 5px;
background-color: #999999;
color: white;
grid-column: 8/11;
grid-row: 2/2;
font-weight: 500;
`
const About = () => (

        <Article>
            <DivImg>  
                <h2>Tech Stack</h2>
                <UL>
                    <li>OS (MacOS 12.6,  Windows 10)</li> 
                    <br/>
                    <li>Code Editor/IDEs (Visual Studio Code 1.72,  Intellij IDEA 2022)</li>
                    <br/>
                    <li>Text editors (VIM, Notepad++)</li>
                    <br/>  
                    <li>Databases (PostgreSQL 15, MongoDB 6.0, H2 2.1.214)</li>
                    <br/>
                    <li>Programming Languages (JavaScript 18, Java 19)</li>
                    <br/>
                    <li>Server-side Web Frameworks (Express 4.18.1, Spring Boot 3.0)</li>  
                    <br/>            
                    <li>Front-end Technologies (HTML5, CSS3, JS, React 18)</li>   
                    <br/> 
                    <li>UI design (Ant Design)</li>    
                    <br />  
                    <li>Animation Tools (Framer Motion 9.1.1)</li> 
                    <br />
                    <li>Testing Frameworks (Jest, JUnit 5)</li> 
                    <br/>
                    <li>Code Management Tools (Git, GitHub)</li>
                    <br />
                    <li>Cloud Computing (AWS)</li> 
                    <br />
                    <li>Containers (Docker)</li> 
                    <br />
                    <li>SDLC (Agile)</li>            
                </UL>
              </DivImg>
            <DivText>
  
                <h2>Education</h2>
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
            <h2>Future plans</h2>
              <p>Start clarinet lessons.</p>
            </EduDiv>
            <HobbyDiv>
            <h2>Things I am doing</h2>
            <p> 
               I am a live music lover.
            </p>
            <p>
               I really enjoy listening bass opera singers and Bulgarian folk music.
            </p>
            </HobbyDiv>
          
        </Article>
     

);

export default About;