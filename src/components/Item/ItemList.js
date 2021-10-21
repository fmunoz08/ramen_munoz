import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;

`;
function ItemList({ Items, addcart }) {

    return (
        <>
            <Wrapper>
                {
                    Items.map((item, index) =>
                        <Link to={`/item/${item.id}`}>
                            <Item addcart={addcart} key={index} Data={item} id={index}></Item>
                        </Link>
                    )
                }
            </Wrapper>
        </>
    );
}
export default ItemList;