import React from 'react';
import styled from "styled-components";

const Header = () =>{
    return(
        <MainContainer>
            <h1>BitWize <br/>
                Development
            </h1>
        </MainContainer>
    )
}

export default Header;

// Main Container

const MainContainer = styled.header`
    background: url(../../Images/bodyBitwize.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    height: 20rem;
    padding:10px 0;
    
    h1{
         transform: transalate(-50%,-50%);
         color: black;
         font-weight: 900;
         font-size: 3vw;
         position: absolute;
         top: 20%;
         left: 50%;
    }
`;