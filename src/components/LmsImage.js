import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const image = require("../images/lms.png");

const ItemImage = styled.img `

width: 100%;
height: auto;
`
const LmsImage = () => {
  

    return(
        <div>
             <Link><ItemImage src={image} alt="item"/></Link>          
        </div>
       
    );
}

export default LmsImage;