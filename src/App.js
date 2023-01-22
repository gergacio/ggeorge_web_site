import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import styled from 'styled-components';
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";

//display parent as flex
const StyledRouter = styled.div`
display: flex;
flex-direction: column;
`

function App() {
  return (
    <Router>
      <StyledRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route exact path="/work" element={< Work />} />
          {/* <Route path="*" element={< ErrorPage />}/> */}
        </ Routes>
        {/* <Footer /> */}
      </StyledRouter>
    </Router>
  );
}

export default App;
