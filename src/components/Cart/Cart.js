import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../CartContext";
import CartItem from "./CartItem";


const DetailBox = styled.div`
  align-self: center;
`;

const Background2 = styled.div`
background: white;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  padding: 16px;
  box-shadow: 0px -4px 8px 0px rgba(52, 69, 89, 0.2);
`;

const Paragraph = styled.p`

`;
const SubTitle = styled.h2`

`;

const StyledDiv = styled.div`

`;

const ButtonController = styled.button`

`;
function Cart() {
    // eslint-disable-next-line no-unused-vars
    const [cart,setCart,aux,setAux,addItem,removeItem,clear,isInCart,updateNumber,replaceItem,] = useContext(CartContext);

    let totalAmount = 0;
    cart.forEach((element) => {
        totalAmount = element.price * element.quantity + totalAmount;
    });

    return (
        <>
            {cart.length > 0 && (
                <StyledDiv style={{ paddingBottom: "30%" }}>
                    {cart.map((item, index) => {
                        return (
                            <CartItem
                                item={item}
                                index={index}
                                actNumber={updateNumber}
                                rep={replaceItem}
                                remItem={(id) => removeItem(id)}
                            />
                        );
                    })}
                    <Background2>
                        <DetailBox>

                            <Paragraph > Subtotal: ${totalAmount} clp </Paragraph>
                            <Paragraph> Envio: $1000 clp </Paragraph>
                            <Paragraph> Total: ${totalAmount + 1000} clp </Paragraph>

                            <Link to="/purchase">
                                <StyledDiv
                                    style={{
                                        border: "solid red 1px",
                                        borderRadius: "24px",
                                        cursor: "pointer",
                                        color: "#000000"
                                    }}
                                >
                                    <Paragraph> Ir a pagar</Paragraph>
                                </StyledDiv>
                            </Link>
                            <Paragraph style={{ cursor: "pointer", color: "gray" }} onClick={() => clear()}>Vaciar carrito</Paragraph>

                        </DetailBox>
                    </Background2>
                </StyledDiv>
            )}
            {cart.length === 0 && (
                <React.Fragment>
                    <SubTitle>Tu carrito esta Vacio :( </SubTitle>
                    <Link to="/">
                        <ButtonController>Llevame al Inicio </ButtonController>
                    </Link>
                </React.Fragment>
            )}
        </>
    );
}
export default Cart;
