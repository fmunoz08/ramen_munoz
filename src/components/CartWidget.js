import React from "react";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styled from "styled-components";

const Number = styled.h4`
color: white;
`;
const Background = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


const CartWidget = ({Quantity}) => {

    return(

        <React.Fragment>
            <Background>
            <ShoppingCartIcon style={{fill:"white"}}/>
            <Number> {Quantity} </Number>
            </Background>
        </React.Fragment>
    );

}
export default CartWidget;