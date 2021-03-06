import React, { useContext } from 'react';
import styled from 'styled-components';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import "./NavBar.css";

const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 48px;
    background: black;
`;
const LineSeparator = styled.div`
     width: 100%;
     height: 2px;
     background: #E9EEF4;
`;

function NavBar() {
    // eslint-disable-next-line no-unused-vars
    const [cart, setCart, number, setNumber, addItem, removeItem, clear, isInCart, updateNumber] =
        useContext(CartContext);

    return (
        <React.Fragment>
            <NavDiv>
                <Link to='/' className="li">Ramen Rantaro</Link>
                <Link to='/category/Ramen' className="li">Ramen</Link>
                <Link to='/category/Bebida' className="li">Bebidas</Link>
                {
                    cart.length > 0 &&
                    <Link to='/cart/'>
                        <CartWidget cantidad={number} ></CartWidget>
                    </Link>
                }
            </NavDiv>
            <LineSeparator />
        </React.Fragment>
    );
}
export default NavBar;