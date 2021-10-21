import React from "react";
import { useEffect } from "react";

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


function CartWidget({ Quantity }) {

    useEffect(() => {
        console.log("Holis");

    }, []);

    return (

        <React.Fragment>
            <Background>
                <ShoppingCartIcon style={{ fill: "white" }} />
                <Number> {Quantity} </Number>
                <p>Pagar</p>
            </Background>
        </React.Fragment>
    );

}
export default CartWidget;