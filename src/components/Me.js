import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const image = require("../images/cv_photo.jpg");

const ItemImage = styled.img `
height: 450px;
margin: 20px;
padding:20px;
`
const Me = () => {
  

    return(
        <div>
             <Link><ItemImage src={image} alt="item"/></Link>          
        </div>
       
    );
}

export default Me;