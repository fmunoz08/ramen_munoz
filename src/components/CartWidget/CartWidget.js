import React from "react";
import { useEffect, useContext } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../CartContext";
import styled from "styled-components";

const Number = styled.h4`
  color: white;
`;
const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function CartWidget({cart}) {


    let quantity = 0;
        cart.map((item) => {
            quantity = item.quantity + quantity;
        })

    useEffect(() => {console.log("me actualice"); }, [cart]);

    return (
        <React.Fragment>
            <Background>
                <ShoppingCartIcon style={{ fill: "white" }} />
                <Number> {quantity} </Number>
                <p>Pagar</p>
            </Background>
        </React.Fragment>
    );
}
export default CartWidget;
