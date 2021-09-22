import React from 'react';
import styled from 'styled-components';

const minHeight = "1024px";

const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 48px;
`;
const LineSeparator = styled.div`
     width: 100%;
     height: 2px;
     background: #E9EEF4;
`;

const Link = styled.a`
    margin: auto;
    padding: 4px;
    font-size: 14px;
    width: 20%;
    color: gray;
    border-right: 2px solid #E9EEF4;
    &:hover {
        transform: scale(1.2);
        transition: 1s;
    }

    @media (min-width: ${minHeight}) 
    {
        font-size: 16px;
        width: 200px;
    }

`;

const Login = styled.a`
    margin: auto;
    padding: 4px;
    width: 20%;

    font-size: 14px;
    color: hsla(216, 100%, 49.01960784313725%, 1);

    @media (min-width: ${minHeight}) 
    {
        font-size: 16px;
        width: 200px;
    }

    &:hover {
        transform: scale(1.2);
        transition: 1s;
        
    }
`;

const Titulo = styled.p`
    text-align: center;
    border-right: 2px solid #E9EEF4;
    font-size: 14px;
    color: gray;
    width: 20%;

    @media (min-width: ${minHeight}) 
    {
        font-size: 16px;
        width: 200px;
    }

`;
function NavBar() {


    return(
        <React.Fragment>
            <NavDiv>
                <Titulo> Ramen Rantaro </Titulo>
                <Link href='Inicio'>Inicio</Link>
                <Link href='Productos'>Productos</Link>
                <Link href='Delivery'>Delivery</Link>
                <Login href='Login'>Login</Login>
            </NavDiv>
            <LineSeparator/>
        </React.Fragment>
    );
}
export default NavBar;