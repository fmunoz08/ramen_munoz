import React from 'react';
import styled from 'styled-components';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import "./NavBar.css";

const minHeight = "1024px";

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

function NavBar({  }) {
    const [cart, setCart, addItem, removeItem, clear, isInCart] =
    useContext(CartContext);

    

    return (
        <React.Fragment>
            <NavDiv>
                <Link to='/' className="li">Ramen Rantaro</Link>
                <Link to='/category/Ramen' className="li">Ramen</Link>
                <Link to='/category/Bebidas' className="li">Bebidas</Link>
                <Link to='/cart/'>
                    <CartWidget cart={cart}></CartWidget>
                </Link>
            </NavDiv>
            <LineSeparator />
        </React.Fragment>
    );
}
export default NavBar;