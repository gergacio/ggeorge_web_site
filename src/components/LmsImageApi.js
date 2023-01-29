import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
const image = require("../images/in7minApi.png");

const ItemImage = styled.img `

width: 80%;
height: auto;
padding:20px;
margin-rigth:40px
`
const LmsImageApi = () => {
  

    return(
        <div>
             <Link><ItemImage src={image} alt="item"/></Link>          
        </div>
       
    );
}

export default LmsImageApi;